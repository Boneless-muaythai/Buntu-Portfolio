# Product Requirements Document (PRD)
## Sidlayiya Labs — Web Designer & Developer Landing Page

**Version:** 1.0  
**Date:** July 13, 2026  
**Status:** Draft — Pre-implementation  
**Reference:** `image/cccd7e31a6fd84948d38fe2f96fb0960.jpg`

---

## 1. Executive Summary

Build a high-quality, conversion-focused landing page for **Sidlayiya Labs**, a freelance web designer and developer brand. The page must closely match the provided reference design: a dark, premium aesthetic with electric-blue accents, clear service positioning, social proof, transparent pricing, and multiple conversion paths.

The site is a **single-page marketing site** (not a multi-page app). Its primary job is to establish credibility, showcase work, explain the offer, and drive visitors to book a call or send an inquiry.

---

## 2. Goals & Success Metrics

### Business Goals
| Goal | Description |
|------|-------------|
| Lead generation | Capture contact form submissions and "Book a Free Call" clicks |
| Trust building | Communicate professionalism through portfolio, testimonials, and process |
| Offer clarity | Present three pricing tiers so prospects self-qualify |
| Brand positioning | Position Sidlayiya Labs as a premium but approachable web designer/developer |

### Success Metrics (Post-launch)
| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Mobile usability | Fully responsive, no horizontal scroll |
| Time to first meaningful paint | < 2s on 4G |

---

## 3. Target Audience

### Primary Persona — **Sarah, Small Business Owner**
- Runs a local or online business (real estate, agency, SaaS startup)
- Needs a professional website but lacks in-house design/dev skills
- Values clarity, speed, and results over technical jargon
- Budget: $1,250–$4,500+

### Secondary Persona — **Marcus, Startup Founder**
- Early-stage SaaS or product company
- Needs a polished marketing site to attract investors and customers
- Cares about modern stack, performance, and scalability signals

---

## 4. Scope

### In Scope (v1)
- Single HTML landing page with all sections from reference design
- Sticky/fixed navigation with smooth scroll to section anchors
- Responsive layout (mobile, tablet, desktop)
- Static content (copy, images, pricing) — no CMS in v1
- Contact form UI with client-side validation (submission can be mailto or placeholder endpoint)
- Hover states, subtle animations, and visual polish matching reference
- Semantic HTML, accessible markup, and SEO meta tags

### Out of Scope (v1)
- Backend / database
- User authentication
- Blog or CMS
- Payment processing
- Analytics integration (can be added later via script tag)
- Multi-language support
- Custom 3D assets (use CSS transforms + images for device mockups)

---

## 5. Page Structure & Section Requirements

### 5.1 Navigation Bar
| Element | Requirement |
|---------|-------------|
| Logo | Text: "Sidlayiya Labs" — left aligned |
| Links | Home, About, Services, Projects, Process, Testimonials, Contact |
| CTA | "Work With Me" button with arrow icon — primary blue, right aligned |
| Behavior | Fixed on scroll; background blur or solid dark on scroll; active section highlight optional |
| Mobile | Hamburger menu with full-screen or slide-out drawer |

**Acceptance criteria:**
- All nav links scroll to correct section
- CTA scrolls to Contact or opens booking link
- Nav remains usable at 320px viewport width

---

### 5.2 Hero Section
| Element | Content |
|---------|---------|
| Eyebrow | `WEB DESIGNER & DEVELOPER` (blue, uppercase, small) |
| Headline | `Websites That Build Brands.` |
| Subheadline | Value proposition: high-performing websites that help businesses stand out, attract customers, and grow online |
| Primary CTA | `View My Work` — solid blue button |
| Secondary CTA | `Book a Free Call` — outlined/ghost with phone icon |
| Trust badges | Three items with icons: Custom Designs, Fast & Responsive, SEO Optimized |
| Visual | Layered device mockups (laptop, tablet, phone) showing dark-themed site previews |

**Acceptance criteria:**
- Two-column layout on desktop; stacked on mobile
- CTAs are visually distinct and tappable (min 44px touch target)
- Device mockup has depth effect (layering, shadow, optional slight rotation)

---

### 5.3 Featured Projects
| Element | Requirement |
|---------|-------------|
| Title | `A Selection of My Work` |
| Link | `View All Projects` — top right |
| Cards | 3 project cards in a row (stack on mobile) |

