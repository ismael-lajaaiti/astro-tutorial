/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                sans: ['Inter Variable', 'Noto Sans Variable', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
