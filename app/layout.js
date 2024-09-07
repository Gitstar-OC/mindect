import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "LearnAI",
  description: `LearnAI is being created to help people learn from scratch about what machine learning is, how can I one start trainng a model. 
    Learn AI has docs with images to better understand various topics like Machine Learning, Deep Learning, Supervised Learning, 
    Unsupervised Learning, Gradient Descent, Clustering, Anomaly Detection, Reinforcement Learning, Back Propagation, Multiclass 
    Classification, Activation Function, Vectorization, Bias and Variance, Development Processes, Decision Trees, Regression Model, 
    Cost Function etc.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" sizes="128x128" />
        <link rel="icon" href="/Logo.png" type="image/png" sizes="128x128" />
        <link
          rel="apple-touch-icon"
          href="/Logo.png"
          type="image/png"
          sizes="128x128"
        />
      </head>
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
