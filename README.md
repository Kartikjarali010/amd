# NutriFlow Dashboard

A modern, high-performance, and beautifully designed nutrition and health tracking dashboard built with React, Vite, and Tailwind CSS. 

![NutriFlow Dashboard Overview](src/assets/hero.png)

## Hackathon Context

### Chosen Vertical
**Health, Fitness & Wellness Technology**
This project addresses the growing need for personalized, data-driven health tracking by providing an all-in-one dashboard to monitor caloric intake, macronutrients, and vital signs in an easily digestible format.

### Approach and Logic
The development approach focused on **Performance, Modularity, and Premium Design**:
- **Component-Driven Architecture**: The UI is broken down into reusable React components (`StatCard`, `WaterTracker`, `SmartInsights`), making the codebase highly scalable.
- **Enterprise-Grade UI/UX**: Moved away from generic templates to build a custom, dark-mode design system. We utilized Tailwind CSS to enforce strict design tokens (Emerald Green and Pink palette, 1px borders, solid surfaces) ensuring a highly polished, professional user experience.
- **Data Visualization First**: Raw numbers are hard to read. We prioritized integrating robust data visualizations (Recharts) so users can instantly understand their weekly trends and daily goal completions via dynamic area charts and interactive SVG rings.

### How the Solution Works
NutriFlow operates as a responsive Single Page Application (SPA) with several core modules:
1. **Live Dashboard**: The central hub. Users can log meals via an interactive modal, which dynamically recalculates their daily caloric progress and updates the SVG progress ring. It also features a Smart AI Insights panel that provides context-aware suggestions (e.g., "You need 15g more protein today").
2. **Interactive Diary**: A chronological timeline that logs individual meals (Breakfast, Lunch, Snacks) and breaks down the specific macros for each entry.
3. **Analytics & Health Metrics**: Detailed sub-views using bar and pie charts to visualize macronutrient splits, alongside line charts tracking vital signs like resting heart rate and sleep duration.
4. **Hydration Tracking**: A gamified, interactive widget that uses custom CSS animations to fill liquid bars as users log their daily water intake.

### Assumptions Made
During the development of this prototype, the following assumptions were made:
- **Backend API Simulation**: The application currently uses simulated mock data arrays to represent the database. In a production environment, this would be wired to a RESTful or GraphQL backend API.
- **User Knowledge**: The UI assumes the user has a basic understanding of health metrics (e.g., knowing what "macros" or "kcal" are).
- **Third-Party Integrations**: The "Integrations" toggles in the Profile tab (for Apple Health, Google Fit, etc.) are assumed to be handled via OAuth in a full-stack implementation; they currently act as UI demonstrations.
- **Authentication**: The dashboard assumes the user is already authenticated. The deployment config opens access to the public for demonstration purposes.

---

## Technical Details & Local Setup

### Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Visualization**: Recharts

### Local Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

### Deployment (Google Cloud Run)

This repository comes pre-configured with a multi-stage Docker build, utilizing an NGINX server to correctly route the application.

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
