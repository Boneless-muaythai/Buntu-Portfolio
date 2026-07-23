# Sidlayiya Labs — Portfolio & Landing Page

> **Ideas Into Innovation.** A premium, single-page website for a freelance web designer & developer — built to attract leads and convert visitors into clients.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Build Step](https://img.shields.io/badge/Build-None_required-0099FF?style=flat)

---

## Overview

A fast, responsive, accessible marketing site for **Sidlayiya Labs**. It presents services, pricing, a portfolio, a proven process, an FAQ, and a contact form — all in a modern dark-first design with a built-in light mode. No frameworks to install and no build step: it's plain HTML, Tailwind (via CDN), and vanilla JavaScript.

## ✨ Features

- **Dark / light theme toggle** — persists your choice in `localStorage`, respects the OS preference on first visit, and applies before paint (no flash of the wrong theme).
- **Fully responsive** — mobile-first layout with a dedicated mobile navigation menu.
- **Accessible by default** — skip-to-content link, ARIA labels, visible keyboard focus rings, and full `prefers-reduced-motion` support.
- **Scroll animations** — subtle fade-in on scroll via `IntersectionObserver` (gracefully disabled for reduced-motion users).
- **Native FAQ accordion** — built on `<details>`/`<summary>`, keyboard-friendly with zero JavaScript.
- **Contact form** — client-side validation for name, email, and message *(see [Roadmap](#-roadmap) — not yet wired to a backend)*.
- **Themeable design system** — colors defined as CSS variables so the entire palette (and both themes) can be changed in one place.

## 🧩 Sections

| Section | Purpose |
| --- | --- |
| Hero | Headline, value proposition, and primary calls to action |
| About | Who's behind Sidlayiya Labs |
| Featured Work | Portfolio project cards |
| Services & Pricing | Three transparent, fixed-price packages |
| Tech Stack | Tools & technologies used |
| Client Reviews | Testimonials |
| Process | A clear 4-step workflow |
| FAQ | Common questions answered |
| Contact | Contact details and enquiry form |

## 🛠 Tech Stack

- **HTML5** — semantic markup
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling via the Play CDN, with a custom theme config
- **Vanilla JavaScript** — theme toggle, mobile menu, scroll animations, and form validation (no dependencies)
- **[Inter](https://fonts.google.com/specimen/Inter)** — typeface, loaded from Google Fonts

## 📁 Project Structure

```
.
├── index.html                  # The entire page (markup + Tailwind config + inline styles)
├── js/
│   └── main.js                 # Theme toggle, mobile menu, scroll fade-ins, form validation
├── assets/
│   └── images/
│       ├── sidlayiya-labs-logo.png
│       └── projects/           # Drop project-1.jpg … project-3.jpg here (see its README.txt)
└── README.md
```

## 🚀 Getting Started

No installation or build step is required.

**Option 1 — Open directly**
Just open `index.html` in your browser.

**Option 2 — Run a local server (recommended)**
A local server avoids any file-path quirks. For example, with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension, or:

```bash
# Python 3
python -m http.server 5500

# or Node
npx serve
```

Then visit `http://localhost:5500`.

## 🌐 Deployment

This is a static site and can be hosted anywhere (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

**GitHub Pages:** in the repo, go to **Settings → Pages**, set the source to the `main` branch (root), and save. The site will be published at:

```
https://boneless-muaythai.github.io/Buntu-Portfolio/
```

## 🎨 Customization

- **Colors & themes** — edit the CSS variables in the `<style>` block of `index.html` (`:root` for dark, `:root[data-theme="light"]` for light). Changing them updates every component in both themes.
- **Content** — all copy lives directly in `index.html`, organized by the sections above.
- **Project images** — add your screenshots to `assets/images/projects/` as `project-1.jpg`, `project-2.jpg`, `project-3.jpg` (see the `README.txt` in that folder for recommended sizes). Missing images fall back to a clean branded gradient, so the layout never looks broken.

## 🗺 Roadmap

- [ ] **Wire up the contact form** to a real handler (Formspree, Netlify Forms, or a backend) so submissions are delivered — it currently validates and shows a success message but does not send anywhere.
- [ ] **Replace placeholder content** — swap the sample testimonials and project case studies for real, verified client work before launch.
- [ ] **Add real project screenshots** to `assets/images/projects/`.
- [ ] *(Optional)* Move from the Tailwind Play CDN to a compiled Tailwind build for production performance.

## 👤 Author

**Sidlayiya Labs** — web design & development
GitHub: [@Boneless-muaythai](https://github.com/Boneless-muaythai)

## 📄 License

This project is currently unlicensed (all rights reserved). If you'd like to make it open source, consider adding an [MIT License](https://choosealicense.com/licenses/mit/).
