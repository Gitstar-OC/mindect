import { source } from "@/lib/source";
import { RainbowButton } from "@/components/ui/rainbow-button";
import type { Metadata } from "next";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Appearance from "@/components/Appearance/appearance";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Separator } from "@/components/ui/separator";
import React from "react";
import "../../global.css";

// export default async function Page(props: {
//   params: Promise<{ slug?: string[] }>;
// }) {
//   const resolvedParams = await props.params; // Await the promise
//   const slug = resolvedParams.slug ? resolvedParams.slug.join("/") : "";
//   const page = source.getPage(resolvedParams.slug);

//   if (!page) notFound();

//   const MDX = page.data.body;
//   const path = `/learn/${page.file.path}`;

export default async function Page(props: { params: { slug?: string[] } }) {
  const slug = props.params.slug ? props.params.slug.join("/") : "";
  const page = source.getPage(props.params.slug);

  if (!page) notFound();

  const MDX = page.data.body;
  const path = `/learn/${page.file.path}`;

  return (
    <>
      <DocsPage
        tableOfContent={{
          header: (
            <a
              href="https://github.com/gitstar-oc/mindect"
              rel="noopener noreferrer"
              target="_blank"
            >
              <RainbowButton>
                <h3 className="text-black dark:text-white mt-none text-[16px] justify-center items-center bottom-3 flex">
                  Contribute to Mindect{" "}
                  <IoIosArrowForward className="ml-1 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                </h3>
              </RainbowButton>
            </a>
          ),
          enabled: page.file.path !== "api-reference.mdx",
          footer: (
            <>
              <div>
                <Separator />
                <a
                  href={`https://github.com/gitstar-oc/learnai/blob/master${path}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-baseline text-xs text-muted-foreground hover:text-foreground mt-4 group"
                >
                  Edit on Github{" "}
                  <ArrowSquareOut className="ml-1 size-3 transition-transform duration-300 ease-in-out transform group-hover:rotate-45" />
                </a>
                <a
                  href="https://github.com/gitstar-oc/learnai/issues/new?title=Feedback%20for%20%E2%80%9Clearnai%E2%80%9D&labels=feedback"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-baseline text-xs text-muted-foreground hover:text-foreground mt-2 mb-1 group"
                >
                  Question? Give us feedback{" "}
                  <FaArrowRightLong className="ml-1 mb-2 size-3 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                </a>
                <Appearance className="gap-0 mb-6" />
              </div>
            </>
          ),
        }}
        toc={page.data.toc}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={{
              ...defaultMdxComponents,
              Steps,
              Step,
              Tabs,
              Tab,
              Accordions,
              Accordion,
              img: (props) => <ImageZoom {...(props as any)} />,
            }}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  const params = await source.generateParams();
  return params.map((param) => ({ slug: param.slug }));
}
export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug ? params.slug.join("/") : "index";
  const page = source.getPage(params.slug);

  if (page == null) notFound();

  const description =
    page.data.description ??
    "Free Site to learn AI, Machine Learning and Deep Learning. Anytime, Anywhere.";

  return {
    title: page.data.title,
    description,
    openGraph: {
      url: `/learn/${slug}`,
    },
  } as Metadata;
}
