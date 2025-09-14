# Vue Jobs Board

A modern job board application built with [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). This project allows users to browse, add, edit, and delete job listings, with a clean UI and responsive design.

## Features

- Browse all job listings
- View job details
- Add new job postings
- Edit and delete existing jobs
- 404 Not Found page for invalid routes
- Toast notifications for actions
- Loading spinners for async operations
- Responsive and mobile-friendly design

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Toastification](https://vue-toastification.maronato.dev/)
- [PrimeIcons](https://www.primefaces.org/primeicons/)
- [Firebase](https://firebase.google.com/) (for backend/database)

## Project Setup

Install dependencies:

```sh
npm install
```

### Firebase Setup

This project uses [Firebase](https://firebase.google.com/) as the backend for storing job listings.  
You need to create a Firebase project and configure your credentials.

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In your project, add a web app and copy the Firebase config.
3. Create a file at `firebase/init.js` and add your Firebase configuration and initialization code:

```js
// filepath: firebase/init.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export default app;
```

4. Update your codebase to use Firebase for all job data operations.

### Start the Development Server

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Directory Structure

```
src/
  assets/          # Static assets (logo, base styles)
  components/      # Vue components (Navbar, JobListing, etc.)
  router/          # Vue Router setup
  views/           # Page views (Home, Jobs, Add/Edit Job, etc.)
  main.js          # App entry point
  main.css         # Tailwind CSS entry
firebase/
  init.js          # Firebase configuration and initialization
```