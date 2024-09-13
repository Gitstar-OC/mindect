import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import Logo from "@/components/ui/Logo";
import { economica } from "@/lib/fonts";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <>
        <Logo
          // className="size-4 [.uwu_&]:hidden [header_&]:size-5"
          // fill="currentColor"
        />
        <span
          className={`${economica.className} [.uwu_&]:hidden max-md:[header_&]:hidden`}
        >
          Mindect
        </span>
      </>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
      // active: 'nested-url',
    },
  ],
  githubUrl: "https://github.com/gitstar-oc/learnai",
};
