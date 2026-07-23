# Design Specification
## Sidlayiya Labs — Web Designer & Developer Landing Page

**Version:** 1.0  
**Date:** July 13, 2026  
**Reference:** `image/cccd7e31a6fd84948d38fe2f96fb0960.jpg`

---

## 1. Design Intent

Create a **premium dark-mode portfolio landing page** that feels trustworthy, modern, and conversion-oriented. The visual language balances minimalism with depth: dark surfaces, crisp white type, electric-blue accents, soft glows, and layered device mockups.

**Design keywords:** Professional · Clean · Confident · High-contrast · Subtle depth · Conversion-focused

---

## 2. Color System

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#0A0A0A` | Page background |
| `background-elevated` | `#111111` | Section alternates, cards |
| `surface` | `#161616` | Card backgrounds |
| `surface-border` | `#2A2A2A` | Card borders, dividers |
| `text-primary` | `#FFFFFF` | Headlines, primary body |
| `text-secondary` | `#A3A3A3` | Subheadings, descriptions |
| `text-muted` | `#6B6B6B` | Labels, footer fine print |
| `accent` | `#0066FF` | Primary CTA, links, badges, checkmarks |
| `accent-hover` | `#0052CC` | Button hover state |
| `accent-glow` | `rgba(0, 102, 255, 0.25)` | Glow behind mockups, card hover |
| `accent-subtle` | `rgba(0, 102, 255, 0.08)` | Eyebrow backgrounds, tinted surfaces |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#22C55E` | Form success states |
| `error` | `#EF4444` | Form validation errors |
| `badge-popular` | `#0066FF` | "Most Popular" pill background |

### Contrast Rules
- Body text on dark backgrounds: minimum **4.5:1** (WCAG AA)
- Large headlines (≥ 24px): minimum **3:1**
- Accent blue on dark: use white text on blue buttons; blue text only on dark surfaces where contrast passes

---

## 3. Typography

### Font Families

| Role | Font | Fallback |
|------|------|----------|
| Display & UI | **Inter** | system-ui, sans-serif |

> The reference uses a clean geometric sans. Inter is the default. No monospace or technical fonts for this design (unlike the existing Sidlayiya Labs page).

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display-xl` | 56px / 3.5rem | 700 | 1.1 | -0.02em | Hero headline (desktop) |
| `display-lg` | 48px / 3rem | 700 | 1.1 | -0.02em | Hero headline (tablet) |
| `display-md` | 36px / 2.25rem | 700 | 1.15 | -0.01em | Hero headline (mobile) |
| `heading-lg` | 32px / 2rem | 700 | 1.2 | -0.01em | Section titles |
| `heading-md` | 24px / 1.5rem | 600 | 1.3 | 0 | Card titles, subsections |
| `heading-sm` | 20px / 1.25rem | 600 | 1.4 | 0 | Pricing tier names |
| `body-lg` | 18px / 1.125rem | 400 | 1.6 | 0 | Hero subheadline |
| `body-md` | 16px / 1rem | 400 | 1.6 | 0 | Body copy, form labels |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | 0 | Card descriptions, footer |
| `label` | 12px / 0.75rem | 600 | 1.0 | 0.08em | Eyebrows, nav (uppercase) |
| `caption` | 12px / 0.75rem | 400 | 1.4 | 0 | Copyright, meta |

### Typography Rules
- **One `h1` per page** — hero headline only
- Section titles are `h2`; card titles are `h3`
- Eyebrow labels: uppercase, accent color, `label` size
- Max line length for body copy: **65ch**
- Never use all-caps for paragraphs (eyebrows and small labels only)

---

## 4. Spacing & Layout

### Spacing Scale (8px base)

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |
| `space-32` | 128px |

### Container
| Breakpoint | Max width | Horizontal padding |
|------------|-----------|------------------|
| Mobile | 100% | 16px |
| Tablet | 100% | 24px |
| Desktop | 1200px | 32px |
| Wide | 1280px | 32px |

### Section Vertical Padding
| Breakpoint | Padding Y |
|------------|-----------|
| Mobile | 64px (`space-16`) |
| Desktop | 96px (`space-24`) |

### Grid
- **12-column** mental model on desktop
- Default gap: **24px** (`space-6`)
- Project cards: 3 columns desktop, 1 column mobile
- Pricing cards: 3 columns desktop, 1 column mobile (center card emphasized)
- Testimonials: 3 columns → 1 column
- Process steps: 4 columns → 2×2 → 1 column stacked

---

## 5. Border Radius & Elevation

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 6px | Inputs, small badges |
| `radius-md` | 8px | Buttons |
| `radius-lg` | 12px | Cards, project tiles |
| `radius-xl` | 16px | Hero mockup container |
| `radius-full` | 9999px | Avatars, pills, eyebrow chips |

### Shadows & Glows

```css
/* Card default */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

/* Card hover */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);

/* Accent glow (mockups, popular pricing card) */
box-shadow: 0 0 60px rgba(0, 102, 255, 0.15);

