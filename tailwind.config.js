// @ts-check
import { createPreset, presets } from 'fumadocs-ui/tailwind-plugin';
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx, js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './content/**/*.{mdx,md,tsx,js,jsx}',
    './mdx-components.tsx',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/fumadocs-openapi/dist/**/*.js',
  ],
  presets: [
    createPreset({
      addGlobalColors: true,
      preset: {
        ...presets.default,
        light: {
          ...presets.default.light,
          primary: '215 100% 50%', // active link color & background on side bar and on this page text
           'secondary-foreground': "110 60% 50%", // unknown
        },
        dark: {
          ...presets.default.dark,
          background: '0 0% 1%', //background
          foreground: '0 0% 98%', //complete text on page (except the description and on this page content along with the sidebar)
          popover: '0 0% 4%', // search box background 
          card: '0 0% 4%', // cards, p & n component, sidebar background
          muted: '0 0% 8%', //muted text or text in mdx wrapped in ``  ``
          border: '0 0% 14%', // borders on page, sidebar and searchbox along with seperator
          accent: '0 0% 15%', // hover on sidebar, searchbox results background and theme
          'accent-foreground': '0 0% 100%', // same hover on above things but for text
          'muted-foreground': '0 0% 60%', //inactive text on sidebar, things on page, description and  p & n component,
          // anchor tag : color of links on this page and p & n component
          // "popover-foreground":'240 100% 50%', // searchbox text
          // "card-foreground": '204 100% 50%',  // card text color
          primary: '215 100% 50%', // active link color & background on side bar and on this page text
          // 'primary-foreground': '100 100% 100%', // unknown
          // 'secondary': '110 60% 50%', // searchbox color
           'secondary-foreground': "215 100% 50%", // color of steps components
          //  ring: '110 60% 50%',
        },
      },
    }),
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
          },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
};