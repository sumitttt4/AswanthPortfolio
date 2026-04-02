import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aswanth S Kumar | Portfolio",
  description: "Modern marketing portfolio built with Next.js and Framer Motion"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
