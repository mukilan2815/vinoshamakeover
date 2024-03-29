import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinosha Makeover - Best Makeup Artist in Coimbatore, Tamil Nadu",
  description:
    "Experience the artistry of Vinosha, your go-to makeup artist in Coimbatore! Known for her signature touch of minimal magic, Vinosha specializes in enhancing your natural beauty with expert makeup techniques and stunning hairstyles. Whether it's for weddings, special events, or photo shoots, trust Vinosha to create a flawless look that reflects your unique style and personality.",
  keywords:
    "makeup artist, makeover, bridal makeup, party makeup, hair styling, saree draping,makeover in coimbatore, makeover in podanur, makeover in tamilnadu, Coimbatore, Tamil Nadu, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
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
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
