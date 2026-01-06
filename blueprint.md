# Steelform Labs - Blueprint

## Overview

This document outlines the blueprint for the Steelform Labs website, a modern and interactive web application built with React, Vite, and Framer Motion. The website is designed to showcase the company's services, materials, and portfolio in a visually appealing and user-friendly manner.

## Project Structure

- `src/`
  - `components/`: Reusable components like `ScrollAnimation`, `ScrollToTop`.
  - `pages/`: Page components like `Home`, `About`, `ServicesPage`.
  - `App.tsx`: Main application component with routing.
  - `main.tsx`: Application entry point.
  - `index.css`: Global styles.
  - `Header.tsx`: Header component.
  - `Footer.tsx`: Footer component.
  - `Services.tsx`: Services section component.
  - `Materials.tsx`: Materials section component.
  - `Banner.tsx`: Banner component.

## Design and Styling

- **Styling:** CSS with a modern, clean design.
- **Animations:** Framer Motion for smooth page transitions and scroll animations.
- **Icons:** Phosphor Icons for a clean and modern look.

## Features

- **Routing:** `react-router-dom` for seamless navigation between pages.
- **Smooth Scrolling:** A `ScrollToTop` component ensures that navigation to a new page starts at the top.
- **Animations:** Page transitions and scroll-based animations to enhance user experience.
- **Responsive Design:** The website is designed to be responsive and work on different screen sizes.

## Fixes

### Routing Issue

- **Problem:** The application was not starting on the homepage after a hot restart.
- **Solution:** Refactored the routing logic to ensure that `BrowserRouter` wraps the `App` component at the root level in `App.tsx` and not in `main.tsx`.

### Homepage Reload Scroll Behavior

- **Problem:** Clicking the logo on the homepage would reload the page but maintain the current scroll position, instead of starting from the top.
- **Solution:** Implemented a click handler on the logo in both the header and footer. When on the homepage, this handler prevents the default React Router navigation and instead forces a full browser navigation to the root URL (`window.location.href = '/'`). This action triggers a page reload and resets the scroll position to the top.

## Current Task: Create Services Page

### Plan

1.  **Create `ServicesPage.tsx`:** Create a new page component for the services page.
2.  **Add Services Content:** Add the content for the services page, including a title and a list of services.
3.  **Create a route for the services page:** Add a new route in `App.tsx` to handle the services page.
4.  **Add a link to the services page in the header:** Add a link to the services page in the `Header.tsx` component.
