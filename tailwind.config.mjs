/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        secondary: {
          50: '#e8f5f1',
          100: '#c3e6db',
          200: '#9dd6c5',
          300: '#76c7af',
          400: '#50b899',
          500: '#3aa983',
          600: '#2d8a69',
          700: '#206b4f',
          800: '#144c35',
          900: '#072d1b',
        },
        neutral: {
          50: '#f7f8fa',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#0a0e1a',
        },
      },
    },
  },
  plugins: [],
};
