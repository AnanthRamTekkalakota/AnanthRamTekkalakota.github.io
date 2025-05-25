# AnanthRamTekkalakota.github.io


## Project Background

This repository contains the source code for my personal portfolio website, hosted via GitHub Pages at [ananthramtekkalakota.github.io](https://ananthramtekkalakota.github.io). The site showcases my bio, projects, blog posts, and contact information. I built it to have full control over content and styling, ensure fast performance, and make updates as simple as committing Markdown and React components.

## Project Introduction

### Conceptual Overview

- **Static & Dynamic Content**  
  - Static pages (Home, About, Projects, Contact) for core information  
  - A simple MDX‐backed blog for writing posts in Markdown with React components  
- **Responsive Design**  
  - Adapts to mobile, tablet, and desktop  
  - Optimized for performance and accessibility  
- **Three Key Sections**  
  1. **Home** — Hero banner, quick intro, call-to-action  
  2. **Projects** — Grid of projects with descriptions, links and tech tags  
  3. **Blog** — List of posts, dynamic routing, reading time estimates  

### Tech Stack

- **Framework:** Next.js (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS, PostCSS  
- **Components:** shadcn/ui, lucide-react  
- **Animations:** Framer Motion  
- **Content:** MDX for blog posts  
- **Deployment:** GitHub Pages via `next export`  

---

## Functional Requirements

### Home Page

- Full-screen hero section with background image  
- Quick links to Projects and Blog  

### About Page

- Personal bio, skills list, education & experience timeline  

### Projects Page

- Responsive grid of project cards  
- Each card links to a detailed project demo or repo  

### Blog

- Fetches all `.mdx` files from `src/posts/`  
- Lists title, date, and reading time  
- Dynamic routing to `/blog/[slug]`  

### Contact

- Simple contact form (mail-to) or link to email  

---

## ✅ To-Do List

### Frontend

- [ ] Dark mode toggle  
- [ ] Blog search & filter  
- [ ] Pagination for posts  
- [ ] Accessibility audit (aria, contrast)  

### CI/CD

- [ ] GitHub Actions for lint, type‐check, build, and deploy previews  
- [ ] Automate `next export` and push to `gh-pages` branch  

---

## 🔗 Prerequisites

- [Node.js v16+](https://nodejs.org/)  
- [npm](https://npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- Git (for cloning)  

---

## 🛠️ Local Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/AnanthRamTekkalakota/AnanthRamTekkalakota.github.io.git
   cd AnanthRamTekkalakota.github.io
