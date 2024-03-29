import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinosha Makeover",
  description:
    "Vinosha makeover , best makeover and makeup artist in coimbatore. We provide bridal makeup, party makeup, hair styling, saree draping, etc. I am certified makeup artist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