**Project cards (content from reference):**

| Project | Tagline | Category |
|---------|---------|----------|
| Venture Studio | Beyond Limits | Creative Agency Website |
| Haven Estates | Luxury Redefined | Luxury Real Estate Website |
| Nexora | Innovate. Build. Scale. | SaaS Platform Website |

Each card includes: preview image, title, short description, arrow/link icon (top-right corner).

**Acceptance criteria:**
- Cards have hover lift/glow effect
- Images use `alt` text and lazy loading
- Entire card is clickable (or has clear link affordance)

---

### 5.4 Service Packages (Pricing)
| Element | Requirement |
|---------|-------------|
| Headline | `Simple Packages. Real Results.` |
| Layout | 3 vertical pricing cards |

| Tier | Price | Badge | Key features |
|------|-------|-------|--------------|
| Starter Website | $1,250 | — | Up to 5 pages, Responsive design, Contact form, Basic SEO, 2 revisions, 2-week delivery |
| Business Website | $2,500 | **Most Popular** | Up to 10 pages, CMS integration, Advanced SEO, Blog setup, 3 revisions, 3-week delivery |
| Custom Website | $4,500+ | — | Unlimited pages, E-commerce ready, Custom features, Priority support, Unlimited revisions, Custom timeline |

Each card: feature list with blue checkmarks, `Get Started` CTA at bottom.

**Acceptance criteria:**
- "Business Website" card has blue border and "Most Popular" badge
- Pricing is readable and scannable on mobile
- CTAs link to Contact section with pre-selected package (optional enhancement)

---

### 5.5 Tech Stack
| Element | Requirement |
|---------|-------------|
| Headline | `Tools & Technologies I Use` |
| Icons | Figma, Webflow, WordPress, JavaScript, TypeScript, React, Next.js, Tailwind CSS, GSAP |

**Acceptance criteria:**
- Icons in dark bordered squares, evenly spaced
- Horizontal scroll on mobile if needed, or wrap to 2 rows
- Each icon has accessible label (`aria-label` or visible text)

---

### 5.6 Testimonials
| Element | Requirement |
|---------|-------------|
| Headline | `What Clients Say` |
| Layout | 3 testimonial cards horizontally |

**Sample testimonials (from reference):**
1. **Jessica Miller** — Founder, Haven Estates
2. **David Chen** — CEO, Nexora
3. **Amanda Foster** — Director, Venture Studio

Each card: blue quotation mark icon, quote text, avatar, name, title.

**Acceptance criteria:**
- Cards maintain equal visual weight
- Quote text is readable (contrast ratio ≥ 4.5:1)
- Avatar images are circular with consistent sizing

---

### 5.7 Process
| Element | Requirement |
|---------|-------------|
| Headline | `A Clear & Proven Process` |
| Steps | 4 numbered steps with connecting arrows |

| Step | Title | Description |
|------|-------|-------------|
| 1 | Discover | Discuss goals, audience, and vision |
| 2 | Design | Wireframes and high-fidelity designs |
| 3 | Develop | Clean, performant code |
| 4 | Launch | Testing, optimization, and go-live |

**Acceptance criteria:**
- Steps flow left-to-right on desktop; vertical or 2×2 grid on mobile
- Number badges are prominent (blue circle)
- Arrows/connectors visible between steps on desktop

---

### 5.8 Contact
| Element | Requirement |
|---------|-------------|
| Headline | `Let's Build Something Great` |
| Left column | Email, location (Remote Worldwide), availability hours |
| Right column | Form fields |

**Form fields:**
- Name (required)
- Email (required, validated)
- Project Type (dropdown: Business Website, E-commerce, Landing Page, Redesign, Other)
- Budget Range (dropdown: Under $1,500, $1,500–$3,000, $3,000–$5,000, $5,000+)
- Message (textarea, required)
- Submit: `Send Message` with paper-plane icon

**Acceptance criteria:**
- Form shows inline validation errors
- Submit button is full-width on mobile
- Contact info is clickable (mailto link for email)

---

### 5.9 Footer
| Element | Requirement |
|---------|-------------|
| Brand | Sidlayiya Labs logo + short bio |
| Social | LinkedIn, Twitter/X, Instagram, Dribbble (or similar) |
| Columns | Quick Links, Services |
| CTA block | "Let's Work Together" + `Book a Free Call` button |
| Bottom bar | © 2026 Sidlayiya Labs. "Built with passion. Designed for results." |

