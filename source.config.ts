import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

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
      rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});