import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarvy | Sarvesh Nakhale - Product Designer & Developer",
  description: "Portfolio of Sarvesh Nakhale (Sarvy). A creative Product Designer & Developer specializing in modern web apps, 3D interactions, and premium UI/UX.",
  keywords: ["Sarvesh Nakhale", "Sarvesh", "Nakhale", "Sarvy", "Product Designer", "Web Developer", "Next.js Developer", "UI/UX Designer", "Frontend Engineer", "Sarvesh Portfolio"],
  authors: [{ name: "Sarvesh Nakhale", url: "https://sarvy.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarvy.vercel.app",
    title: "Sarvy | Product Designer & Developer",
    description: "Immersive portfolio of Sarvesh Nakhale. Crafting digital experiences with code and design.",
    siteName: "Sarvesh Nakhale Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvesh Nakhale (Sarvy) | Portfolio",
    description: "Product Designer & Developer. View my selected works.",
    creator: "@Sarvyx2005"
  }
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sarvesh Nakhale",
    "alternateName": "Sarvy",
    "url": "https://sarvy.vercel.app",
    "jobTitle": "Product Designer & Developer",
    "alumniOf": "Indian Institute of Information Technology",
    "sameAs": [
      "https://github.com/Sarvesh2005-code",
      "https://www.linkedin.com/in/sarveshnakhale",
      "https://x.com/Sarvyx2005"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

