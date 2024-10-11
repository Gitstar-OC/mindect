import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { rehypeCode } from 'fumadocs-core/mdx-plugins';

export const { docs, meta } = defineDocs(
  {
  docs: {
    dir: 'content/learn'
  },
  meta: {
    dir: 'content/learn'
  }
}
);

export default defineConfig({
  mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: (v) => [rehypeKatex, rehypeCode, ...v],
  },
});