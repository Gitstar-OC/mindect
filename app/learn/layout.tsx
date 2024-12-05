"use client"
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { source } from "@/lib/source";
import React from "react";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import GridPattern from "@/components/ui/grid-pattern";
import Footer from "@components/ui/footer";
import { cn } from "@/lib/utils";
import {
  USLIcon,
  SLIcon,
  AlgsIcon,
  AlgebraIcon,
  CalculusIcon,
  ProbabilityIcon,
} from "@/components/ui/icons";
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Layout({ children }: { children: ReactNode }) {

  const isLargerThanMd = useMediaQuery('(min-width: 768px)');

  const sidebarContent = (
    <RootToggle
      options={[
        {
          title: "Algs",
          description: "Learning Algorithms",
          url: "/learn/algs",
          icon: <AlgsIcon className="m-0" />,
        },
        {
          title: "SL",
          description: "Supervised Learning",
          url: "/learn/sl",
          icon: <SLIcon className="m-0" />,
        },
        {
          title: "USL", 
          description: "Unsupervised Learning",
          url: "/learn/usl",
          icon: <USLIcon className="m-0" />,
        },
        {
          title: "Algebra",
          description: "Linear Algebra", 
          url: "/learn/algebra",
          icon: <AlgebraIcon className="m-0" />,
        },
        {
          title: "P & S",
          description: "Probability & Statistics",
          url: "/learn/probability",
          icon: <ProbabilityIcon className="m-0" />,
        },
        {
          title: "Calculus",
          description: "Calculus",
          url: "/learn/calculus",
          icon: <CalculusIcon className="m-0" />,
        },
      ]}
    />
  );

  return (
    <>
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        banner: !isLargerThanMd ? sidebarContent : null,
      }}
    >
         <span
          className="absolute inset-0 z-[-1] h-[64rem] max-h-screen overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(49.63% 57.02% at 58.99% -7.2%, hsl(var(--primary)/0.1) 39.4%, transparent 100%)",
          }}
        >
          <GridPattern
            squares={[
              [16, 17],
              [18, 20],
              [21, 18],
              [15, 22],
              [14, 19],
              [20, 22],
              [12, 17],
              [19, 16],
              [12, 23],
            ]}
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-[10%] inset-y-[-80%] h-[200%] skew-y-12"
            )}
          />
        </span>
        {children}
      </DocsLayout>
      <Footer />
    </>
  );
}


//   return (
//     <>
//       <DocsLayout
//         tree={source.pageTree}
//         {...baseOptions}
//         sidebar={{
//           banner: (
//             <RootToggle
//               options={[
//                 {
//                   title: "Algs",
//                   description: "Learning Algorithms",
//                   url: "/learn/algs",
//                   icon: <AlgsIcon className="m-0" />,
//                 },
//                 {
//                   title: "SL",
//                   description: "Supervised Learning",
//                   url: "/learn/sl",
//                   icon: <SLIcon className="m-0" />,
//                 },
//                 {
//                   title: "USL",
//                   description: "Unsupervised Learning",
//                   url: "/learn/usl",
//                   icon: <USLIcon className="m-0" />,
//                 },
//                 {
//                   title: "Algebra",
//                   description: "Linear Algebra",
//                   url: "/learn/algebra",
//                   icon: <AlgebraIcon className="m-0" />,
//                 },
//                 {
//                   title: "P & S",
//                   description: "Probability & Statistics",
//                   url: "/learn/probability",
//                   icon: <ProbabilityIcon className="m-0" />,
//                 },
//                 {
//                   title: "Calculus",
//                   description: "Calculus",
//                   url: "/learn/calculus",
//                   icon: <CalculusIcon className="m-0" />,
//                 },
//               ]}
//             />
//           ),
//           // enabled: false,
//           // defaultOpenLevel: 3,
//           // collapsible: false
//         }}
//       >
//         <span
//           className="absolute inset-0 z-[-1] h-[64rem] max-h-screen overflow-hidden"
//           style={{
//             backgroundImage:
//               "radial-gradient(49.63% 57.02% at 58.99% -7.2%, hsl(var(--primary)/0.1) 39.4%, transparent 100%)",
//           }}
//         >
//           <GridPattern
//             squares={[
//               [16, 17],
//               [18, 20],
//               [21, 18],
//               [15, 22],
//               [14, 19],
//               [20, 22],
//               [12, 17],
//               [19, 16],
//               [12, 23],
//             ]}
//             className={cn(
//               "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
//               "inset-x-[10%] inset-y-[-80%] h-[200%] skew-y-12"
//             )}
//           />
//         </span>
//         {children}
//       </DocsLayout>
//       <Footer />
//     </>
//   );
// }
