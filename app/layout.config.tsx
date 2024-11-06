import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import Logo from "@/components/ui/Logo";
import SL from "@/components/ui/Navbar/SL"
import USL from "@/components/ui/Navbar/USL"
import Algs from "@/components/ui/Navbar/Algs"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <Logo />, 
    transparentMode: 'top',
  },
  links: [
    {
      text: <SL />,
      url: "/learn/sl",
      active: 'nested-url',
    },
    {
      text: <USL/>,
      url: "/learn/usl",
      active: 'nested-url',
    },{
      text: <Algs/>,
      url: "/learn/algs",
      active: 'nested-url',
    }
  ],
  githubUrl: "https://github.com/gitstar-oc/mindect",
};