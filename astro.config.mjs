import { defineConfig } from 'astro/config';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathJax from "rehype-mathjax";
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-tutorial-2048.netlify.app",
    integrations: [expressiveCode({
        plugins: [pluginCollapsibleSections()]
    }), icon(), tailwind()],
    markdown: {
        extendDefaultPlugins: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    }
});
