/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
  
          primary: "hsl(var(--primary))",
          "primary-foreground": "hsl(var(--primary-foreground))",
  
          secondary: "hsl(var(--secondary))",
          "secondary-foreground": "hsl(var(--secondary-foreground))",
  
          card: "hsl(var(--card))",
          "card-foreground": "hsl(var(--card-foreground))",
  
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
  
          muted: "hsl(var(--muted))",
          "muted-foreground": "hsl(var(--muted-foreground))",
  
          accent: "hsl(var(--accent))",
          "accent-foreground": "hsl(var(--accent-foreground))",
        },
  
        borderRadius: {
          xl: "var(--radius)",
        },
  
        boxShadow: {
          glow: "var(--shadow-glow)",
          card: "var(--shadow-card)",
        },
  
        backdropBlur: {
          xl: "20px",
        }
      },
    },
    plugins: [],
  };
  