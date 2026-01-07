# Claude.md - Personal Portfolio Website

This document provides context and guidelines for AI assistants and developers working on John F Denton's personal portfolio website.

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Architecture & Patterns](#2-architecture--patterns)
3. [Content Guidelines](#3-content-guidelines)
4. [Code Conventions](#4-code-conventions)
5. [Common Tasks](#5-common-tasks)
6. [Important Constraints](#6-important-constraints)
7. [Things NOT to Do](#7-things-not-to-do)

---

## 1. Project Overview

### Purpose
This is a professional portfolio website for John F Denton, an Educational Technologist, Instructional Designer, and Coding & Robotics Teacher with 18 years of teaching experience and 6 years as an Educational Technology Integrator.

### Key Goals
1. **Showcase Professional Expertise**: Demonstrate John's work in educational technology, instructional design, faculty training, and curriculum development
2. **Highlight Educational Games**: Present game development projects that serve as "coding jump-off points" for student learning
3. **Professional Networking**: Provide a contact point for potential employers, collaborators, and educational institutions
4. **Demonstrate Technical Skills**: Show web development and design capabilities through the site itself

### Target Audience
- **Primary**: Potential employers (schools, educational technology companies, instructional design firms)
- **Secondary**: Educational collaborators, faculty members, fellow educational technologists
- **Tertiary**: Parents, students, and the broader educational community

### What Makes This Site Unique
- Focus on **pedagogy-first technology integration** rather than technology for its own sake
- Games are educational tools and "coding jump-off points," not just portfolio pieces
- Content emphasizes **instructional design principles**, backward design, UDL, and differentiation
- Professional but approachable tone that reflects educational philosophy
- Clean, tech-focused aesthetic that appeals to educational technology sector

### Technical Stack
- **Framework**: Astro 4.x (static site generator)
- **Styling**: Tailwind CSS 3.x
- **Deployment**: Cloudflare Pages
- **Version Control**: Git/GitHub
- **Node Version**: 18+

### Site Structure
```
Homepage (About)
├── Teaching
├── Professional Development
├── Leadership
├── Games
│   ├── UniCat
│   ├── SpaceLazerz
│   ├── Coffee vs Nap
│   └── Hoppy Bunny
└── Arduino/Projects
```

---

## 2. Architecture & Patterns

### Astro Static Site Generation
- **Build-time rendering**: All pages are generated as static HTML at build time
- **No client-side JavaScript**: Minimal JavaScript is used (only for mobile menu toggle)
- **File-based routing**: Pages in `src/pages/` automatically become routes
  - `src/pages/index.astro` → `/`
  - `src/pages/teaching.astro` → `/teaching`
  - `src/pages/games/unicat.astro` → `/games/unicat`
- **Fast performance**: Static HTML = fast load times, no server processing

### Why Astro?
- Perfect for content-focused sites that don't need complex interactivity
- Excellent performance out of the box
- Simple to understand and maintain
- Built-in optimization for assets
- Great developer experience

### Why Tailwind CSS?
- Utility-first approach keeps styling consistent
- No need to write custom CSS for most use cases
- Easy to maintain and update
- Mobile-first responsive design built in
- Custom color palette defined in `tailwind.config.mjs`

### Layout System
**Single Layout Pattern**: All pages use `src/layouts/Layout.astro`

The layout provides:
- HTML document structure
- Meta tags (title, description)
- Navigation component (imported and rendered)
- Footer with copyright
- Global styles (system fonts, smooth scrolling)

```astro
<Layout title="Page Title - John F Denton" description="SEO description">
  <!-- Page content goes here -->
</Layout>
```

**Layout Props**:
- `title` (required): Full page title including "John F Denton"
- `description` (optional): SEO meta description, defaults to generic portfolio description

### Component Architecture
**Minimal and Presentational**: This site uses very few components because most content is static.

Current components:
1. **Navigation.astro**: Site-wide navigation with mobile menu, active state highlighting
2. **GameCard.astro**: Reusable card for displaying games in grid layout

**When to create a component**:
- Pattern is used in 3+ places
- Logic needs to be encapsulated
- Makes the code significantly cleaner

**When NOT to create a component**:
- One-off sections (keep inline in page)
- Simple markup that's easy to copy/paste if needed later
- Over-abstraction that makes code harder to understand

### Styling Architecture
**Tailwind-only approach**: All styling is done via Tailwind utility classes in the HTML.

**No custom CSS** except:
- Global styles in `Layout.astro` (box-sizing, font-family, smooth scroll)
- Custom color palette in `tailwind.config.mjs`

**Responsive Design**: Mobile-first with `md:` breakpoint for desktop
- Base styles: Mobile (default)
- `md:` prefix: Tablet/Desktop (768px+)

Example:
```html
<h1 class="text-4xl md:text-5xl">Title</h1>
<!-- 4xl on mobile, 5xl on desktop -->
```

### Data Management
**No database, no CMS, no API**: All content is written directly in `.astro` files.

For structured data (like the games list), use JavaScript arrays in the page frontmatter:
```astro
---
const games = [
  { title: 'Game Name', slug: 'game-name', description: '...' },
];
---
```

This approach works well because:
- Content doesn't change frequently
- No need for non-technical editors
- Version control tracks all changes
- Simple to understand and maintain

---

## 3. Content Guidelines

### Tone and Voice
**Professional but Approachable**: The voice should reflect an experienced educator who is confident in their expertise without being boastful.

**Good examples**:
- "I design coding curricula that balance technical skill development with creative problem-solving"
- "My approach emphasizes faculty empowerment and accessible design"
- "I've trained 40+ faculty members on instructional technology tools"

**Avoid**:
- Corporate jargon ("synergy," "leverage," "stakeholders")
- Excessive self-promotion ("I'm the best," "unparalleled expertise")
- Buzzword-heavy language without substance
- Overly casual tone ("Hey there!" "Let's dive in!")

### Content Philosophy
**Show, Don't Tell**: Demonstrate expertise through specific examples and concrete accomplishments rather than generic claims.

**Good**: "Collaborated with earth science teachers to design a simulation where students created replacement power systems for the closing Indian Point nuclear power plant"

**Bad**: "Expert at collaborating with teachers on innovative projects"

### Describing John's Work
**Correct terminology**:
- Educational Technologist (not "tech expert")
- Instructional Designer (not "course creator")
- Educational Technology Integrator (specific job title)
- Faculty training / professional development (not "teaching teachers")
- Coding & Robotics Teacher (not "coding instructor" or "STEM teacher")

**Key themes to emphasize**:
1. **Pedagogy-first approach**: Technology serves learning goals, not the other way around
2. **Universal Design for Learning**: Proactive accessibility benefits all learners
3. **Backward design**: Start with learning outcomes, then design instruction
4. **Differentiation**: Meeting diverse learner needs
5. **Faculty empowerment**: Building teacher capacity and autonomy
6. **Iterative design**: Continuous improvement based on feedback and data

### Writing About Games
Games on this site are **educational tools**, not just entertainment.

**Always emphasize**:
- Games are "coding jump-off points" for student learning
- Students examine functional code, modify it, and make it their own
- Focus on computational thinking and problem-solving
- Games teach specific programming concepts (sprites, collision detection, variables, etc.)

**Example**: "UniCat serves as a jumping-off point where students examine functional code, figure out how it works, and make iterative changes to test their understanding and make the game their own."

**Don't say**: "Fun game I made" or "Cool project to show off coding skills"

### SEO and Meta Descriptions
**Page titles**: Always include "John F Denton" for brand recognition
- Format: `[Page Name] - John F Denton`
- Examples: `Teaching - John F Denton`, `Games - John F Denton`

**Meta descriptions**:
- Should be specific to the page content
- 120-160 characters ideal
- Include relevant keywords naturally (Educational Technologist, Instructional Designer, etc.)

### Accessibility in Content
- Use semantic HTML (proper heading hierarchy: h1 → h2 → h3)
- Write descriptive link text (not "click here")
- Provide context for images and icons
- Ensure sufficient color contrast (already handled by design system)
- Keep language clear and concise

---

## 4. Code Conventions

### File and Folder Structure
- **File naming**: Always use `kebab-case` for all files (e.g., `professional-development.astro`, `coffee-vs-nap.astro`)
- **Pages**: All pages live in `src/pages/` (top-level) or `src/pages/games/` (for games)
- **Components**: Reusable components live in `src/components/`
- **Layout**: Single layout file at `src/layouts/Layout.astro` wraps all pages

### Page Structure Pattern
Every page follows this structure:
1. **Frontmatter**: Import Layout and define any data/components
2. **Layout wrapper**: Pass `title` (required) and `description` (optional)
3. **Container div**: Use `max-w-4xl` for content pages or `max-w-6xl` for gallery-style pages
4. **Header section**: Page title and subtitle/description
5. **Content sections**: Multiple card-style sections with consistent styling
6. **Responsive**: Mobile-first design with `md:` breakpoints

Example structure:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title - John F Denton" description="Page description for SEO">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
        Page Title
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto">
        Subtitle or description
      </p>
    </div>

    <!-- Content sections follow... -->
  </div>
</Layout>
```

### Styling Conventions (Tailwind)

#### Content Sections
All main content sections use this exact pattern:
```html
<div class="bg-neutral-800 rounded-lg p-8 border border-neutral-700 shadow-lg mb-8">
  <!-- Section content -->
</div>
```

This creates the consistent "card" style used throughout the site.

#### Typography Hierarchy
- **H1 (Page titles)**: `text-4xl md:text-5xl font-bold text-primary-400 mb-4`
- **H2 (Section headings)**: `text-3xl font-bold text-primary-400 mb-6` (or `text-secondary-400` for visual variety)
- **H3 (Subsection headings)**: `text-xl font-semibold text-secondary-400 mb-2`
- **Body text**: `text-neutral-300 leading-relaxed`
- **Emphasized text**: `text-neutral-100` or `font-medium`

#### Spacing Patterns
- **Between sections**: `mb-8` (2rem)
- **Text blocks within sections**: `space-y-4` or `space-y-6`
- **Header to content**: `mb-12`
- **Inline spacing**: Use `mb-2`, `mb-4`, `mb-6` consistently

#### Color Usage
- **Primary (blues)**: Main headings, links, buttons, CTAs
- **Secondary (greens)**: Accent headings, badges, highlights
- **Neutral (grays)**:
  - `neutral-900`: Page background
  - `neutral-800`: Card backgrounds
  - `neutral-700`: Borders
  - `neutral-300`: Body text
  - `neutral-400`: Muted text

**IMPORTANT**: The exact color values are defined in `tailwind.config.mjs` with a full 50-900 scale. Don't hardcode hex values - always use the Tailwind color classes.

#### Interactive Elements
Buttons and links should have hover states:
```html
<a href="..." class="text-primary-400 hover:text-primary-300 transition-colors">
  Link text
</a>
```

Always include `transition-colors` or `transition-all` for smooth hover effects.

### Component Conventions

#### TypeScript Props
All components define a `Props` interface in the frontmatter:
```astro
---
interface Props {
  title: string;
  description: string;
  slug: string;
  optional?: string;
}

const { title, description, slug, optional = 'default' } = Astro.props;
---
```

- Use descriptive prop names
- Mark optional props with `?`
- Provide defaults for optional props in destructuring

#### Component Style
- Components should be **presentational** - they receive data via props
- Use destructuring with defaults for optional props
- Keep components simple - this is a static site, not a complex app
- No state management or complex logic

### Navigation System

**CRITICAL**: When adding a new top-level page, you MUST update `src/components/Navigation.astro`:

1. Add a new `<li>` item to the navigation list
2. Update the `href` to match your new page route
3. Update the `currentPath` comparison for active state highlighting
4. The nav link pattern looks like this:

```astro
<li>
  <a
    href="/your-new-page"
    class={`block py-2 px-3 rounded transition-colors ${currentPath === '/your-new-page' ? 'bg-primary-600 text-white' : 'text-neutral-300 hover:text-white hover:bg-neutral-700'}`}
  >
    Link Text
  </a>
</li>
```

The navigation component handles:
- Active page highlighting via `currentPath` (compares with `Astro.url.pathname`)
- Mobile hamburger menu with toggle functionality
- Consistent styling across all pages

**Navigation order matters**: Keep the logical flow:
1. Home
2. Teaching
3. Professional Development
4. Leadership
5. Games
6. Arduino/Projects

### Game Pages Pattern
Game pages follow a specific structure:
1. **Back link** to `/games` with left arrow icon
2. **Game header** with title and one-line description
3. **Game container** with Code.org iframe embed
4. **Two-column grid** (on desktop, stacked on mobile):
   - "About the Game" section (left)
   - "How to Play" section (right)
5. **Technical Details** section at bottom (genre, skills, age range)

When adding a new game:
1. Add entry to the `games` array in `src/pages/games/index.astro`
2. Create new file `src/pages/games/[slug].astro` matching the slug
3. Use an existing game page (like `unicat.astro`) as a template
4. Update the iframe src with the Code.org embed URL
5. Customize the descriptions and instructions

### Import Paths
Always use relative imports:
- From pages to Layout: `import Layout from '../layouts/Layout.astro';`
- From game pages to Layout: `import Layout from '../../layouts/Layout.astro';`
- From pages to components: `import Component from '../components/Component.astro';`

**Don't use** absolute paths or path aliases (not configured in this project).

### Static Assets
- Favicon and public assets go in `/public/`
- Reference public assets with absolute paths: `/favicon.svg`
- No build step needed for public files - they're copied as-is to output

### TypeScript
- Use TypeScript interfaces for prop definitions
- Keep types simple - this is mostly a content site
- Astro provides `Astro.props` for accessing component props
- No need for complex type definitions

### HTML/Accessibility
- Always use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- Proper heading hierarchy (don't skip levels)
- Include `alt` text for images (currently minimal images on site)
- Use ARIA labels where appropriate (e.g., mobile menu button)
- Ensure interactive elements are keyboard accessible

---

## 5. Common Tasks

### Task 1: Adding a New Game

**Step-by-step process**:

1. **Update the games array** in `src/pages/games/index.astro`:
```javascript
const games = [
  // ... existing games ...
  {
    title: 'My New Game',
    slug: 'my-new-game',
    description: 'A brief description of what the game teaches or how it works.',
  },
];
```

2. **Create the game page** at `src/pages/games/my-new-game.astro`:
   - Copy an existing game page (e.g., `unicat.astro`)
   - Update the title and description in the Layout props
   - Update the h1 and subtitle
   - Update the iframe `src` with your Code.org embed URL
   - Update "About the Game" section
   - Update "How to Play" instructions
   - Update Technical Details (genre, skills, age range)

3. **Test locally**:
```bash
npm run dev
```
Navigate to `http://localhost:4321/games` and verify the new game appears in the grid.
Click through to verify the game page works correctly.

4. **Commit and deploy**:
```bash
git add .
git commit -m "Add new game: My New Game"
git push
```

**Important**: The slug in the games array must exactly match the filename (without `.astro` extension).

### Task 2: Adding a New Main Section Page

**Step-by-step process**:

1. **Create the page file** at `src/pages/new-section.astro`:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="New Section - John F Denton" description="Description for SEO">
  <div class="max-w-4xl mx-auto">
    <div class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
        New Section
      </h1>
      <p class="text-xl text-neutral-300 max-w-2xl mx-auto">
        Brief description of this section
      </p>
    </div>

    <div class="bg-neutral-800 rounded-lg p-8 border border-neutral-700 shadow-lg mb-8">
      <h2 class="text-3xl font-bold text-primary-400 mb-6">First Section</h2>
      <p class="text-neutral-300 leading-relaxed">
        Content goes here...
      </p>
    </div>
  </div>
</Layout>
```

2. **Update Navigation** in `src/components/Navigation.astro`:
Add a new list item in the appropriate position:
```astro
<li>
  <a
    href="/new-section"
    class={`block py-2 px-3 rounded transition-colors ${currentPath === '/new-section' ? 'bg-primary-600 text-white' : 'text-neutral-300 hover:text-white hover:bg-neutral-700'}`}
  >
    New Section
  </a>
</li>
```

3. **Test the navigation**:
   - Start dev server: `npm run dev`
   - Verify link appears in nav on all pages
   - Click link and verify page loads
   - Verify active state highlights when on that page
   - Test mobile menu (responsive view)

4. **Commit changes**:
```bash
git add .
git commit -m "Add new section: New Section"
git push
```

### Task 3: Updating Contact Information

**Current setup**: The homepage uses a simple mailto link.

To update the email address:

1. Open `src/pages/index.astro`
2. Find the email link (around line 63):
```astro
<a
  href="mailto:johnfdenton+web@gmail.com"
  class="inline-flex items-center..."
>
```
3. Update the `href` with the new email
4. Save and test

**Alternative**: If you want to add a contact form instead, consider:
- Formspree (free tier available)
- Web3Forms (simple and free)
- Update the button to submit to the form endpoint

### Task 4: Updating Personal Information

**Name**: Currently set as "John F Denton" in multiple places:
- `src/components/Navigation.astro` (line 10)
- `src/pages/index.astro` (line 11)
- `src/layouts/Layout.astro` (line 9, 29)

**Bio/About Me**: Update the content in `src/pages/index.astro` (lines 34-49)

**Role/Title**: Update the badges in `src/pages/index.astro` (lines 14-22)

### Task 5: Testing Locally Before Deploying

**Start development server**:
```bash
npm run dev
```
- Site will be available at `http://localhost:4321`
- Hot reload is enabled (changes appear automatically)

**Build for production** (test that build succeeds):
```bash
npm run build
```
- Output goes to `./dist/`
- Checks for build errors

**Preview production build locally**:
```bash
npm run preview
```
- Serves the built site from `./dist/`
- More accurate representation of production

**Testing checklist**:
- [ ] All pages load without errors
- [ ] Navigation works and highlights active page
- [ ] Mobile menu works (test in responsive view)
- [ ] All links work correctly
- [ ] Game embeds load properly
- [ ] Site looks good on mobile and desktop
- [ ] No console errors in browser dev tools

### Task 6: Updating Dependencies

**Check for outdated packages**:
```bash
npm outdated
```

**Update all dependencies** (be careful with major versions):
```bash
npm update
```

**Update specific package**:
```bash
npm install astro@latest
```

**After updating**:
1. Run `npm run dev` and test thoroughly
2. Run `npm run build` and ensure no errors
3. Check that all pages still work correctly
4. Commit the updated `package.json` and `package-lock.json`

**Note**: This site has minimal dependencies (Astro, Tailwind), so updates should be straightforward. Always test after updating.

### Task 7: Changing the Color Scheme

**All colors are defined in** `tailwind.config.mjs`:

```javascript
colors: {
  primary: { /* blue scale 50-900 */ },
  secondary: { /* green scale 50-900 */ },
  neutral: { /* gray scale 50-900 */ },
}
```

**To update colors**:
1. Edit the hex values in `tailwind.config.mjs`
2. Keep the 50-900 scale structure (needed for various UI elements)
3. Test on all pages - colors are used extensively
4. Ensure sufficient contrast for accessibility

**Don't change**:
- The color names (primary, secondary, neutral)
- The numeric scale (50-900)
- Just update the hex values

---

## 6. Important Constraints

### Performance Requirements
**Keep the site fast** - it should load in under 2 seconds on average connections.

**Best practices**:
- Static generation means fast loading by default
- Minimal JavaScript (only mobile menu toggle)
- No large images or videos (games are embedded iframes)
- No external font loading (uses system fonts)

**What to avoid**:
- Adding large dependencies (React, Vue, etc.)
- Loading heavy JavaScript libraries
- Adding tracking scripts without necessity
- Large image files (compress if needed)

### Accessibility Requirements
This site should be **WCAG 2.1 Level AA compliant** at minimum.

**Current accessibility features**:
- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast (verified in design)
- Keyboard accessible navigation
- Responsive design (works on all screen sizes)
- System fonts (no loading issues)

**When adding new features**:
- Test keyboard navigation (Tab, Enter, Escape)
- Verify color contrast ratios
- Add ARIA labels where needed
- Test with screen reader if possible
- Ensure mobile touch targets are large enough (44x44px minimum)

### Mobile-First Approach
**Design for mobile first, enhance for desktop**.

**Breakpoints**:
- Base styles: Mobile (default, < 768px)
- `md:` prefix: Tablet/Desktop (≥ 768px)

**Testing**:
- Always test on mobile viewport first
- Ensure content is readable without zooming
- Touch targets should be large enough
- Navigation should work on small screens

### Browser Support
**Target modern browsers** (last 2 versions):
- Chrome/Edge
- Firefox
- Safari (desktop and mobile)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Don't worry about**:
- Internet Explorer (deprecated)
- Very old browser versions (> 2 years old)

**Use standard CSS and HTML** - Tailwind handles vendor prefixes automatically.

### No Client-Side State Management
This is a **static site** - there's no need for complex state management.

**Current JavaScript usage**:
- Mobile menu toggle (show/hide nav menu)
- That's it

**What NOT to add**:
- React/Vue/Svelte for state management
- Redux or similar state libraries
- Complex client-side routing
- Local storage for preferences

If you need interactivity, consider:
- Can it be done with CSS? (hover effects, animations)
- Can it be done with simple vanilla JS?
- Is it really necessary for a portfolio site?

### Deployment Constraints
**Cloudflare Pages specific**:
- Static output only (no server-side rendering)
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+ (set in environment variables)

**Build must succeed** before deploying:
```bash
npm run build
```
If this fails, the deployment will fail.

### Content Constraints
**Keep content professional and accurate**:
- All claims about experience and skills should be factual
- Use specific examples over generic statements
- Maintain the established voice and tone
- No personal opinions on controversial topics
- Focus on professional accomplishments and expertise

---

## 7. Things NOT to Do

### Don't Over-Engineer
**This is a simple portfolio site** - keep it that way.

**Examples of over-engineering to avoid**:
- Adding a CMS when content is rarely updated
- Creating 10 components when 2 would do
- Adding state management for static content
- Creating complex build pipelines
- Adding unnecessary abstractions

**Rule of thumb**: If it takes more time to set up the "proper" solution than to just write the code directly, skip the abstraction.

### Don't Add Build Complexity
**Current build is simple**: `npm run build` → static files in `dist/`.

**Don't add**:
- Additional bundlers (Webpack, Rollup, etc.)
- Complex preprocessors (SASS with complicated imports)
- Build steps that require additional configuration
- Post-processing scripts
- Additional tooling that makes builds fragile

**Why**: Every additional build step is a maintenance burden and potential failure point.

### Don't Add Tracking/Analytics Without Discussion
**Current state**: No analytics or tracking installed.

**Before adding**:
- Discuss with John whether tracking is needed
- Consider privacy implications
- Choose privacy-friendly options if needed
- Add appropriate privacy policy/notice

**Don't add**:
- Google Analytics without discussion
- Facebook Pixel or similar tracking
- Third-party scripts that track users
- Cookies without user consent

### Don't Change Core Branding
**The following are established and shouldn't change without explicit request**:

**Color scheme**:
- Primary blue (`#1890ff` family)
- Secondary green (`#3aa983` family)
- Neutral grays

**Typography**:
- System font stack (fast, familiar to users)
- Established size hierarchy
- Clean, readable approach

**Overall aesthetic**:
- Tech-focused and professional
- Card-based layouts
- Ample whitespace
- Rounded corners on cards

**Name and title**:
- "John F Denton" (not "John Denton" or variations)
- "Educational Technologist, Instructional Designer, and Coding & Robotics Teacher"

### Don't Add Unnecessary Dependencies
**Current dependencies** (all necessary):
- `astro`: Framework
- `@astrojs/tailwind`: Tailwind integration
- `tailwindcss`: Styling

**Before adding a new dependency, ask**:
1. Is it absolutely necessary?
2. Can I achieve this with vanilla JS/CSS?
3. Does it add significant bundle size?
4. Will it require ongoing maintenance?
5. Is it from a trusted source?

**Generally avoid**:
- UI component libraries (build custom with Tailwind)
- Large utility libraries (lodash, moment.js)
- jQuery or similar (not needed)
- Animation libraries (use CSS transitions)

**Exception**: Small, focused utilities that solve a specific problem (like a markdown parser if adding a blog).

### Don't Make Content Too Casual
**This is a professional portfolio** - maintain appropriate tone.

**Avoid**:
- Slang or overly casual language
- Emojis in professional content (beyond email button icon, etc.)
- "Hey there!" or similar casual greetings
- Overly personal anecdotes
- Jokes or humor that might not land professionally

**Keep**:
- Professional but warm tone
- Approachable language
- Specific examples and accomplishments
- Educational focus and passion

### Don't Ignore Accessibility
**Never**:
- Remove semantic HTML in favor of divs
- Reduce color contrast for aesthetic reasons
- Remove keyboard navigation support
- Add interactive elements that aren't keyboard accessible
- Skip alt text (when images are added)
- Create mobile-only or desktop-only experiences

**Accessibility is not optional** - it's a core requirement.

### Don't Add Features Without Testing
**Before committing any new feature**:
1. Test on mobile viewport
2. Test on desktop viewport
3. Test keyboard navigation
4. Check browser console for errors
5. Run `npm run build` to verify production build works
6. Test on actual mobile device if possible

**Never**:
- Commit code that breaks the build
- Push untested features to main branch
- Assume "it works on my machine" is enough

### Don't Add Server-Side Logic
**This is a static site** deployed to Cloudflare Pages.

**No server-side code**:
- No API routes (Astro supports them, but not needed here)
- No server-side rendering (SSR)
- No database connections
- No backend processing

**If you need backend functionality**:
- Use third-party services (Formspree for forms, etc.)
- Consider if it's really necessary
- Discuss architectural changes with John

### Don't Reorganize Without Reason
**The current structure works well** - don't reorganize just for the sake of it.

**Don't**:
- Move files around without clear benefit
- Rename established conventions
- Create new folder structures
- Change routing patterns

**Exception**: If there's a clear, documented reason that improves maintainability significantly.

---

## Quick Reference

### File Locations Cheat Sheet
```
Homepage content → src/pages/index.astro
Navigation links → src/components/Navigation.astro
Page template → src/layouts/Layout.astro
Games list → src/pages/games/index.astro
Colors → tailwind.config.mjs
Dependencies → package.json
```

### Common Class Patterns
```html
<!-- Content card -->
<div class="bg-neutral-800 rounded-lg p-8 border border-neutral-700 shadow-lg mb-8">

<!-- Page title -->
<h1 class="text-4xl md:text-5xl font-bold text-primary-400 mb-4">

<!-- Section heading -->
<h2 class="text-3xl font-bold text-primary-400 mb-6">

<!-- Body text -->
<p class="text-neutral-300 leading-relaxed">

<!-- Link with hover -->
<a href="..." class="text-primary-400 hover:text-primary-300 transition-colors">
```

### Git Workflow
```bash
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to remote
git push

# View recent commits
git log --oneline -5
```

### Development Commands
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for outdated packages
npm outdated
```

---

## Getting Help

**Astro Documentation**: https://docs.astro.build/
**Tailwind Documentation**: https://tailwindcss.com/docs
**Cloudflare Pages Documentation**: https://developers.cloudflare.com/pages/

**Questions about this project**: Refer back to this document or ask for clarification on specific patterns and conventions established here.
