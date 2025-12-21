import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarRevamp } from "@/components/navbar-revamp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarvesh Nakhale | Product Designer & Developer",
  description: "Portfolio of Sarvesh Nakhale - A creative Product Designer & Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sarvesh Nakhale",
    "url": "https://sarvy.vercel.app",
    "jobTitle": "Product Designer & Developer",
    "sameAs": [
      "https://github.com/Sarvesh2005-code",
      "https://www.linkedin.com/in/sarveshnakhale"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavbarRevamp />
        {children}
      </body>
    </html>
  );
}

