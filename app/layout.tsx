import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vadym — Senior React & Next.js Engineer",
  description:
    "Senior Front-End and Product Engineer building SaaS products, complex React applications and AI-enabled interfaces.",
  keywords: [
    "Senior React Engineer",
    "Next.js Engineer",
    "Frontend Engineer",
    "Product Engineer",
    "SaaS Developer",
  ],
  openGraph: {
    title: "Vadym — Senior Front-End / Product Engineer",
    description:
      "Engineering SaaS products, complex React applications and AI-enabled interfaces.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Engineering digital products — Senior Front-End / Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadym — Senior Front-End / Product Engineer",
    description:
      "Engineering SaaS products, complex React applications and AI-enabled interfaces.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
