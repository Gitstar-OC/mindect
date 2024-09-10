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
        <link rel="apple-touch-icon" href="/Logo.png" sizes="128x128" />
        <title>LearnAI</title>
        <meta name="description" content="Learn Concepts in AI, Machine Learning, Deep Learning, Large Language Models, Speech Recognition etc. At Anytime, From Anywhere." />
        <meta name="keywords" content="AI, Machine Learning, Deep Learning, Large Language Models, Deep Learning, Supervised Learning, Unsupervised Learning, Gradient Descent, Clustering, Anomaly Detection, Reinforcement Learning, Back Propagation , Multiclass Classification, Activation Function, Vectorization, Bias and Variance, Development Processes
Decision Trees, Regression Model, Cost Function" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="LearnAI " />
        <meta property="og:description" content="- Learn Concepts in AI, Machine Learning, Deep Learning, Large Language Models, Speech Recognition etc. At Anytime, From Anywhere." />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:url" content="https://learnai.theme-verse.com/" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="JoujTmv5oh0bgEPDWe-FC_D1gsDCmoxox9a25fkwo-M" />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}