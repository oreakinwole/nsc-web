/** @type {import('tailwindcss').Config} */
const url = require("url");
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#049b35",
        "primary-dark": "#037a29",
        "primary-light": "#05c442",
        secondary: "#1a1a1a",
        accent: "#f59e0b",
        "body-color": "#333333",
        "gray-color": "#6b7280",
        "gray-light": "#f3f4f6",
        "navbar-color" : "#ffffff",
        "text-muted": "#9ca3af"
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfairDisplay : ['Playfair Display', 'serif'],
        imperial : ["Imperial Script", 'system-ui']
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.5)',
      },

    },
  },
};
