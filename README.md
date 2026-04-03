# GrowthNudge Production App

This is the production-ready React application for **GrowthNudge**, built from the Stitch designs and optimized for performance and scalability.

## Quick Start: Launching to Vercel (3 Minutes)

1.  **Login to Vercel:** Go to [vercel.com](https://vercel.com) and log in.
2.  **Add New Project:** Click "Add New" -> "Project."
3.  **Deploy Local Folder:** Download this `GrowthNudge_App` folder to your computer and drag it into the Vercel upload area.
4.  **Done!** Vercel will automatically detect the Vite settings and give you a live URL in under 60 seconds.

## Database Setup: Supabase (Optional for Beta)

To enable the "Live Nudges" and "Community Wins" features:

1.  **Create a Supabase Project:** Go to [supabase.com](https://supabase.com).
2.  **Run SQL:** Open the "SQL Editor" in Supabase and paste the contents of `supabase_setup.sql` (found in this folder).
3.  **Connect:** Copy your `SUPABASE_URL` and `SUPABASE_ANON_KEY` into a `.env` file in this directory (e.g., `VITE_SUPABASE_URL=your_url`).

## Project Structure

- `src/pages/Dashboard.jsx`: The "My Website" landing page.
- `src/pages/NudgeLibrary.jsx`: The repository of growth actions.
- `src/pages/ExpertHelp.jsx`: The "Hire an Expert" services marketplace.
- `tailwind.config.js`: Contains all UENI brand purple and neon green definitions.
