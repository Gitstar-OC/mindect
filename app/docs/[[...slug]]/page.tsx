import { source } from "@/app/source";
import type { Metadata } from "next";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { TbSettings } from "react-icons/tb";
import { CardSpotlight } from "@components/ui/Card";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
// import {IZ} from "@lib/IZ" // replacement for Image Zoom as it was throwing errors

import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const path = `/content/docs/${page.file.path}`;

  return (
    <DocsPage 
    
      // lastUpdate={page.data.lastModified}
      tableOfContent={{
        enabled: page.file.path !== "api-reference.mdx",
        footer: (
          <>
            <div className="">
              <Separator />
              <a
                href={`https://github.com/gitstar-oc/learnai/blob/master${path}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-baseline text-xs text-muted-foreground hover:text-foreground mt-4"
              >
                Edit on Github <ArrowSquareOut className="ml-1 size-3" />
              </a>
              <a
                href="https://github.com/gitstar-oc/learnai/issues/new?title=Feedback%20for%20%E2%80%9Clearnai%E2%80%9D&labels=feedback"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-baseline text-xs text-muted-foreground hover:text-foreground mt-2"
              >
                Question? Give us feedback{" "}
                <FaArrowRightLong className="ml-1 mb-3 size-3" />
              </a>
              {/* <Separator /> */}
              <span className="opacity-70 hover:opacity-100 cursor-pointer group text-xs flex">
                <TbSettings className=" size-3 mt-[1px] mr-1 transition-transform duration-300 ease-in-out group-hover:rotate-[360deg] group-hover:scale-125" /> Change Appearance{" "}
              </span>
              <a href="https://github.com/gitstar-oc/mindect"  rel="noopener noreferrer"  target="_blank" className="group ">
              <CardSpotlight className="w-auto h-4 mt-4 p-6 ">
                <h3 className="text-black dark:text-neutral-300 mt-none relative z-20 justify-center items-center bottom-3 flex ">
                  Contribute to Mindect <FaArrowRightLong className="ml-1 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" />  
                </h3>
              </CardSpotlight>
              </a>
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
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (page == null) notFound();

  const description =
    page.data.description ??
    "Free Site to learn AI, Machine Learning and Deep Learning. Anytime, Anywhere.";

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `/docs/${page.slugs.join("/")}`,
      // images: image,
    },
  } satisfies Metadata;
}
