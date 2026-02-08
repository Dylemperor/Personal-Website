# Dylan Cowell - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser to see the result.

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update the tagline/description
   - Modify button text if needed

2. **About Section** (`src/components/About.tsx`):
   - Add your personal story and background
   - Update the about text

3. **Projects Section** (`src/components/Projects.tsx`):
   - Replace example projects with your actual projects
   - Update project titles, descriptions, technologies, and links

4. **Skills Section** (`src/components/Skills.tsx`):
   - Update skill categories and technologies to match your expertise

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address
   - Add your LinkedIn and GitHub profile URLs
   - Configure form submission (consider using Formspree, EmailJS, or your own backend)

6. **Navigation** (`src/components/Navbar.tsx`):
   - Update the name if needed (currently "Dylan Cowell")

7. **Page Title** (`index.html`):
   - Update the title and description for SEO

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Deployment Options

- **GitHub Pages**: Use GitHub Actions or deploy the `dist` folder
- **AWS Amplify**: Follow AWS Amplify deployment guide
- **Custom Server**: Upload the `dist` folder to your web server

## Domain Configuration

To use your custom domain `dylancowell.dev`:

1. Purchase the domain (if not already owned)
2. In your hosting provider (e.g., Vercel, Netlify):
   - Go to Project Settings → Domains
   - Add `dylancowell.dev` and `www.dylancowell.dev`
   - Follow the DNS configuration instructions

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ Smooth scrolling navigation
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Fast development with Vite
- ✅ Easy to customize and extend

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify/GitHub Pages

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.ts      # Vite configuration
```

## License

This project is open source and available under the MIT License.
