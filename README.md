# Portfolio Website

A professional portfolio website for John [Last Name] - Educational Technologist, Instructional Designer, and Coding & Robotics Teacher.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), designed for deployment on [Cloudflare Pages](https://pages.cloudflare.com/).

## Features

- **Clean, Professional Design**: Tech-focused aesthetic with blues, greens, and greys
- **Responsive Layout**: Fully responsive design that works seamlessly on mobile and desktop
- **Games Portfolio**: Expandable grid layout for showcasing educational games
- **Contact Form**: Integrated contact form (requires setup with Formspree or similar service)
- **Modular Structure**: Easy to update and expand with new content
- **Fast Performance**: Static site generation with Astro for optimal loading speeds

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── _headers
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   └── GameCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro           # Home/About page
│       ├── arduino.astro          # Arduino Projects (placeholder)
│       ├── teaching.astro         # Teaching page (placeholder)
│       └── games/
│           ├── index.astro        # Games listing
│           ├── unicat.astro
│           ├── spacelazers.astro
│           └── coffee-vs-nap.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- npm (comes with Node.js)

### Installation

1. Clone this repository (see "Creating GitHub Repository" section below)

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start local dev server at `localhost:4321`       |
| `npm run build`        | Build production site to `./dist/`               |
| `npm run preview`      | Preview your build locally before deploying      |

## Customization

### Contact Form Setup

The contact form on the home page requires a form handling service. We recommend [Formspree](https://formspree.io/) (free):

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Open `src/pages/index.astro`
4. Find the form tag (around line 65)
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Alternative Services:**
- [Web3Forms](https://web3forms.com/) - Simple and free
- [Getform](https://getform.io/) - Free tier available
- [Netlify Forms](https://www.netlify.com/products/forms/) - If deploying to Netlify instead

### Updating Your Name

Search for `[Last Name]` throughout the project and replace it with your actual last name:

1. `src/layouts/Layout.astro`
2. `src/components/Navigation.astro`
3. `src/pages/index.astro`
4. All game pages
5. `README.md`

### Adding More Games

To add a new game:

1. Add the game details to the `games` array in `src/pages/games/index.astro`:
```javascript
{
  title: 'My New Game',
  slug: 'my-new-game',
  description: 'A brief description of your game.',
}
```

2. Create a new page at `src/pages/games/my-new-game.astro` using one of the existing game pages as a template

### Color Scheme

The color scheme is defined in `tailwind.config.mjs`. The theme uses:
- **Primary**: Blues (for main UI elements)
- **Secondary**: Greens (for accents)
- **Neutral**: Greys (for backgrounds and text)

Modify the color values in `tailwind.config.mjs` to customize the palette.

## Deploying to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Create a GitHub repository** (see section below)

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select your repository

3. **Configure build settings:**
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or higher (set in Environment Variables: `NODE_VERSION = 18`)

4. **Deploy:**
   - Click "Save and Deploy"
   - Your site will be built and deployed automatically
   - Subsequent pushes to `main` will trigger automatic deployments

5. **Custom Domain (Optional):**
   - Go to your project settings in Cloudflare Pages
   - Navigate to "Custom domains"
   - Add your domain and follow the DNS setup instructions

### Method 2: Direct Upload (Wrangler CLI)

1. **Install Wrangler:**
```bash
npm install -g wrangler
```

2. **Build your site:**
```bash
npm run build
```

3. **Login to Cloudflare:**
```bash
wrangler login
```

4. **Deploy:**
```bash
wrangler pages deploy dist
```

## Creating a GitHub Repository

1. **Initialize Git locally:**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. **Create a new repository on GitHub:**
   - Go to [https://github.com/new](https://github.com/new)
   - Name your repository (e.g., `portfolio-website`)
   - Choose public or private
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Push your code to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Technology Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Deployment platform

## Browser Support

This site supports all modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## License

This project is for personal portfolio use. Feel free to use it as a template for your own portfolio.

## Support

For issues or questions about:
- **Astro**: [Astro Documentation](https://docs.astro.build/)
- **Tailwind CSS**: [Tailwind Documentation](https://tailwindcss.com/docs)
- **Cloudflare Pages**: [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)

---

Built with ❤️ using Astro and Tailwind CSS
