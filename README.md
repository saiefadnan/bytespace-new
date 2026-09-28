# ByteSpace — Online Learning Platform & In-Demand Tech Courses

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)]()
[![React](https://img.shields.io/badge/React-19-61dafb)]()
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8)]()
[![Vite](https://img.shields.io/badge/Vite-8-646cff)]()
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange)]()

> Frontend Assessment Submission for **Doin Tech Limited**  
> **Candidate**: Saief Md. Hossain Adnan  
> **Tracking ID**: `03cb2890-63c9-4ab9-a1e2-fbdae94a99c3`  
> **Position**: Jr. Software Engineer (Frontend)  
> **Figma Design Reference**: [ByteSpace New Check website](https://www.figma.com/design/wkOtUok2kq1hwZY8hCnBAN/ByteSpace-New-Check-website--Copy-?node-id=0-1&p=f&t=jmqJqOeRGl3Xayfo-0)

---

## 🚀 Live Demo & Deployment

- **Live URL**: *(Deployed on Vercel)*
- **GitHub Repository**: [https://github.com/saiefadnan/bytespace-new](https://github.com/saiefadnan/bytespace-new)

---

## ✨ Features Overview

### 1. 🏠 Landing Page (`/`)
- **Hero Section**: Exact Figma layout with 3D spring doodles, verified student cutout, social proof badge (25k+ students, 4.9/5.0), and instant search input.
- **Partners Strip**: Social proof logo showcase (Duolingo, Magic Leap, Microsoft, Codecov, UserTesting).
- **Popular Courses Section**: Filterable by category tabs (*Design, Development, Data Science, Business, Marketing*) with animated card hover lift and modal curriculum view.
- **Features ("Real Skills for Real World")**: Visual student showcase with 98% completion rate badge and key value propositions.
- **Mentors Section**: Cards showing top instructors, specialties, student counts, and ratings with direct links to creator profiles.
- **High-Energy Promo Banner**: Electric lime CTA button with 7-day trial trigger.
- **Student Testimonials**: Authentic student review cards with 5-star ratings.
- **Global Footer**: 12-column layout with newsletter subscription input, social icons, and sitemap.

### 2. 🔍 Course Catalog & Search Page (`/search`)
- Matches Figma artboard `Search Page.svg`.
- Royal blue `#003BE2` hero banner with real-time keyword search.
- Multi-criteria filtering by **Category** and **Difficulty Level** (*Beginner, Intermediate, Advanced*).
- Multi-directional sorting (*Most Popular, Highest Rated, Price: Low to High, Price: High to Low*).
- Dynamic result counter and empty state with instant "Reset Filters" action.

### 3. 🎓 Course Details & Curriculum Page (`/course/:id`)
- Matches Figma artboards `Course Details.svg`, `Course Lessons.svg`, and `Course Reviews.svg`.
- Royal blue hero header with breadcrumbs, category pills, and rating summary.
- Interactive **Video Player Preview Mockup** with play button.
- **4 Tab Panels**:
  - **About Course**: Key learning outcomes checklist and requirements.
  - **Curriculum**: Expandable modules with individual lesson durations and free preview indicators.
  - **Instructor**: Bio, credentials, and link to creator profile.
  - **Reviews**: Rating breakdown and verified student reviews.
- **Sticky Sidebar Enrollment Card**: Price, 45% discount tag, 30-day money-back guarantee, feature inclusions checklist, and enrollment action.
- **"Learners Also Enrolled In"**: Related courses recommendation grid.

### 4. 👤 Creator / Mentor Profile Page (`/creator/:id`)
- Matches Figma artboard `Creator Profile.svg`.
- Instructor avatar with electric lime verified ring, stats strip (*Students Count, Rating, Courses Taught*).
- Interactive **"+ Follow Instructor"** button with active state toggle.
- Tabbed interface (*Courses Taught, About & Experience, Student Reviews*).
- **"Meet Other Industry Mentors"** cross-linking strip at the bottom.

### 5. 🔐 Auth Pages (`/login`, `/signup`)
- Matches Figma artboards `Login.svg` and `Register.svg`.
- Split-screen desktop layout: Royal blue canvas with student testimonial card on the left; white card with clean inputs on the right.
- Password visibility toggle, validation, and social login options (Google & GitHub).

### 6. 🚫 Custom 404 Page (`*`)
- Matches Figma artboard `404 Not Found.svg`.
- Royal blue canvas with large gradient "404" typography, floating 3D doodles, and an electric lime **"Back to Home"** CTA.

---

## 🏗️ Architecture & File Structure

The project follows a **Feature-Sliced / Modular Architecture**:

```text
src/
├── assets/                  # Static assets (extracted Figma images & doodles)
├── components/              # Shared, global UI primitives
│   ├── common/              # Button, Badge, ByteSpaceLogo, Navbar, Footer, ScrollToTop
│   └── index.ts             # Central components barrel
├── config/                  # Constants, app metadata, navigation links
│   ├── constants.ts
│   └── index.ts
├── context/                 # Global state providers
│   ├── AuthContext.tsx      # AuthProvider session state
│   ├── useAuthContext.ts    # Custom hook
│   └── index.ts
├── features/                # 🚀 Core Business Logic (Grouped by Feature)
│   ├── auth/                # AuthModal, useAuth, authService, types
│   ├── courses/             # CourseCard, CourseDetailsModal, PopularCoursesSection, useCourses
│   ├── creators/            # MentorsSection, creatorService, types
│   └── landing/             # HeroSection, PartnersStrip, FeaturesSection, PromoCtaSection, TestimonialsSection
├── hooks/                   # Shared custom hooks (useScroll, useDebounce)
├── layouts/                 # Page layouts (RootLayout)
├── pages/                   # Route components
│   ├── home/                # HomePage.tsx
│   ├── auth/                # LoginPage.tsx, SignupPage.tsx
│   ├── search/              # SearchPage.tsx
│   ├── creator/             # CreatorProfilePage.tsx
│   ├── course/              # CourseDetailsPage.tsx
│   ├── notfound/            # NotFoundPage.tsx
│   └── index.ts
├── routes/                  # Central routing configuration (AppRoutes.tsx)
├── services/                # Global API clients / mock fetch wrapper
├── utils/                   # Helpers (formatters)
├── App.tsx                  # Root wrapper with Router, AuthProvider, and AppRoutes
├── main.tsx                 # Application entry point
└── index.css                # Global styles & design tokens
```

---

## 🎨 Design System & Exact Figma Tokens

| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Brand Blue** | `#003BE2` | Hero sections, headers, brand accents |
| **Electric Lime** | `#CBFC01` / `#D4FB20` | Primary buttons, highlights, badges |
| **Surface Dark** | `#242528` | Main body headings and text |
| **Muted Text** | `#585A62` / `#82868E` | Subtitles, descriptions, captions |
| **Surface Light** | `#FAFAFA` / `#F5F5F6` | Section alternating backgrounds, cards |
| **Border Gray** | `#E5E6E8` / `#CED0D3` | Card borders, input strokes |
| **Primary Font** | `Poppins` (Google Fonts) | Headings, display banners, hero |
| **Body Font** | `Satoshi` (Fontshare) | UI controls, inputs, body copy |

---

## 🌿 Git Hygiene & Sequential Pull Request History

Each feature was developed on its own dedicated branch branched sequentially from `main` and merged via individual Pull Requests:

1. `feat/app-shell-and-mock-data` (PR #1) ➔ Merged ✅
2. `feat/landing-page-home` (PR #2) ➔ Merged ✅
3. `feat/pages-and-auth` (PR #3) ➔ Merged ✅
4. `feat/search-page` (PR #4) ➔ Merged ✅
5. `feat/creator-profile` (PR #5) ➔ Merged ✅
6. `feat/modular-architecture` (PR #6) ➔ Merged ✅
7. `feat/course-details` (PR #7) ➔ Merged ✅
8. `feat/deployment-and-docs` (PR #8) ➔ Active 🚀

---

## 🛠️ Local Development & Scripts

### Prerequisites
- Node.js 18+ (tested on Node v20 / v22)
- npm or pnpm

### Getting Started
```bash
# Clone the repository
git clone https://github.com/saiefadnan/bytespace-new.git

# Navigate into the project directory
cd bytespace-new

# Install dependencies
npm install

# Start the local development server
npm run dev
```

### Production Build & Linting
```bash
# Type check and build for production
npm run build

# Run Oxlint linter
npm run lint

# Preview production build locally
npm run preview
```

---

## 📄 License

This project was built exclusively for the frontend engineer assessment at **Doin Tech Limited**.
