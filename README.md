# Lakhani Law Firm — Website

Next.js 14 + Material UI homepage for lakhaniatlaw.com.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack
- **Next.js 14** (App Router)
- **Material UI v5** with a custom navy + gold theme
- **TypeScript**

## Structure

```
app/
  layout.tsx        # Root layout with MUI ThemeProvider
  page.tsx          # Homepage — assembles all sections
  theme.ts          # MUI custom theme (navy #0A1628, gold #C9A84C)

components/
  Navbar.tsx        # Fixed top nav with mobile drawer
  Hero.tsx          # Full-screen hero with stats
  PracticeAreas.tsx # 6-card practice area grid
  About.tsx         # Split layout with firm overview
  WhyUs.tsx         # 4 reasons on dark background
  Testimonials.tsx  # Client quote cards
  Contact.tsx       # Contact form + info panel
  Footer.tsx        # Multi-column footer
```

## Deployment to Vercel

```bash
npm i -g vercel
vercel
```

Then add your custom domain `lakhaniatlaw.com` in the Vercel dashboard under
Project → Settings → Domains.

## Customizations to make
- Replace placeholder phone/email/address in `Contact.tsx` and `Footer.tsx`
- Replace placeholder stats in `Hero.tsx` (years, cases, satisfaction)
- Add real attorney headshots to the About section
- Wire up the contact form to a backend (e.g. Resend, Formspree, or a Next.js API route)
