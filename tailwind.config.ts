import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617", // Slate 950 (Deep Dark)
                foreground: "#F8FAFC", // Slate 50
                primary: {
                    DEFAULT: "#f43f5e", // Rose 500 (Rose Gold-ish accent)
                    foreground: "#fff",
                },
                secondary: {
                    DEFAULT: "#8b5cf6", // Violet 500 (Electric Purple)
                    foreground: "#fff",
                },
                accent: {
                    DEFAULT: "#06b6d4", // Cyan 500 (Tech glow)
                    foreground: "#fff",
                },
                muted: {
                    DEFAULT: "#1e293b", // Slate 800
                    foreground: "#94a3b8", // Slate 400
                },
                card: {
                    DEFAULT: "rgba(30, 41, 59, 0.5)", // Glassmorphism base
                    foreground: "#F8FAFC",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
