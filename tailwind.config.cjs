/** @type {import('tailwindcss').Config} */
module.exports = Object.assign(require("@continuum-ai/config/tailwind.config.cjs"), {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}'],
  theme: {}
})
