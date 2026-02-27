# Artistic Landing Page

A **creative, artistic** personal landing: visual portfolio, bio, and link to socials (Instagram). Built for artists, illustrators, and creators who want a simple, elegant site with a clear identity.

## Features

- **Artistic design**: pink/purple palette, automatic light and dark mode, refined typography.
- **Sections**: About, Projects, Education, and CTA (follow on Instagram).
- **Carousel** (react-slick) to showcase work or featured images.
- **Logo** with filters (sepia, shadow) and sticky/fixed navigation.
- Built with **Next.js** (App Router), **Tailwind CSS**, and **TypeScript**.

## Requirements

- Node.js 18+
- pnpm (recommended), npm, or yarn

## Getting Started

Install dependencies:

```bash
pnpm install
# or
npm install
```

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx      # Global layout, side logo
  page.tsx        # Main page (sections in order)
  globals.css     # Light/dark color variables
  Logo.tsx        # Logo with sepia/shadow
  sections/       # Section components
    About.tsx
    Project.tsx
    Education.tsx
    Faq.tsx
    CTA.tsx
    Nav.tsx
    Footer.tsx
    items/        # Reusable items
      Carousel.tsx
      FaqItem.tsx
```

## Customization

- **Colors**: edit CSS variables in `app/globals.css` (light pink in light mode, dark purple in dark mode).
- **Content**: update copy in `About`, `Project`, `Education`, and `CTA`.
- **Carousel images**: in `page.tsx`, change the `images` array passed to `Carousel`; put files in `public/images/` (e.g. `slide1.jpg`).
- **Instagram**: in `CTA.tsx`, set the link URL to your profile.

## Deploy

You can deploy on [Vercel](https://vercel.com) (recommended for Next.js) or any Node.js-capable host. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
