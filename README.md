# Arctic Air HVAC — Premium Website

A premium, conversion-optimized HVAC website built with HTML5, CSS3, and Vanilla JavaScript.

## 🚀 Deploy to GitHub Pages (5 minutes)

### Option 1: GitHub.com UI (easiest)

1. Create a new repository on [github.com](https://github.com/new)
   - Name it: `arctic-air` (or any name)
   - Set to **Public**
   - Click **Create repository**

2. Upload files:
   - Click **Add file → Upload files**
   - Drag and drop ALL files from this folder
   - Commit message: `Initial commit`
   - Click **Commit changes**

3. Enable GitHub Pages:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** · Folder: **/ (root)**
   - Click **Save**

4. Your site will be live at:
   `https://YOUR-USERNAME.github.io/arctic-air/`
   (takes ~2 minutes to deploy)

---

### Option 2: Git CLI

```bash
git init
git add .
git commit -m "Initial commit — Arctic Air HVAC"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/arctic-air.git
git push -u origin main
```
Then follow step 3 above.

---

## 📁 Project Structure

```
/
├── index.html          ← Main page (all sections)
├── css/
│   └── styles.css      ← All styles, animations, responsive
├── js/
│   └── main.js         ← Interactions, counters, thermostat UI
├── assets/
│   ├── images/         ← Add local images here if needed
│   ├── icons/
│   └── videos/
└── README.md
```

## ✏️ Customization

| What to change | Where |
|---|---|
| Company name | `index.html` → search "Arctic Air" |
| Phone number | `index.html` → search "(918) 555-0192" |
| City/address | `index.html` → footer + service area |
| Colors | `css/styles.css` → `:root` variables |
| Photos | Replace `images.unsplash.com` URLs in `index.html` |

## 🔑 Key Sections

1. **Hero** — Full-screen with animated orbs, grid, stats bar
2. **Trust Band** — Certifications & guarantees
3. **Services** — 4 service cards with images (2×2 grid)
4. **Tech/Thermostat** — Interactive AI climate demo
5. **Why Us** — Dark section with technician photo
6. **Process** — 4-step with connector line
7. **Cases** — 3 project showcases
8. **Testimonials** — 3 reviews with 3D hover
9. **Stats** — Animated counters on blue background
10. **Service Area** — City pills + map placeholder
11. **FAQ** — Accordion, 2-column grid
12. **Final CTA** — Phone + contact form
13. **Footer** — 4-column premium footer

## ⚙️ Features

- Scroll-triggered reveal animations (fade up/left/right)
- Animated number counters (IntersectionObserver)
- Interactive thermostat UI (cool/heat/fan modes)
- 3D card tilt on hover
- Cursor glow effect (desktop)
- Hamburger mobile menu
- Sticky nav with scroll state
- FAQ accordion
- Form with success state
- Parallax orbs

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px–1024px  
- Mobile: 480px–768px
- Small: 480px and below
