# Discover Component Preview - Vite App

This is a minimal Vite application scaffolded to preview the **Discover** React component.

## Overview

The Discover component is a mobile-responsive image gallery interface with:
- Grid layout for browsing images
- Navigation bar with home, search, add, and profile options
- Mobile-first design (375px width)

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

Build the app:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

- `src/components/Discover/` - The Discover component and its assets
  - `index.tsx` - Main component file
  - `assets/` - Image assets used by the component
- `src/App.tsx` - Main app component that renders Discover
- `src/main.tsx` - Application entry point

## Technologies Used

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **@figmint/react** - Figma-to-React component utilities

## Screenshot

![Discover Component Preview](https://github.com/user-attachments/assets/9840fbf0-abc4-4850-bb12-c4c4e6fa9027)
