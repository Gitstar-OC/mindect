"use client";

// This component is used to zoom images
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

function IZ({ alt, src }) {
  return (
    <ImageZoom
      alt={alt}
      src={src}
      className="!my-0 rounded-xl bg-fd-background"
      width="1000"
      height="1000"
      priority
    />
  );
}

export { IZ };


