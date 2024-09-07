import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
      <link rel="icon" href="/Logo.png" sizes="128x128" />
        <link rel="icon" href="/Logo.png" type="image/png" sizes="128x128" />
        <link
          rel="apple-touch-icon"
          href="/Logo.png"
          type="image/png"
          sizes="128x128"
        />
        <title>LearnAI</title>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
