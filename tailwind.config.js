import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}'
];
export const prefix = '';
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px'
    }
  },
  extend: {
    fontFamily: {
      sans: ['Mont', ...defaultTheme.fontFamily.sans]
    },
    backgroundImage: {
      primary: "url('/src/assets/images/bg-image.jpg')",
      primaryBig: "url('/src/assets/images/bg-image-big.webp')",
      bg: "url('/src/assets/images/bg.jpeg')"
    },
    borderRadius: {
      primary: '24px',
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    colors: {
      backgroundColor: {
        starwaryellow: 'var(--color-starwar-yellow)',
        starwarblue: 'var(--color-starwar-blue)',
        starwarpink: 'var(--color-starwar-pink)',
        starwarred: 'var(--color-starwar-red)',
        starwarorange: 'var(--color-starwar-orange)',
        starwargray: 'var(--color-starwar-gray)'
      },
      spacing: {
        s0: 'var(--spacing-s0)',
        s2: 'var(--spacing-s2)',
        s4: 'var(--spacing-s4)',
        s6: 'var(--spacing-s6)',
        s8: 'var(--spacing-s8)',
        s12: 'var(--spacing-s12)',
        s16: 'var(--spacing-s16)',
        s24: 'var(--spacing-s24)',
        s32: 'var(--spacing-s32)',
        s40: 'var(--spacing-s40)',
        s44: 'var(--spacing-s44)',
        s48: 'var(--spacing-s48)',
        s56: 'var(--spacing-s56)',
        s64: 'var(--spacing-s64)',
        s72: 'var(--spacing-s72)',
        s88: 'var(--spacing-s88)',
        s112: 'var(--spacing-s112)',
        s136: 'var(--spacing-s136)',
        s160: 'var(--spacing-s160)'
      },
      fontWeight: {
        't1-regular': 'var(--typography-t1-regular-weight)',
        't1-medium': 'var(--typography-t1-medium-weight)',
        't1-semibold': 'var(--typography-t1-semibold-weight)',
        't1-bold': 'var(--typography-t1-bold-weight)',
        't2-regular': 'var(--typography-t2-regular-weight)',
        't2-medium': 'var(--typography-t2-medium-weight)',
        't2-semibold': 'var(--typography-t2-semibold-weight)',
        't2-bold': 'var(--typography-t2-bold-weight)',
        't3-regular': 'var(--typography-t3-regular-weight)',
        't3-medium': 'var(--typography-t3-medium-weight)',
        't3-semibold': 'var(--typography-t3-semibold-weight)',
        't3-bold': 'var(--typography-t3-bold-weight)',
        't4-regular': 'var(--typography-t4-regular-weight)',
        't4-medium': 'var(--typography-t4-medium-weight)',
        't4-semibold': 'var(--typography-t4-semibold-weight)',
        't4-bold': 'var(--typography-t4-bold-weight)',
        't5-regular': 'var(--typography-t5-regular-weight)',
        't5-medium': 'var(--typography-t5-medium-weight)',
        't5-semibold': 'var(--typography-t5-semibold-weight)',
        't5-bold': 'var(--typography-t5-bold-weight)',
        't6-regular': 'var(--typography-t6-regular-weight)',
        't6-medium': 'var(--typography-t6-medium-weight)',
        't6-semibold': 'var(--typography-t6-semibold-weight)',
        't6-bold': 'var(--typography-t6-bold-weight)',
        't7-regular': 'var(--typography-t7-regular-weight)',
        't7-medium': 'var(--typography-t7-medium-weight)',
        't7-semibold': 'var(--typography-t7-semibold-weight)',
        't7-bold': 'var(--typography-t7-bold-weight)',
        't8-regular': 'var(--typography-t8-regular-weight)',
        't8-medium': 'var(--typography-t8-medium-weight)',
        't8-semibold': 'var(--typography-t8-semibold-weight)',
        't8-bold': 'var(--typography-t8-bold-weight)',
        't9-regular': 'var(--typography-t9-regular-weight)',
        't9-medium': 'var(--typography-t9-medium-weight)',
        't9-semibold': 'var(--typography-t9-semibold-weight)',
        't9-bold': 'var(--typography-t9-bold-weight)',
        't10-regular': 'var(--typography-t10-regular-weight)',
        't10-medium': 'var(--typography-t10-medium-weight)',
        't10-semibold': 'var(--typography-t10-semibold-weight)',
        't10-bold': 'var(--typography-t10-bold-weight)',
        't11-regular': 'var(--typography-t11-regular-weight)',
        't11-medium': 'var(--typography-t11-medium-weight)',
        't11-semibold': 'var(--typography-t11-semibold-weight)',
        't11-bold': 'var(--typography-t11-bold-weight)'
      },
      fontSize: {
        t1: 'var(--typography-t1-size)',
        t2: 'var(--typography-t2-size)',
        t3: 'var(--typography-t3-size)',
        t4: 'var(--typography-t4-size)',
        t5: 'var(--typography-t5-size)',
        t6: 'var(--typography-t6-size)',
        t7: 'var(--typography-t7-size)',
        t8: 'var(--typography-t8-size)',
        t9: 'var(--typography-t9-size)',
        t10: 'var(--typography-t10-size)',
        t11: 'var(--typography-t11-size)'
      },
      lineHeight: {
        t1: 'var(--typography-t1-lineheight)',
        t2: 'var(--typography-t2-lineheight)',
        t3: 'var(--typography-t3-lineheight)',
        t4: 'var(--typography-t4-lineheight)',
        t5: 'var(--typography-t5-lineheight)',
        t6: 'var(--typography-t6-lineheight)',
        t7: 'var(--typography-t7-lineheight)',
        t8: 'var(--typography-t8-lineheight)',
        t9: 'var(--typography-t9-lineheight)',
        t10: 'var(--typography-t10-lineheight)',
        t11: 'var(--typography-t11-lineheight)'
      }
    }
  }
};

export const plugins = [tailwindcssAnimate];
