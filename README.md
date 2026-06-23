# Lakhani Law, PLLC — Official Website

> Professional website for **Lakhani Law, PLLC**, a boutique law firm focused on healthcare transactions, mergers & acquisitions, and business law. Founded by Karim Lakhani in Houston, Texas.

🌐 **Live site:** [lakhaniatlaw.com](https://lakhaniatlaw.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| UI Library | [Material UI v5](https://mui.com/) |
| Language | TypeScript |
| Database | Firebase Realtime Database |
| Deployment | Vercel |
| Styling | MUI Theme (navy `#0A1628` + gold `#C9A84C`) |

---

## Features

- **5-page site** — Home, About, Practice Areas, Representative Matters, Contact
- **Booking modal** — 4-step consultation scheduler (date → time → form → confirmation)
- **Firebase integration** — bookings saved to Realtime Database in real time
- **Scroll-spy navigation** — active nav link updates as you scroll through homepage sections
- **Fully responsive** — mobile drawer, adaptive layouts, touch-friendly
- **Sticky navbar** — always visible, consistent across all pages
- **Georgia serif typography** — classic law firm aesthetic with modern layout

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, firm intro, practice areas preview, CTA |
| `/about` | Karim Lakhani's biography, credentials, and headshot |
| `/practice-areas` | Detailed breakdown of 4 practice areas |
| `/representative-matters` | Anonymized client matter summaries by category |
| `/contact` | Contact form + booking modal trigger |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/InshaadMerchant/lakhaniatlaw.com.git
cd lakhaniatlaw.com

# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file in the root (see Environment Variables section below)

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the root with the following:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

These must also be added in your **Vercel project → Settings → Environment Variables** before deploying.

---

## Project Structure

```
├── app/
│   ├── layout.tsx               # Root layout + metadata
│   ├── page.tsx                 # Homepage
│   ├── Providers.tsx            # MUI ThemeProvider (client)
│   ├── theme.ts                 # Navy + gold MUI theme
│   ├── about/page.tsx           # About page
│   ├── practice-areas/page.tsx  # Practice Areas page
│   ├── representative-matters/  # Representative Matters page
│   └── contact/page.tsx         # Contact page
├── components/
│   ├── Navbar.tsx               # Sticky navbar with scroll-spy
│   ├── Footer.tsx               # Footer with navigation + contact
│   └── BookingModal.tsx         # 4-step booking modal + Firebase write
├── lib/
│   └── firebase.ts              # Firebase app initialization
└── public/
    └── KL Image.jpg             # Attorney headshot
```

---

## Deployment

The site is deployed on **Vercel** with a custom domain connected via Squarespace DNS.

To deploy your own fork:
1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Connect your custom domain under Settings → Domains

---

## License

Private repository. All content © Lakhani Law, PLLC. All rights reserved.
