import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',
          sm: '2rem', 
          lg: '4rem', 
          xl: '5rem', 
        },
        screens: {
          sm: '100%', 
          md: '100%', 
          lg: '100%', 
          xl: '1280px', 
        },
      },
    },
  },
  plugins: [],
};
export default config;
