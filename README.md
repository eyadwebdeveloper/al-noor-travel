# 🕌 Al-Noor Travel — Premium Hajj & Umrah Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-eyadwebdevoloper.github.io%2Fal--noor--travel-green?style=for-the-badge)](https://eyadwebdevoloper.github.io/al-noor-travel)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

A fully responsive, bilingual (English / Arabic) single-page website for **Al-Noor Travel**, a premium Hajj & Umrah travel agency. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools.

---

## 🌟 Live Preview

**[https://eyadwebdevoloper.github.io/al-noor-travel](https://eyadwebdevoloper.github.io/al-noor-travel)**

---

## ✨ Features

- **Bilingual (EN / AR)** — Full English ↔ Arabic toggle with automatic RTL layout switching
- **Animated Hero Section** — Ken Burns zoom effect on background, Islamic geometric pattern overlay
- **Package Tabs** — Filter between Umrah, Hajj, and Ramadan packages dynamically
- **Scroll Reveal Animations** — Sections fade in on scroll via IntersectionObserver
- **Counter Animation** — Animated stat numbers (pilgrims served, years, etc.)
- **Sticky Navbar** — Transparent on top, blurred dark green on scroll; active link highlighting
- **Mobile Menu** — Full-screen slide-in hamburger menu for mobile
- **Booking & Contact Forms** — With success feedback messages
- **Hotel Showcase** — Cards for Mecca & Medina accommodation partners
- **Testimonials Section** — Customer reviews with star ratings
- **WhatsApp Float Button** — Direct chat shortcut
- **Footer** — Multi-column with quick links, package links, legal pages, and accreditation badges (IATA, ATOL, Saudi MOH)
- **Custom Scrollbar** — Gold-accented scrollbar styling

---

## 🗂️ Project Structure

```
al-noor-travel/
├── index.html          # Main single-page file (HTML + CSS + JS)
├── images/
│   └── favicon.ico     # Site favicon
└── README.md           # This file
```

> All CSS and JavaScript are embedded directly in `index.html` for zero-dependency deployment.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--gold` | `#C9A84C` | Accents, CTAs, borders |
| `--gold-light` | `#E8C97A` | Hover states, taglines |
| `--green` | `#1A3A2A` | Primary background, navbar |
| `--green-mid` | `#2D5A3D` | Section backgrounds |
| `--cream` | `#F8F4ED` | Page background |
| `--cream-dark` | `#EDE6D6` | Card backgrounds |

**Fonts:** Cormorant Garamond (headings) · Montserrat (body) · Amiri / Cairo (Arabic text)

---

## 🌐 Internationalisation

The site uses a `data-en` / `data-ar` attribute system on all translatable elements. A single JavaScript toggle switches:

- All visible text content
- Form placeholders
- `<html lang>` and `<html dir>` attributes (LTR ↔ RTL)
- Button label

```html
<h2 data-en="Our Packages" data-ar="باقاتنا">Our Packages</h2>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Full desktop layout, horizontal nav |
| `768px – 1024px` | Tablet — condensed nav, 2-column grids |
| `< 768px` | Mobile — hamburger menu, single-column stacks |

---

## 🚀 Deployment (GitHub Pages)

This site is deployed as a static GitHub Pages site.

1. Push `index.html` (rename it or place it at root) to the `main` branch of your repository.
2. Go to **Settings → Pages** and set the source to `main` / `root`.
3. Your site will be live at:

```
https://eyadwebdevoloper.github.io/al-noor-travel
```

> **Note:** Make sure the repository is named exactly `al-noor-travel` to match the URL above.

---

## 📦 Sections

| Section ID | Description |
|---|---|
| `#home` | Hero with animated background and key stats |
| `#about` | Company story and trust indicators |
| `#packages` | Tabbed Hajj / Umrah / Ramadan package cards |
| `#hotels` | Featured Mecca & Medina hotel partners |
| `#services` | Visa, transport, guide, and support services |
| `#testimonials` | Pilgrim reviews and star ratings |
| `#booking` | Group booking request form |
| `#contact` | Contact form and office details |

---

## 🛠️ Local Development

No build step required — just open in a browser:

```bash
git clone https://github.com/eyadwebdevoloper/al-noor-travel.git
cd al-noor-travel
# Open index.html in your browser
open index.html
```

Or use VS Code's **Live Server** extension for hot reload.

---

## 📄 License

© 2026 Eyad Ashraf. All rights reserved.
