---
name: frontend-design
description: >-
  ByteSpace design system, visual guidelines, and engineering workflows. Use this skill whenever designing, building, styling, or refactoring ByteSpace UI components, landing page sections, course catalog, mock data, and auth flows.
---

# ByteSpace Frontend Design Skill & Standards

A project-specific engineering guide for building the **ByteSpace** EdTech web application with pixel fidelity to the Figma design, clean component architecture, and responsive polish.

---

## 1. Brand Identity & Visual Language

- **Primary Canvas**: Vibrant Royal Blue (`#0B3BDE` / `#0047FF`). Sets an energetic, confident, and professional EdTech tone.
- **High-Impact Accent**: Electric Lime / Neon Yellow (`#D6F831` / `#D4FF00`). Used for primary CTAs, active filter pills, stat badges, and playful sticker accents.
- **Surfaces**:
  - Light mode / Content cards: Crisp white (`#FFFFFF`) with subtle border separators (`#E2E8F0` / `rgba(15, 23, 42, 0.08)`).
  - Background sections: Soft cool off-white (`#F8FAFC` / `#F0F4FF`).
  - Dark / Blue sections: `#0B3BDE` with subtle ambient gradients.
- **Doodles & Micro-accents**: Organic sticker shapes, stars, squiggles, and floating pill chips that give ByteSpace its signature modern EdTech feel.

---

## 2. Design System Tokens

### Typography (`Plus Jakarta Sans`)
- **Font Family**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
- **Headings**:
  - `Hero Display`: `clamp(2.5rem, 5vw, 4rem)`, `font-weight: 800`, line-height `1.15`, letter-spacing `-0.025em`.
  - `H1 / Section Titles`: `clamp(1.75rem, 3.5vw, 2.5rem)`, `font-weight: 700`, letter-spacing `-0.02em`.
  - `H2 / Card Titles`: `1.25rem - 1.5rem`, `font-weight: 600`.
  - `Body`: `1rem` (`16px`), `line-height: 1.6`, text color `#334155` or `#0A0E1A`.
  - `Captions & Tags`: `0.75rem - 0.875rem`, `font-weight: 600`, uppercase or pill badges.

### Color Tokens
```css
:root {
  /* Brand Core */
  --bytespace-blue: #0B3BDE;
  --bytespace-blue-dark: #072BB0;
  --bytespace-blue-light: #2554FF;
  --bytespace-lime: #D6F831;
  --bytespace-lime-hover: #C5E924;
  --bytespace-lime-text: #0A1E00;

  /* Neutrals & Surfaces */
  --bytespace-dark: #0A0E1A;
  --bytespace-slate: #1E293B;
  --bytespace-muted: #64748B;
  --bytespace-border: #E2E8F0;
  --bytespace-surface: #FFFFFF;
  --bytespace-bg-alt: #F8FAFC;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.05);
  --shadow-hover: 0 20px 35px -10px rgba(11, 59, 222, 0.15), 0 0 0 1px rgba(11, 59, 222, 0.1);
  --shadow-lime-glow: 0 8px 24px -4px rgba(214, 248, 49, 0.45);
}
```

---

## 3. Component Architecture & Patterns

1. **Button Variants**:
   - `primary-lime`: Background `var(--bytespace-lime)`, text `var(--bytespace-lime-text)`, bold weight, pill-rounded (`rounded-full`), hover scale & glow.
   - `primary-blue`: Background `var(--bytespace-blue)`, text white, hover brightness.
   - `secondary-ghost`: Transparent background, subtle border, hover background.
2. **Course Card Pattern**:
   - Aspect ratio image with level badge overlay (e.g., "Beginner", "All Levels").
   - Star rating with review count (`4.8 ★ (1.2k)`).
   - Course title (bold, 2-line clamp).
   - Instructor snippet (avatar + name).
   - Meta footer (duration, lesson count, price).
   - Hover lift (`transform: translateY(-4px)` with smooth transition).
3. **Filter Pills**:
   - Rounded-full pill buttons.
   - Active state: Lime background with dark text or solid blue with white text.
   - Inactive state: Soft gray background with muted text.

---

## 4. Engineering Standards for Assessment

- **TypeScript First**: Strict types for all entities (`Course`, `Category`, `Review`, `User`). No `any`.
- **Component Modularity**: Divide into atomic UI primitives (`Button`, `Badge`, `Input`) and composite section modules (`HeroSection`, `PopularCourses`, `FeaturesSection`).
- **Semantic HTML & a11y**: Use `<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, `<button>`. Visible focus indicators for keyboard navigation.
- **Git Discipline**: Granular branches (`feat/app-shell-and-mock-data`, `feat/landing-page-home`, etc.), descriptive commit messages, and a clean Pull Request description.
