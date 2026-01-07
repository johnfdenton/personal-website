# Portfolio Website

A professional portfolio website for John F Denton - Educational Technologist, Instructional Designer, and Coding & Robotics Teacher.

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), designed for deployment on [Cloudflare Pages](https://pages.cloudflare.com/).

## Features

- **Clean, Professional Design**: Tech-focused aesthetic with blues, greens, and greys
- **Responsive Layout**: Fully responsive design that works seamlessly on mobile and desktop
- **Comprehensive Portfolio**: Showcases teaching experience, professional development work, leadership initiatives, games, and Arduino/robotics projects
- **Games Portfolio**: Grid layout featuring educational and entertaining games
- **Easy Contact**: Simple email contact integration
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
│       ├── index.astro                      # Home/About page
│       ├── teaching.astro                   # Teaching experience
│       ├── professional-development.astro   # Faculty training & PD
│       ├── leadership.astro                 # Leadership & strategic initiatives
│       ├── arduino.astro                    # Arduino/Projects showcase
│       └── games/
│           ├── index.astro                  # Games listing
│           ├── unicat.astro
│           ├── spacelazers.astro
│           ├── coffee-vs-nap.astro
│           └── hoppy-bunny.astro
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

### Updating Contact Information

To change the contact email, edit the mailto link in `src/pages/index.astro` (around line 63).

### Adding More Games

The site currently features four games: UniCat, SpaceLazerz, Coffee vs Nap, and Hoppy Bunny.

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

## Git Repository

This project is already initialized as a Git repository. To push changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

If you're forking this project for your own use, you'll need to update the remote URL:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

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
