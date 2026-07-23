# Agent Instructions
## Sidlayiya Labs Landing Page — Build Guide

**Version:** 1.0  
**Date:** July 13, 2026  
**Audience:** Cursor AI agent (or any developer/agent implementing this project)

---

## 1. Mission

Rebuild `index.html` into a **high-quality, pixel-faithful landing page** matching the reference design (`image/cccd7e31a6fd84948d38fe2f96fb0960.jpg`). Follow `PRD.md` for requirements and `design.md` for visual specifications.

**Deliverable:** A production-ready single-page site that works offline, loads fast, and looks premium on mobile and desktop.

---

## 2. Required Reading (Before Coding)

Read these files in order:

1. **`PRD.md`** — Sections, content, acceptance criteria, scope
2. **`design.md`** — Colors, typography, spacing, components, breakpoints
3. **`image/cccd7e31a6fd84948d38fe2f96fb0960.jpg`** — Visual reference (ground truth for layout)

Do not start implementation until all three are understood.

---

## 3. Implementation Rules

### Must Do
- Rebuild `index.html` using the reference layout with **Sidlayiya Labs** branding
- Use **HTML + Tailwind CSS + vanilla JavaScript** (no React/Vue unless user requests)
- Match the **blue accent** (`#0066FF`) dark theme from `design.md` — not the cyan theme in the current `index.html`
- Implement **all 9 sections**: Nav, Hero, Projects, Pricing, Tech Stack, Testimonials, Process, Contact, Footer
- Make the page **fully responsive** (mobile-first)
- Use **semantic HTML** with proper heading hierarchy
- Add **smooth scroll** for anchor navigation
- Implement **mobile hamburger menu**
- Add **contact form validation** (client-side)
- Respect **`prefers-reduced-motion`**
- Use the Inter font from Google Fonts

### Must Not Do
- Do not keep the old cyber aesthetic (monospace, cyan, code backgrounds) — use new blue-accent design with Sidlayiya Labs name
- Do not use JetBrains Mono as the primary font
- Do not skip sections to save time
- Do not hotlink random external images without fallbacks — prefer local `assets/` images or reliable placeholders
- Do not add a build pipeline unless the user asks
- Do not create git commits unless the user explicitly requests
- Do not create extra markdown files beyond what was requested

### Minimize Scope
- Smallest correct diff that achieves the design
- No over-engineering: no utility libraries, no animation frameworks unless needed for one effect
- Inline Tailwind config in `index.html` is fine (matches current project pattern)

---

## 4. Build Order

Follow this sequence to avoid rework:

```
Step 1: Scaffold
├── HTML skeleton with semantic landmarks
├── Tailwind CDN + config tokens from design.md
├── Inter font import
└── Section placeholders with correct IDs for nav anchors

Step 2: Static Layout (Desktop)
├── Navigation bar
├── Hero (two-column)
├── Projects grid (3 cards)
├── Pricing (3 cards, middle emphasized)
├── Tech stack icon row
├── Testimonials (3 cards)
├── Process (4 steps)
├── Contact (two-column)
└── Footer

Step 3: Responsive Pass
├── Mobile hamburger menu
├── Stack all multi-column sections
├── Full-width CTAs on mobile
└── Reorder pricing cards (popular first on mobile)

Step 4: Interactions
├── Smooth scroll + scroll-margin-top on sections
├── Header scroll state (background opacity)
├── Mobile menu toggle (aria-expanded)
├── Scroll fade-in animations (Intersection Observer)
└── Contact form validation

Step 5: Polish & QA
├── Hover states on cards, buttons, links
├── Image lazy loading + alt text
├── Meta tags (title, description, OG)
├── Lighthouse/a11y quick check
└── Visual comparison against reference image
```

---

## 5. Section IDs & Nav Mapping

| Nav Label | Section ID | Notes |
|-----------|------------|-------|
| Home | `#home` | Hero section |
| About | `#about` | Can be combined with hero or a brief intro block |
| Services | `#services` | Pricing section |
| Projects | `#projects` | Featured work |
| Process | `#process` | 4-step flow |
| Testimonials | `#testimonials` | Client quotes |
| Contact | `#contact` | Form + info |
| Work With Me (CTA) | `#contact` | Same as Contact |

---

## 6. Content Source

Use copy from `PRD.md` Section 5. Exact headlines from the reference:

| Section | Headline |
|---------|----------|
| Hero | Websites That Build Brands. |
| Projects | A Selection of My Work |
| Pricing | Simple Packages. Real Results. |
| Tech Stack | Tools & Technologies I Use |
| Testimonials | What Clients Say |
| Process | A Clear & Proven Process |
| Contact | Let's Build Something Great |

