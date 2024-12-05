import "./global.css";
import "katex/dist/katex.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    title: "Mindect",
    description: "Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Mathematics. At Anytime, From Anywhere with Mindect",
    keywords: "Learn, Learning, Machine, Supervised, Unsupervised, Algorithms, Calculus, Linear Algebra, Statistics, Probability, Mathematics, Mindect",
    openGraph: {
      title: "Mindect",
      description: "Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Mathematics. At Anytime, From Anywhere with Mindect",
      url: "https://mindect.vercel.app/",
      type: "website",
      siteName: "Mindect",
      images: [
        {
          url: "/Banner.png",
          width: 800,
          height: 600,
          alt: "Mindect Banner",
        },
      ],
    },
    twitter: {
      title: "Mindect",
      description: "Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Mathematics. At Anytime, From Anywhere with Mindect",
      image: "https://mindect.vercel.app/Banner.png",
    },
    robots: "index, follow",
    author: "Om Chandankar",
    copyright: "Mindect © 2024",
    applicationName: "Mindect",
    locale: "en_US",
    canonical: "https://mindect.vercel.app",
    icons: {
      icon: [
        { url: "/Logo/16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/Logo/32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/Logo/64x64.png", sizes: "64x64", type: "image/png" },
        { url: "/Logo/128x128.png", sizes: "128x128", type: "image/png" },
      ],
      apple: "/Logo/128x128.png",
      shortcut: "/Logo/Logo.png",
    },
    verification: {
      google: ["JoujTmv5oh0bgEPDWe-FC_D1gsDCmoxox9a25fkwo-M", "6RMOg1ngEZ3TFp12K8vXU8UMjylHTt3B51UnOxzu-os"],
      msapplication: "https://mindect.vercel.app/Logo.png",
    },
  };
}

export async function generateViewport() {
  return {
    viewport: "width=device-width, initial-scale=1.0",
  };
}


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RootProvider>
            <Navbar />
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}