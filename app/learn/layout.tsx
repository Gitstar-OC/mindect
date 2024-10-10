import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';
import React from 'react';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'
import Footer from '@components/ui/footer';
import {USLIcon, SLIcon, AlgsIcon, AlgebraIcon, CalculusIcon, ProbabilityIcon} from "@/components/ui/icons"


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
              icon: <AlgsIcon  className="m-0"/>
            },
            {
              title: 'SL',
              description: 'Supervised Learning',
              url: '/learn/sl',
              icon: <SLIcon  className="m-0"/>
            },
            {
              title: 'USL',
              description: 'Unsupervised Learning',
              url: '/learn/usl',
              icon: <USLIcon className="m-0" />
            },
            {
              title: 'Algebra',
              description: 'Linear Algebra',
              url: '/learn/algebra',
              icon: <AlgebraIcon  className="m-0"/>
            },
            {
              title: 'P & S',
              description: 'Probability & Statistics',
              url: '/learn/probability',
              icon: <ProbabilityIcon className="m-0"/>
            },
            {
              title: 'Calculus',
              description: 'Calculus',
              url: '/learn/calculus',
              icon: <CalculusIcon className="m-0" />
            }
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