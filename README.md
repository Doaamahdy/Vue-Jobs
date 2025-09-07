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
- [json-server](https://github.com/typicode/json-server) (for mock API)

## Project Setup

Install dependencies:

```sh
npm install
```

### Start the Mock API Server

```sh
npm run server
```

This will start `json-server` at [http://localhost:3000](http://localhost:3000) using [`src/jobs2.json`](src/jobs2.json).

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
  jobs2.json       # Mock job data for json-server
  main.js          # App entry point
  main.css         # Tailwind CSS entry
```
