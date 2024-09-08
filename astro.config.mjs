import { defineConfig } from 'astro/config';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import rehypeMathJax from "rehype-mathjax";
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: 'https://ismael-lajaaiti.github.io',
    // base: 'my-repo',
    integrations: [expressiveCode({
        plugins: [pluginCollapsibleSections()]
    }), icon(), tailwind(), react()],
    markdown: {
        extendDefaultPlugins: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    }
});
