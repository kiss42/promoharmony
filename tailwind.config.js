module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all files
  theme: {
    extend: {
      colors: {
        accent: "#10b981", // Your brand color
        "accent-dark": "#0f766e", // A darker variation for hover states
      },
    },
  },
  plugins: [],
};
