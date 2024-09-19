// import './global.css';
// import type { Viewport } from 'next';
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// import { baseUrl, createMetadata } from '@/utils/metadata';
// import { Body } from '@/app/layout.client';
// import { Provider } from './provider';

// export const metadata = createMetadata({
//   title: {
//     template: '%s | Fumadocs',
//     default: 'Mindect',
//   },
//   description: 'Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training. At Anytime, From Anywhere with Mindect',
//   metadataBase: baseUrl,
// });

// export const viewport: Viewport = {
//   themeColor: [
//     { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
//     { media: '(prefers-color-scheme: light)', color: '#fff' },
//   ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }): React.ReactElement {
//   return (
//     <html
//       lang="en"
//       className={`${GeistSans.variable} ${GeistMono.variable}`}
//       suppressHydrationWarning
//     >
//       <Body>
//         <Provider>{children}</Provider>
//       </Body>
//     </html>
//   );
// }



import "./global.css";
import 'katex/dist/katex.css';
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Viewport } from 'next';

const inter = Inter({
  subsets: ["latin"],
});

// export const metadata = createMetadata({
//   title: {
//     template: '%s | Mindect',
//     default: 'Mindect',
//   },
//   description: 'Learn Concepts in ML, AI, Supervised and Unsupervised Learning etc. At Anytime, From Anywhere with Mindect',
//   metadataBase: baseUrl,
// });


export const viewport: Viewport = {
  themeColor: [ 
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="favicon" href="/Favicon.ico" sizes="64x64" />
        <link rel="icon" href="/Logo.png" sizes="128x128" />
        <link rel="apple-touch-icon" href="/Logo.png" sizes="128x128" />
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
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:url" content="https://mindect.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mindect" />

        {/* Twitter metadata */}
        <meta name="twitter:title" content="Mindect" />
        <meta
          name="twitter:description"
          content="Learn Concepts in Machine Learning, Supervised Learning, Unsupervised Learning, Neural Network training etc. At Anytime, From Anywhere with Mindect"
        />
        <meta name="twitter:image" content="https://mindect.vercel.app/Logo.png" />

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
  
        {/* Verification Tags */ }
        <meta name="google-site-verification" content="JoujTmv5oh0bgEPDWe-FC_D1gsDCmoxox9a25fkwo-M" />
        <meta name="google-site-verification" content="6RMOg1ngEZ3TFp12K8vXU8UMjylHTt3B51UnOxzu-os" />
        <meta name="msapplication-TileImage" content="https://mindect.vercel.app/Logo.png" />
        {/* <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#000000"/>   
         */}
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
