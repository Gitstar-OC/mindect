import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="favicon" href="/Logo.ico" sizes="64x64" />
        <link rel="icon" href="/Logo.png" sizes="128x128" />
        <link rel="apple-touch-icon" href="/Logo.png" sizes="128x128" />
        <title>Learn AI</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training. At Anytime, From Anywhere."
        />
        <meta
          name="keywords"
          content="Learn Machine Learning, What is Supervised Learning, What is Unsupervised Learning, Advanced Learning Algorithms, Neural Network"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Learn AI" />
        <meta
          property="og:description"
          content="Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training. At Anytime, From Anywhere."
        />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:url" content="https://learnai.theme-verse.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn AI" />

        {/* Twitter metadata */}
        <meta name="twitter:title" content="Learn AI" />
        <meta
          name="twitter:description"
          content="Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training etc. At Anytime, From Anywhere"
        />
        <meta name="twitter:image" content="https://learnai.theme-verse.com/Logo.png" />

        {/* SEO Improvements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Om Chandankar" />
        <meta name="copyright" content="Learn AI © 2024" />
        <meta name="application-name" content="Learn AI" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://learnai.theme-verse.com" />
        
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/Logo.png" />
        <link rel="shortcut icon" type="image/svg+xml" href="/Logo.png" />

        {/* Verification Tags */}
        <meta name="google-site-verification" content="JoujTmv5oh0bgEPDWe-FC_D1gsDCmoxox9a25fkwo-M" />
        <meta name="msapplication-TileImage" content="https://learnai.theme-verse.com/Logo.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#000000"/>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
