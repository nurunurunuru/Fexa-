# Fexa Agent

React + Vite landing page for Fexa Agent.

## Project structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── data/
│   └── stats.js
└── components/
    ├── common/       # Reusable UI helpers and animations
    ├── icons/        # Brand/social icons
    ├── navbar/       # Navigation
    ├── hero/         # Hero + dashboard mockup
    ├── mocks/        # Product/demo mockups
    └── sections/     # Individual landing-page sections
```

## Where to edit

- Navbar → `src/components/navbar/Navbar.jsx`
- Hero → `src/components/hero/Hero.jsx`
- Dashboard mockup → `src/components/hero/DashboardMock.jsx`
- Product mockups → `src/components/mocks/`
- Page sections → `src/components/sections/`
- Shared buttons/animations → `src/components/common/`
- Statistics data → `src/data/stats.js`
- Page composition → `src/App.jsx`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
