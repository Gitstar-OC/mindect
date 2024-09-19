// import type { Metadata } from 'next/types';

// export function createMetadata(override: Metadata): Metadata {
//   return {
//     ...override,
//     openGraph: {
//       title: override.title ?? undefined,
//       description: override.description ?? undefined,
//       url: 'https://mindect.vercel.app',
//       images: '/banner.png',
//       siteName: 'Mindect',
//       ...override.openGraph,
//     },
//     twitter: {
//       card: 'summary_large_image',
//       creator: '@',
//       title: override.title ?? undefined,
//       description: override.description ?? undefined,
//       images: '/banner.png',
//       ...override.twitter,
//     },
//   };
// }

// export const baseUrl =
//   process.env.NODE_ENV === 'development'
//     ? new URL('http://localhost:3000')
//     : new URL(`https://${process.env.VERCEL_URL!}`);