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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