Pricing tiers and project names are specified in `PRD.md` — use verbatim.

---

## 7. Assets Strategy

### Images needed
| Asset | Suggested path | Fallback |
|-------|----------------|----------|
| Hero device mockup | `assets/images/hero-mockup.png` | CSS-only device frames + gradient |
| Project 1–3 | `assets/images/projects/*.jpg` | Placeholder via `placehold.co` or unsplash |
| Testimonial avatars | `assets/images/avatars/*.jpg` | UI Avatars API or initials circles |
| Tech stack icons | Inline SVG or CDN (Simple Icons) | Text labels |

### Reference image
The file `image/cccd7e31a6fd84948d38fe2f96fb0960.jpg` is the **layout reference only** — do not embed the entire mockup as the page background.

---

## 8. JavaScript Scope

Keep JS minimal. Only implement:

```js
// main.js responsibilities:
// 1. Mobile nav toggle
// 2. Header scroll class toggle
// 3. Smooth scroll (if not using CSS scroll-behavior)
// 4. Intersection Observer for fade-in
// 5. Contact form validation + submit handler
```

Prefer `scroll-behavior: smooth` in CSS over JS where possible.

### Form submit (v1 — backend paused)
- Validate fields client-side only
- On success: show inline success message
- Log to console — **do not** wire Formspree, email API, or mailto until user requests
- "Book a Free Call" buttons scroll to `#contact` — no Calendly URL until user provides one

---

## 9. Tailwind Setup

Match the existing project pattern (CDN with inline config). Override the old Sidlayiya color tokens entirely.

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Extend theme per `design.md` Section 12. Use `class="dark"` on `<html>` only if needed — the page is dark by default without a toggle.

---

## 10. Accessibility Checklist

Agent must verify before marking complete:

- [ ] One `<h1>` in hero
- [ ] `<nav aria-label="Main navigation">`
- [ ] Mobile menu button has `aria-expanded` and `aria-controls`
- [ ] All images have meaningful `alt`
- [ ] Form inputs have associated `<label>` elements
- [ ] Focus states visible on all interactive elements
- [ ] Color contrast passes WCAG AA
- [ ] `prefers-reduced-motion` disables animations
- [ ] Skip-to-content link as first focusable element

---

## 11. Quality Bar

The page is **not done** until:

1. **Visual fidelity** — Side-by-side with reference image, all sections recognizable
2. **Responsive** — No broken layouts at 375px, 768px, 1024px, 1280px
3. **Interactive** — Nav, menu, hovers, and form all work
4. **Clean code** — No dead CSS from old page, no console errors
5. **Performance** — No enormous unoptimized images

---

## 12. File Changes Expected

| File | Action |
|------|--------|
| `index.html` | **Rewrite** — full new landing page |
| `js/main.js` | **Create** (optional — can be inline in HTML for single file) |
| `assets/images/` | **Create** — project images, avatars, mockup |
| `PRD.md` | Already exists — do not modify unless user asks |
| `design.md` | Already exists — do not modify unless user asks |
| `agent.md` | Already exists — do not modify unless user asks |

---

## 13. Troubleshooting

| Problem | Solution |
|---------|----------|
| Page looks cyan/teal instead of blue | Re-check Tailwind tokens — old Sidlayiya colors may remain |
| Sections too cramped | Increase section `py-24` and container `max-w-7xl` |
| Mobile nav doesn't close on link click | Add click handler to close menu after anchor navigation |
| Mockup looks flat | Add `perspective`, layered transforms, and radial glow div behind |
| Pricing card not emphasized | Middle card needs `border-2 border-accent` + "Most Popular" absolute badge |
| Fonts look wrong | Ensure Inter is loaded and applied to `body`, not monospace |

---

## 14. Verification Commands

After implementation, agent should:

1. Open `index.html` in browser (or run a local static server)
2. Resize viewport to test breakpoints
3. Tab through interactive elements for focus order
4. Submit empty form — validation messages should appear
5. Compare section order against reference image

Optional shell command for local preview:
```bash
npx --yes serve .
```

---

## 15. Handoff

When implementation is complete, report to the user:

1. What was built (section list)
2. Any deviations from PRD/design and why
3. Paused items: form backend integration, Calendly/booking URL
4. How to preview locally

---

## 16. Quick Reference — Color & Font

```
Background:  #0A0A0A
Surface:     #161616
Border:      #2A2A2A
Accent:      #0066FF
Text:        #FFFFFF
Text muted:  #A3A3A3
Font:        Inter
Radius:      12px cards, 8px buttons
```

**When in doubt, trust `design.md` for visuals and `PRD.md` for content/behavior.**
