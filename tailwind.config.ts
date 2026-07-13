import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FFFBF5",
          100: "#FFF4E6",
          200: "#FFE4C4",
          300: "#FFD09A",
          400: "#F5B86E",
          500: "#E89A45",
          600: "#D17E2A",
          700: "#A85F1E",
          800: "#7A4416",
          900: "#4F2C0E",
        },
        bo: {
          DEFAULT: "#F05A1A",
          dark: "#D4450A",
          light: "#FF9A66",
        },
        accent: {
          50: "#FFF0FA",
          100: "#FFD6F0",
          200: "#FFA8DF",
          300: "#FF75CB",
          400: "#F94BB5",
          500: "#E91E9A",
          600: "#C7157F",
          700: "#A01266",
          800: "#780E4C",
          900: "#4A092F",
        },
        joy: {
          50: "#FFFBEA",
          100: "#FFF3C4",
          200: "#FFE58A",
          300: "#FFD24D",
          400: "#FFBE1A",
          500: "#F5A623",
          600: "#D98A00",
          700: "#B06E00",
          800: "#825200",
          900: "#523400",
        },
        sage: {
          50: "#EEFBF1",
          100: "#D4F5DB",
          200: "#A8EBB8",
          300: "#6FDB8A",
          400: "#3CC85E",
          500: "#22B048",
          600: "#1A8F3A",
          700: "#157230",
          800: "#115726",
          900: "#0B3818",
        },
        ink: {
          DEFAULT: "#1F1F1F",
          soft: "#3A3A3A",
          muted: "#5A5A5A",
          light: "#8A8A8A",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.9s ease-out",
        "slow-zoom": "slowZoom 20s ease-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 2.5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "bounce-soft": "bounceSoft 2.4s ease-in-out infinite",
        shine: "shine 3.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 12s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "60%, 100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
