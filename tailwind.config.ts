import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        opacity: 'opacity',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      spacing: {
        17.5: '70px',
        15: '60px',
      },
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            'a': {
              'color': theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              'code': { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            'h3': {
              fontWeight: '600',
            },
            'code': {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            'a': {
              'color': theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              'code': { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    formsPlugin,
    typographyPlugin,
    ({ addBase, theme }: { addBase: (base: Record<string, any>) => void; theme: (path: string) => string }) => {
      addBase({
        'a, button': {
          'outlineColor': theme('colors.primary.500'),
          '&:focus-visible': {
            outline: '2px solid',
            borderRadius: theme('borderRadius.DEFAULT'),
            outlineColor: theme('colors.primary.500'),
          },
        },
      });
    },
  ],
} satisfies Config;
