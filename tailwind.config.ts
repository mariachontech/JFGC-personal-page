import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }

        xs: { max: '479px' },
        // => @media (max-width: 479px) { ... }
      },
    },
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primaryT: '#B63E96', // 240,86,199
        primaryDarkT: '#58E6D9', // 80,230,217
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
        cirularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,hsl(var(--background)) 5px, hsl(var(--background)) 100px)',

        circularLightLg:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',

        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,hsl(var(--background)) 8px,hsl(var(--background)) 80px)',

        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 6px,#f5f5f5 60px)',

        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,hsl(var(--background)) 6px,hsl(var(--background)) 60px)',

        circularLightSm:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 4px,#f5f5f5 40px)',

        circularDarkSm:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,hsl(var(--background)) 4px,hsl(var(--background)) 40px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  important: true,
} satisfies Config

export default config
