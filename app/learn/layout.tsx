import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';
import React from 'react';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'
import Footer from '@components/ui/footer';
import "../global.css"
import {USLImage, SLImage, AlgsImage} from "@/components/ui/icons"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
    <DocsLayout tree={source.pageTree} {...baseOptions}   
    sidebar={{
      banner: (
        <RootToggle
          options={[
            {
              title: 'Algs',
              description: 'Learning Algorithms',
              url: '/learn/algs',
              icon: <AlgsImage  className="m-0"/>
            },
            {
              title: 'SL',
              description: 'Supervised Learning',
              url: '/learn/sl',
              icon: <SLImage  className="m-0"/>
            },
            {
              title: 'USL',
              description: 'Unsupervised Learning',
              url: '/learn/usl',
              icon: <USLImage className="m-0" />
            },
          ]}
        />
      ),
      // enabled: false,
      // defaultOpenLevel: 3,
      // collapsible: false
    }}>
      {children}
    </DocsLayout>
    <Footer />
    </>
  );
}