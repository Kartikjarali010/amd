# NutriFlow Dashboard

A modern, high-performance, and beautifully designed nutrition and health tracking dashboard built with React, Vite, and Tailwind CSS. 

![NutriFlow Dashboard Overview](src/assets/hero.png)

## Features

- **Nutritional Dashboard**: An interactive overview tracking daily calories, macronutrient goals, and active minutes using dynamic Recharts visualizations.
- **Smart AI Insights**: Context-aware widgets providing actionable health recommendations (e.g., remaining protein requirements).
- **Interactive Diary**: A fully styled chronological log of your meals with detailed macro breakdowns.
- **Health Metrics**: Track essential vitals such as resting heart rate, sleep duration, and hydration. Features a built-in interactive Water Tracker.
- **Enterprise-Ready Dark Mode**: A professional, ultra-clean UI utilizing standardized surfaces, sharp emerald and pink accents, and subtle typography built on top of a custom Tailwind configuration.
- **GCP Ready**: Includes a `Dockerfile` and `nginx.conf` fully optimized for a Google Cloud Run deployment.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Visualization**: Recharts

## Local Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment (Google Cloud Run)

This repository comes pre-configured with a multi-stage Docker build, utilizing an NGINX server to correctly route your Single Page Application (SPA).

1. Authenticate with Google Cloud:
   ```bash
   gcloud auth login
   ```
2. Set your Project ID:
   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```
3. Deploy to Cloud Run:
   ```bash
   gcloud run deploy nutriflow-dashboard --source . --port 8080 --allow-unauthenticated
   ```

## Design System
Refer to `DESIGN.md` in the root directory for a comprehensive breakdown of the project's color palette, typography guidelines, and core UI tokens.
