<script setup>
import { RouterLink } from 'vue-router';
import JobListing from '@/components/JobListing.vue';
import { ref, defineProps, onMounted, reactive } from 'vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/init.js';
defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
});

const state = reactive({
    jobs: [],
    isLoading: true
});
async function getJobs() {
    const querySnapshot = await getDocs(collection(db, "jobs"));
    querySnapshot.forEach((doc) => {
        state.jobs.push({ ...doc.data(), id: doc.id });
    });
    console.log(state.jobs);

}
onMounted(async () => {
    try {
        await getJobs();
    } catch (error) {
        console.error("Error fetching jobs:", error);
    } finally {
        state.isLoading = false;
    }
});
</script>

<template>
    <section class="bg-blue-50 px-4 py-10 mx-auto">
        <div class="container-xl lg:container mx-auto">
            <h2
                class="text-3xl font-bold text-green-500 mb-8 text-center">
                Browse Jobs
            </h2>
            <!-- Show Laoding spinners -->
            <div v-if="state.isLoading"
                class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>
            <div v-else
                class="grid md:grid-cols-3 gap-6 mx-auto">
                <JobListing
                    v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
                    :key="job.id"
                    :job="job">
                </JobListing>
            </div>
        </div>
    </section>

    <section v-if="showButton"
        class="m-auto max-w-lg my-10 px-6">
        <RouterLink :to="'/jobs'"
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View
            All Jobs</RouterLink>
    </section>

</template>

<style scoped></style>