/* Primary button */
box-shadow: 0 4px 14px rgba(0, 102, 255, 0.35);
```

---

## 6. Components

### 6.1 Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│  Sidlayiya Labs    Home About Services Projects Process ...  [CTA] │
└─────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | 64px (desktop), 56px (mobile) |
| Position | `fixed`, `top: 0`, `z-index: 50` |
| Background | `rgba(10, 10, 10, 0.8)` + `backdrop-blur: 12px` |
| Border bottom | `1px solid #2A2A2A` |
| Logo | `heading-sm`, weight 700, white |
| Nav links | `body-sm`, `#A3A3A3`, hover → white |
| CTA | Filled accent button, compact padding |

**Scroll state:** Slightly more opaque background after 50px scroll.

---

### 6.2 Buttons

#### Primary (filled)
| Property | Value |
|----------|-------|
| Background | `#0066FF` |
| Text | White, `body-sm`, weight 600 |
| Padding | 12px 24px |
| Radius | `radius-md` |
| Icon | Optional, 16px, right of text with 8px gap |
| Hover | `#0052CC`, translateY(-1px), stronger glow |
| Active | translateY(0) |

#### Secondary (outline)
| Property | Value |
|----------|-------|
| Background | transparent |
| Border | `1px solid #FFFFFF` or `#2A2A2A` |
| Text | White |
| Hover | `background: rgba(255,255,255,0.05)` |

#### Ghost / Text link
- Accent color text, underline on hover
- Used for "View All Projects"

---

### 6.3 Eyebrow Badge
Used in hero: `WEB DESIGNER & DEVELOPER`

| Property | Value |
|----------|-------|
| Display | inline-flex |
| Padding | 6px 12px |
| Background | `accent-subtle` |
| Text | `label`, accent color |
| Border | optional `1px solid rgba(0,102,255,0.2)` |
| Radius | `radius-full` |

---

### 6.4 Trust Badges (Hero)
Three inline items: icon + label

| Property | Value |
|----------|-------|
| Icon size | 20px, accent or white |
| Text | `body-sm`, `text-secondary` |
| Layout | flex row, gap 24px, wrap on mobile |

---

### 6.5 Project Card

```
┌──────────────────────────────────────┐
│  [Project Image]              ↗      │
│                                      │
│  Venture Studio                      │
│  Beyond Limits                       │
│  Creative Agency Website             │
└──────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `#161616` |
| Border | `1px solid #2A2A2A` |
| Radius | `radius-lg` |
| Image aspect | 16:10 or 4:3, `object-fit: cover` |
| Arrow icon | Top-right, appears/moves on hover |
| Hover | `translateY(-4px)`, border lightens, shadow increases |

---

### 6.6 Pricing Card

| Property | Starter / Custom | Business (Popular) |
|----------|------------------|---------------------|
| Border | `#2A2A2A` | `2px solid #0066FF` |
| Badge | — | "Most Popular" blue pill, top center |
| Price display | Large white, bold | Same |
| Features | List with blue ✓ icons | Same |
| CTA | Outline or filled secondary | Filled primary |

Feature list: `body-sm`, `text-secondary`, 12px gap between items.

---

### 6.7 Tech Stack Icon Tile

| Property | Value |
|----------|-------|
| Size | 64×64px (desktop), 56×56px (mobile) |
| Background | `#161616` |
| Border | `1px solid #2A2A2A` |
| Radius | `radius-lg` |
| Icon | 32px centered, full color or white |
| Hover | Border → accent, subtle glow |

---

### 6.8 Testimonial Card

| Property | Value |
|----------|-------|
| Background | `#161616` |
| Border | `1px solid #2A2A2A` |
| Radius | `radius-lg` |
| Quote icon | Blue `"` mark, 32px, top-left |
| Quote text | `body-md`, italic optional |
| Avatar | 48px circle |
| Name | `body-sm`, weight 600, white |
| Title | `caption`, `text-secondary` |

---

### 6.9 Process Step

| Property | Value |
|----------|-------|
| Number badge | 40px circle, accent bg, white number |
| Title | `heading-sm` |
| Description | `body-sm`, `text-secondary` |
| Connector | Horizontal arrow line between steps (desktop) |

---

### 6.10 Contact Form

| Field | Style |
|-------|-------|
| Input background | `#111111` |
| Input border | `1px solid #2A2A2A` |
| Focus border | `#0066FF` |
| Label | `body-sm`, `text-secondary`, above field |
| Textarea | min-height 120px |
| Submit | Full-width primary button |

Contact info column: icon + label + value pattern. Values in white.

---

### 6.11 Footer

Three-zone layout:
1. **Brand column** — logo, bio, social icons (24px, `text-secondary`, hover → accent)
2. **Link columns** — Quick Links, Services
3. **CTA strip** — "Let's Work Together" + button

Bottom bar: `border-top`, `caption` text, centered or split.

---

## 7. Section-by-Section Layout

### Hero (Desktop)
```
┌────────────────────────────┬────────────────────────────┐
│  [Eyebrow]                 │                            │
│  Websites That Build       │    [Device Mockup Stack]     │
│  Brands.                   │    laptop / tablet / phone   │
│  [Subheadline]             │    with blue glow behind     │
│  [CTA] [CTA]               │                            │
│  [Trust badges]            │                            │
└────────────────────────────┴────────────────────────────┘
        50% width                    50% width
```

