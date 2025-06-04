// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { colors as customColors } from './src/styles/tokens'; // Adjust path if necessary

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //'primary': '#c62f9d',
        //'secondary': '#22a796',
        'neutral-dark': '#1C1C1C',
        'neutral-light': '#F7F8FA',
        primary: customColors.primary,
        'secondary': customColors.secondary.DEFAULT, // `bg-secondary`, `text-secondary`
        // 'neutral-dark': customColors.neutral.dark, // `text-neutral-dark`
        // 'neutral-light': customColors.neutral.light, // `bg-neutral-light`
        // If you want to use the nested structure for shades (e.g., primary-light)
        // you can spread the objects:
        // primary: customColors.primary,
        // secondary: customColors.secondary,
        // neutral: customColors.neutral,
        // This would allow `bg-primary-DEFAULT`, `text-neutral-dark`, etc.
        // For simplicity with fewer shades, direct mapping is often easier.

        // For the gradient, you can define the 'from' and 'to' colors if you want to use them
        // in utility classes like `from-gradient-from to-gradient-to`
        'gradient-from': customColors.gradient.from,
        'gradient-to': customColors.gradient.to,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'].join(', '),
        montserrat: ['Montserrat', 'sans-serif'].join(', '),
        inter: ['Inter', 'sans-serif'].join(', '),
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'].join(', '),
      },
      // ... other theme extensions like backgroundImage for gradients
      backgroundImage: {
        'brand-gradient': `linear-gradient(240deg, ${customColors.gradient.from} 0%, ${customColors.gradient.to} 100%)`,
      }
    },
  },
  plugins: [],
};
export default config;