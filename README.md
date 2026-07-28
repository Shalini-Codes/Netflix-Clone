# 🎬 Binge UI - Netflix Clone (Production Architecture)

![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css3)
![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen?style=for-the-badge)

---

## 🌐 Live Demo & Overview

A high-performance **Netflix-inspired Streaming UI Clone** re-engineered with modern **Vite bundler architecture**, ES modules, TMDB API data integration, debounced search, native modal popups, and full mobile responsiveness.

---

## 🚀 Key Production Features

* 🎥 **Dynamic Spotlight Hero**: High-res backdrop featured banner with "Play" and "More Info" triggers.
* 🔍 **Real-time Live Search**: Instant debounced movie filtering across titles, genres, and categories.
* 🎞️ **Interactive Native `<dialog>` Modal**: Video trailer preview player, match %, maturity rating, release year, and overview.
* ✨ **Glassmorphism Navigation**: Scroll-detected glass background backdrop blur header.
* 🔐 **Client-Side Auth Validation**: Form validation with user session persistence (`localStorage`) on Login and Signup pages.
* 📱 **Fully Responsive Layout**: Mobile-first media queries supporting 320px to 4K displays.
* ⚡ **TMDB API Service Layer**: Live TMDB fetching with built-in offline fallback dataset.

---

## 📂 Production Folder Structure

```bash
NetflixClone/
├── index.html                   # Entry point HTML
├── pages/                       # Multi-page application views
│   ├── login.html               # Netflix Sign In page
│   └── signup.html              # Netflix Sign Up page
├── src/                         # Application Source Code
│   ├── main.js                  # App bootstrapper
│   ├── config/
│   │   └── api.js               # TMDB configuration & endpoints
│   ├── services/
│   │   └── tmdbService.js       # TMDB API service layer & offline fallbacks
│   ├── components/              # Modular UI components
│   │   ├── Navbar.js            # Glassmorphism header & search bar
│   │   ├── HeroBanner.js        # Spotlight movie banner
│   │   ├── MovieRow.js          # Poster rows with custom scrollbars
│   │   ├── MovieModal.js        # Native <dialog> movie trailer modal
│   │   └── Toast.js             # Notification feedback system
│   ├── pages/                   # Page controllers
│   │   ├── home.js              # Home page rendering logic
│   │   └── auth.js              # Auth form validation & state manager
│   └── styles/                  # Modular CSS design system
│       ├── main.css             # Base reset & CSS variables
│       ├── components.css       # Navbars, cards, scrollbars & dialogs
│       ├── home.css             # Hero spotlight & row layouts
│       └── auth.css             # Auth card & validation styling
├── .env.example                 # Environment variables configuration
├── package.json                 # Dependencies & NPM build scripts
└── vite.config.js               # Vite bundler configuration
```

---

## 🛠️ Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build Production Bundle
```bash
npm run build
```

---

## 🙋‍♀️ Author

**Shalini Bhagat**