### Hero (Mobile)
- Text block first, mockup below
- Headline scales to `display-md`
- CTAs stack vertically, full width

---

## 8. Imagery & Media

### Device Mockup (Hero)
- Layered composition: laptop (back), tablet (middle-left), phone (front-right)
- Apply `transform: perspective + rotateY/rotateX` for subtle 3D
- Blue radial glow behind the group: `radial-gradient(circle, accent-glow 0%, transparent 70%)`
- Screens show dark UI previews (can be cropped reference screenshots)

### Project Images
- High-quality widescreen screenshots
- Slight dark overlay on hover (optional)
- Place in `assets/images/projects/`

### Avatar Images
- 48×48px, circular crop
- Place in `assets/images/avatars/`

### Image Guidelines
| Rule | Detail |
|------|--------|
| Format | WebP preferred, JPG fallback |
| Max width | 1200px for hero, 800px for cards |
| Lazy load | All below-fold images |
| Alt text | Descriptive per project/person |

---

## 9. Motion & Interaction

### Principles
- Subtle and purposeful — never distracting
- Duration: **200–400ms** for UI; **500–700ms** for section reveals
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

### Interactions

| Element | Animation |
|---------|-----------|
| Buttons | Hover lift + glow intensify |
| Project cards | Hover lift 4px + border brighten |
| Nav links | Color transition 200ms |
| Section content | Fade-up on scroll (opacity 0→1, translateY 20px→0) |
| Mobile menu | Slide-in from right, 300ms |
| Pricing popular card | Static emphasis (no pulse) |

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Responsive Breakpoints

| Name | Min width | Key changes |
|------|-----------|-------------|
| `sm` | 640px | Trust badges wrap gracefully |
| `md` | 768px | 2-column layouts begin; hamburger → full nav |
| `lg` | 1024px | Full desktop grids (3-col projects, pricing) |
| `xl` | 1280px | Max container width applied |

### Mobile-First Rules
1. Design single column default
2. Touch targets ≥ 44×44px
3. Sticky nav does not obscure section headings (scroll-margin-top: 80px on sections)
4. Form fields full width
5. Pricing cards: show "Most Popular" card first on mobile (order utility class)

---

## 11. Iconography

**Recommended set:** Lucide Icons (CDN or inline SVG)

| Context | Icons |
|---------|-------|
| Nav CTA | `arrow-right` |
| Secondary CTA | `phone` |
| Trust badges | `palette`, `zap`, `search` |
| Project link | `arrow-up-right` |
| Pricing checks | `check` (accent colored) |
| Contact | `mail`, `map-pin`, `clock`, `send` |
| Social | `linkedin`, `twitter`, `instagram` |
| Mobile menu | `menu` / `x` |

Icon size: 16–20px inline; 24px for feature/trust; 32px for quote mark.

---

## 12. Tailwind Token Mapping

Suggested `tailwind.config` extension:

```js
colors: {
  background: '#0A0A0A',
  surface: '#161616',
  'surface-border': '#2A2A2A',
  accent: {
    DEFAULT: '#0066FF',
    hover: '#0052CC',
  },
  'text-primary': '#FFFFFF',
  'text-secondary': '#A3A3A3',
  'text-muted': '#6B6B6B',
},
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
borderRadius: {
  lg: '12px',
  xl: '16px',
},
```

---

## 13. Visual QA Checklist

Before sign-off, compare against reference image:

- [ ] Dark background `#0A0A0A` — not blue-tinted charcoal
- [ ] Accent is **blue** `#0066FF` — not cyan/teal
- [ ] Inter (or equivalent clean sans) — no monospace branding
- [ ] Hero is two-column with device mockups on the right
- [ ] Three project cards with arrow affordance
- [ ] Middle pricing card has "Most Popular" badge + blue border
- [ ] Tech stack row with bordered icon tiles
- [ ] Three testimonial cards with quote icon + avatar
- [ ] Four-step process with numbered circles
- [ ] Contact: info left, form right
- [ ] Footer with social icons, link columns, and final CTA
- [ ] All sections present in correct order
- [ ] Page feels spacious — not cramped on desktop
- [ ] Mobile layout is clean with no overflow

---

## 14. Design Deviations from Existing `index.html`

The current Sidlayiya Labs page uses a **technical/cyber aesthetic** (JetBrains Mono, cyan accents, code backgrounds). The new design **replaces** that entirely:

| Aspect | Old (Sidlayiya) | New (Sidlayiya Labs) |
|--------|-----------------|----------------------|
| Font | JetBrains Mono + Inter | Inter only |
| Accent | Cyan `#00F2FF` | Blue `#0066FF` |
| Tone | Developer/engineering | Designer/business-friendly |
| Layout | Partial sections | Full marketing funnel |
| Background | Grid + radial gradient | Flat dark with subtle glows |
| Branding | SIDLAYIYA_LABS monospace | Sidlayiya Labs clean sans-serif |

Keep the **Sidlayiya Labs** brand name. Do not carry over cyber/code aesthetic elements unless explicitly requested.
