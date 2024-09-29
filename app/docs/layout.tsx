import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';
import React from 'react';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}   
    sidebar={{
      banner: (
        <RootToggle
          options={[
            {
              title: 'Algs',
              description: 'Learning Algorithms',
              url: '/docs/algs',
              icon: ''
            },
            {
              title: 'SL',
              description: 'Supervised Learning',
              url: '/docs/sl',
              icon: ''
            },
            {
              title: 'USL',
              description: 'Unsupervised Learning',
              url: '/docs/usl',
              icon: ''
            },
          ]}
        />
      ),
    }}>
      {children}
    </DocsLayout>
  );
}