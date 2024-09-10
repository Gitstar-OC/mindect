import { source } from "@/app/source";
import type { Metadata } from "next";
import { FaArrowRightLong } from "react-icons/fa6";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
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
import { Separator } from "@/components/ui/separator"
import React from "react";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const path = `/content/docs/${page.file.path}`

  return (
    <DocsPage
      toc={page.data.toc}
      // lastUpdate={page.data.exports.lastModified}
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
            Question? Give us feedback <FaArrowRightLong className="ml-1 size-3" />
          </a>
          </div>
          </>
        ),
      }}
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
            img: (props) => {
              const { src, alt = 'Image description', ...rest } = props; // Provide a default alt text
            
              if (!src) {
                console.error('Image source is missing!');
                return null; // Return null or placeholder image if src is missing
              }
            
              return <ImageZoom src={src} alt={alt} {...rest} />;
            }}}
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
