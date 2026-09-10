/** @type {import('tailwindcss').Config} */
export default {
  // Aquí le decimos a Tailwind dónde buscar nuestros estilos
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#22C55E',
          'green-dark': '#16A34A',
          'green-deep': '#15803D',
          black: '#0A0A0A',
          secondary: '#111111',
          graphite: '#18181B',
        },
      },
    },
  },
  plugins: [],
}