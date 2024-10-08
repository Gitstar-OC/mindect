import { Banner } from 'fumadocs-ui/components/banner';
import "./global.css";
import "katex/dist/katex.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="favicon" href="/Favicon.ico" sizes="64x64" />
        <link rel="apple-touch-icon" href="/Logo128x128.png" sizes="128x128" />
        <title>Mindect</title>
        <meta charSet="UTF-8" />
        <meta name="title" content="Mindect" />
        <meta
          name="description"
          content="Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training. At Anytime, From Anywhere with Mindect"
        />
        <meta
          name="keywords"
          content="Learn Machine Learning, What is Supervised Learning, What is Unsupervised Learning, Advanced Learning Algorithms, Neural Network with Mindect"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mindect" />
        <meta
          property="og:description"
          content="Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training. At Anytime, From Anywhere with Mindect"
        />
        <meta property="og:image" content="/Banner.png" />
        <meta property="og:url" content="https://mindect.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mindect" />
        <link rel="icon" href="/logo16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/logo32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/logo64x64.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/logo128x128.png" sizes="128x128" type="image/png" />
        <link rel="apple-touch-icon" href="/logo128.png" sizes="128x128" />

        {/* Twitter metadata */}
        <meta name="twitter:title" content="Mindect" />
        <meta
          name="twitter:description"
          content="Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training etc. At Anytime, From Anywhere with Mindect"
        />
        <meta
          name="twitter:image"
          content="https://mindect.vercel.app/Banner.png"
        />

        {/* SEO Improvements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Om Chandankar" />
        <meta name="copyright" content="Mindect © 2024" />
        <meta name="application-name" content="Mindect" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://mindect.vercel.app" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/Logo.png" />
        <link rel="shortcut icon" type="image/svg+xml" href="/Logo.png" />

        {/* Verification Tags */}
        <meta
          name="google-site-verification"
          content="JoujTmv5oh0bgEPDWe-FC_D1gsDCmoxox9a25fkwo-M"
        />
        <meta
          name="google-site-verification"
          content="6RMOg1ngEZ3TFp12K8vXU8UMjylHTt3B51UnOxzu-os"
        />
        <meta
          name="msapplication-TileImage"
          content="https://mindect.vercel.app/Logo.png"
        />
        {/* <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#000000"/>   
         */}
      </head>
      <body>
        <RootProvider>
{/*         <Banner id="css-styling" variant='rainbow'> Sorry for facing ui problem, Refresh this page after removing the banner</Banner> */}
          {children}</RootProvider>
      </body>
    </html>
  );
}
