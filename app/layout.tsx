import { ReactNode } from "react";
import Providers from "./Providers";

export const metadata = {
  title: "Lakhani Law, PLLC | Healthcare & Business Law — Houston, TX",
  description:
    "Boutique legal counsel for healthcare transactions, mergers & acquisitions, and business law. Lakhani Law, PLLC serves physician groups, healthcare entrepreneurs, and closely held businesses.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, backgroundColor: "#FAFAF8" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
