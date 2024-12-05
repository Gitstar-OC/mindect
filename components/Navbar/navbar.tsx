"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/ui/Logo";
import SearchBar from "./search";
import {
  Github,
  Sigma,
  Binary,
  Fingerprint,
  Dna,
  PiSquare,
  Infinity,
} from "lucide-react";
import ThemeChanger from "./theme-changer";

// Define the props for ListItem
interface ListItemProps {
  title: string; // Title of the item
  description: string; // Description of the item
  icon: React.ComponentType<{ className?: string }>; // Icon component
  className?: string; // Additional className for styling
  href: string; // Route for navigation
}

const className1 = "group-hover:from-blue-50 group-hover:to-blue-200 dark:group-hover:from-blue-900/30 dark:group-hover:to-blue-600/50";
const className2 = "group-hover:from-purple-100 group-hover:to-purple-300 dark:group-hover:from-purple-900/30 dark:group-hover:to-purple-600/50";

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  icon: Icon,
  className,
  href,
}) => {
  if (!Icon) {
    console.error(`Icon component is undefined for title: ${title}`);
    return null;
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className={cn(
                `flex h-8 w-8 items-center justify-center rounded-md dark:text-white text-black transition-colors group-hover:bg-gradient-to-br`,
                className
              )}
            >
              <Icon className="h-4 w-4" />
            </Button>
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 group-hover:text-black group-hover:dark:text-white text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLearnPath = pathname.startsWith("/learn/");
  const hasContentAfterLearn = pathname.split("/learn/")[1]?.length > 0;


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isLearnPath
          ? `relative lg:px-16 sm:px-4 ${
              hasContentAfterLearn ? "hidden md:flex" : "flex"
            }`
          : `sticky top-0 lg:px-16 sm:px-4 transition-all ${
              isScrolled
                ? "bg-neutral-50/50 dark:bg-neutral-950/20 backdrop-blur-xl border-b border-b-slate-300 dark:border-b-slate-700/40"
                : "bg-transparent"
            }`
      } p-4 h-14 flex items-center z-50 justify-between`}
    >
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Machine Learning</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-4 w-[300px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem
                    title="Supervised Learning"
                    description="Learn about algorithms that use labeled data to make predictions."
                    icon={Binary}
                    href="/learn/sl"
                    //                    href="/machine-learning/supervised"
                    className={className1}
                  />
                  <ListItem
                    title="Unsupervised Learning"
                    description="Explore techniques for finding patterns in unlabeled data."
                    icon={Fingerprint}
                    href="/learn/usl"
                    //                    href="/machine-learning/unsupervised"
                    className={className1}
                  />
                  <ListItem
                    title="Learning Algorithms"
                    description="Dive into various machine learning algorithms and their applications."
                    icon={Dna}
                    href="/learn/algs"
                    //                    href="/machine-learning/algorithms" 
                    className={className1}
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mathematics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-4 w-[300px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem
                    title="Linear Algebra"
                    description="Study vector spaces, matrices, and linear transformations."
                    icon={Sigma}
                    href="/learn/algebra"
                    //                    href="/mathematics/linear-algebra"
                    className={className2}
                  />
                  <ListItem
                    title="Calculus"
                    description="Explore limits, derivatives, integrals, and their applications."
                    icon={PiSquare}
                    href="/learn/calculus"
                    //                    href="/mathematics/calculus"
                    className={className2}
                  />
                  <ListItem
                    title="Probability"
                    description="Learn about random events, distributions, and statistical inference."
                    icon={Infinity}
                    href="/learn/probability"
                    //                    href="/mathematics/probability"
                    className={className2}
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center space-x-1">
        <SearchBar />
        <ThemeChanger />
        <a
          href="https://github.com/gitstar-oc/mindect"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md hover:bg-accent transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
