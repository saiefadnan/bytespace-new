# ByteSpace Design System Reference

## Brand Palette & CSS Variables

```css
:root {
  /* Brand Primary */
  --bytespace-blue: #0B3BDE;
  --bytespace-blue-dark: #072BB0;
  --bytespace-blue-light: #2554FF;

  /* Brand Accent */
  --bytespace-lime: #D6F831;
  --bytespace-lime-hover: #C5E924;
  --bytespace-lime-text: #0A1E00;

  /* Dark & Slate Neutrals */
  --bytespace-dark: #0A0E1A;
  --bytespace-slate: #1E293B;
  --bytespace-muted: #64748B;
  --bytespace-border: #E2E8F0;
  --bytespace-surface: #FFFFFF;
  --bytespace-bg-alt: #F8FAFC;

  /* Typography */
  --font-primary: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
}
```

## Reusable Component Classes & Patterns

```css
/* Lime Primary Action Button */
.btn-lime {
  background-color: var(--bytespace-lime);
  color: var(--bytespace-lime-text);
  font-weight: 700;
  border-radius: 9999px;
  padding: 0.65rem 1.5rem;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px 0 rgba(214, 248, 49, 0.39);
}
.btn-lime:hover {
  background-color: var(--bytespace-lime-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(214, 248, 49, 0.55);
}

/* Blue Container Hero */
.hero-blue-canvas {
  background-color: var(--bytespace-blue);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

/* Course Card Shadow & Transition */
.course-card {
  background: #ffffff;
  border: 1px solid var(--bytespace-border);
  border-radius: 16px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px -8px rgba(11, 59, 222, 0.12), 0 0 0 1px rgba(11, 59, 222, 0.1);
}
```
