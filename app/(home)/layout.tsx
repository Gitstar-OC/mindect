import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { baseOptions } from '../layout.config';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}

// 'use client';
// import { RootProvider } from 'fumadocs-ui/provider';
// import type { ReactNode } from 'react';
 
// export function Provider({ children }: { children: ReactNode }) {
//   return (
//     <RootProvider>
//       {children}
//     </RootProvider>
//   );
// }