**Acceptance criteria:**
- Footer links mirror main nav sections
- Social icons open in new tab with `rel="noopener noreferrer"`
- Layout stacks cleanly on mobile

---

## 6. Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01 | Smooth scroll navigation to section anchors | P0 |
| FR-02 | Mobile hamburger menu with open/close states | P0 |
| FR-03 | Contact form client-side validation | P0 |
| FR-04 | Responsive images with lazy loading | P1 |
| FR-05 | Scroll-triggered fade-in animations (subtle) | P1 |
| FR-06 | Sticky header with scroll state change | P1 |
| FR-07 | Focus-visible styles for keyboard navigation | P0 |
| FR-08 | Reduced-motion media query support | P1 |

---

## 7. Non-Functional Requirements

### Performance
- Single-file or minimal asset footprint for v1
- Use Tailwind CDN or compiled CSS (match existing project approach)
- Optimize/compress images; prefer WebP with fallback
- No render-blocking scripts beyond essentials

### Accessibility (WCAG 2.1 AA)
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Skip-to-content link
- Sufficient color contrast
- Form labels associated with inputs
- `aria-expanded` on mobile menu toggle

### SEO
- Unique `<title>` and meta description
- Open Graph tags (title, description, image)
- Structured heading hierarchy (one `h1`, logical `h2`/`h3`)
- `lang="en"` on `<html>`

### Browser Support
- Chrome, Firefox, Safari, Edge (last 2 versions)
- iOS Safari, Android Chrome

---

## 8. Technical Approach

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Stack | HTML + Tailwind CSS + vanilla JS | Matches existing `index.html`; fast to ship, no build step required |
| Fonts | Inter (primary), optional display font | Matches reference modern sans-serif aesthetic |
| Icons | Lucide, Heroicons, or Material Symbols | Consistent icon set across UI |
| Images | Local `assets/` or `image/` folder | Avoid hotlinking; control quality |
| Animations | CSS transitions + Intersection Observer | Lightweight, accessible with `prefers-reduced-motion` |

### File Structure (proposed)
```
/
├── index.html          # Main landing page (rebuild)
├── PRD.md
├── design.md
├── agent.md
├── assets/
│   ├── images/         # Project shots, avatars, mockups
│   └── icons/          # Tech stack SVGs (optional)
└── js/
    └── main.js         # Nav, form, scroll animations (optional split)
```

---

## 9. Content Requirements

All copy should be professional, benefit-driven, and concise. Tone: confident, friendly, results-oriented — not overly technical.

Placeholder content from the reference design is acceptable for v1. Client-specific copy can be swapped without layout changes.

---

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Reference image assets unavailable | High | Use placeholder images + CSS mockup frames |
| Existing `index.html` is different brand (Sidlayiya Labs) | Medium | Full rebuild per this PRD; archive old version if needed |
| Form has no backend | Medium | Use Formspree/Netlify Forms or mailto fallback; document in README |
| Over-animation hurts performance | Low | Cap animations; respect `prefers-reduced-motion` |

---

## 11. Milestones

| Phase | Deliverable | Est. effort |
|-------|-------------|-------------|
| **Phase 0** | PRD, design.md, agent.md | ✅ Current |
| **Phase 1** | HTML structure + Tailwind tokens + all sections (static) | 1 session |
| **Phase 2** | Responsive polish + interactions + form validation | 1 session |
| **Phase 3** | Performance pass, a11y audit, final QA vs reference | 1 session |

---

## 12. Resolved Decisions

| # | Question | Decision |
|---|----------|----------|
| 1 | Branding name | **Sidlayiya Labs** (user's own brand — not Ethan Cole from reference) |
| 2 | Form submission backend | **Paused** — client-side validation only for v1; no backend wiring yet |
| 3 | "Book a Free Call" URL | **Paused** — scroll to Contact section for now; Calendly/booking link TBD |
| 4 | Replace existing page? | Replace `index.html` with new design (new visual style, same brand) |

---

## 13. Approval

| Role | Name | Date | Status |
|------|------|------|--------|
| Product Owner | — | — | Pending |
| Designer | — | — | Pending |
| Developer | Agent | 2026-07-13 | Ready to implement |
