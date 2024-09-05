import { Kite_One, Merienda, Economica, Island_Moments } from "next/font/google"

export const islandMoments = Island_Moments({
  weight: '400',
  subsets: ['latin'],
});
export const kiteOne = Kite_One({ subsets: ["latin"], weight: ['400'] });
export const merienda = Merienda({ subsets: ["latin"] });
export const economica = Economica({
  weight: ['400', '700'],
  subsets: ['latin'],
});