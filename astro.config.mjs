import { defineConfig } from 'astro/config';
import remarkMath from "remark-math";
import rehypeMathJax from "rehype-mathjax";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-tutorial-2048.netlify.app",
    markdown: {
        shikiConfig: {
            theme: "dracula",
            wrap: false
        }
    },
    markdown: {
        smartypants: false,
        gfm: false,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathJax],
    },
});
