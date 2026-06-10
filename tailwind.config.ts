import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const oklch = (variable: string) => `oklch(var(${variable}) / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: oklch("--border"),
        input: oklch("--input"),
        ring: oklch("--ring"),
        background: oklch("--background"),
        foreground: oklch("--foreground"),
        primary: {
          DEFAULT: oklch("--primary"),
          foreground: oklch("--primary-foreground"),
        },
        secondary: {
          DEFAULT: oklch("--secondary"),
          foreground: oklch("--secondary-foreground"),
        },
        destructive: {
          DEFAULT: oklch("--destructive"),
          foreground: oklch("--destructive-foreground"),
        },
        muted: {
          DEFAULT: oklch("--muted"),
          foreground: oklch("--muted-foreground"),
        },
        accent: {
          DEFAULT: oklch("--accent"),
          foreground: oklch("--accent-foreground"),
        },
        popover: {
          DEFAULT: oklch("--popover"),
          foreground: oklch("--popover-foreground"),
        },
        card: {
          DEFAULT: oklch("--card"),
          foreground: oklch("--card-foreground"),
        },
        sidebar: {
          DEFAULT: oklch("--sidebar-background"),
          foreground: oklch("--sidebar-foreground"),
          primary: oklch("--sidebar-primary"),
          "primary-foreground": oklch("--sidebar-primary-foreground"),
          accent: oklch("--sidebar-accent"),
          "accent-foreground": oklch("--sidebar-accent-foreground"),
          border: oklch("--sidebar-border"),
          ring: oklch("--sidebar-ring"),
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Aptos", "Segoe UI", "sans-serif"],
        body: ["var(--font-body)", "Aptos", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Aptos", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-in-reduced": {
          "0%, 100%": {
            opacity: "1",
            transform: "none"
          }
        },
        "slide-in-reduced": {
          "0%, 100%": {
            opacity: "1",
            transform: "none"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in-reduced": "fade-in-reduced 1ms linear",
        "slide-in-reduced": "slide-in-reduced 1ms linear",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
