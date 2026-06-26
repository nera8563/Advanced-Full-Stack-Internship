# Personal Portfolio — React

A dark-themed personal portfolio website built with React, inspired by a MERN stack developer dashboard.

---

## 🚀 Quick Start

### 1. Create the React App (if starting from scratch)

```bash
npx create-react-app personal-portfolio
cd personal-portfolio
```

### 2. Install Dependencies

```bash
npm install react-icons
```

### 3. Replace src/ files with the project files provided

### 4. Start Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
personal-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed top navigation with hamburger
│   │   ├── Navbar.css
│   │   ├── Hero.jsx          # Landing hero section
│   │   ├── Hero.css
│   │   ├── About.jsx         # About + stats cards
│   │   ├── About.css
│   │   ├── Skills.jsx        # Skill category cards
│   │   ├── Skills.css
│   │   ├── Experience.jsx    # Timeline with work/education tabs
│   │   ├── Experience.css
│   │   ├── Projects.jsx      # Project cards with hover overlay
│   │   ├── Projects.css
│   │   ├── Contact.jsx       # Contact info + form
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── styles/
│   │   └── global.css        # Design tokens, utilities, animations
│   ├── App.js
│   └── index.js
├── package.json
└── .gitignore
```

---

## 🛠️ Build for Production

```bash
npm run build
```

---

## ☁️ Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com
```

---

## ✏️ Customization Checklist

- [ ] Replace "YourName" in `Navbar.jsx` and `Footer.jsx`
- [ ] Update hero name, role, and bio in `Hero.jsx`
- [ ] Add your real photo URL in `Hero.jsx`
- [ ] Update resume link in `Navbar.jsx` and `Hero.jsx`
- [ ] Edit skills in `Skills.jsx`
- [ ] Edit work history in `Experience.jsx`
- [ ] Add your real projects in `Projects.jsx`
- [ ] Update contact info in `Contact.jsx`
- [ ] Wire up the contact form (EmailJS / Formspree / your backend)

---

## 🎨 Theme Colors (src/styles/global.css)

| Token            | Value     | Usage              |
|------------------|-----------|--------------------|
| `--accent`       | `#7c3aed` | Primary purple     |
| `--accent-light` | `#a855f7` | Hover / highlights |
| `--bg-primary`   | `#0a0a0f` | Page background    |
| `--bg-card`      | `#16161f` | Cards              |

Change these in `global.css` to reskin the entire site.
