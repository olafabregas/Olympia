module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
    "./public/index.html", 
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#4169E1',
        'amethyst': '#9966CC',
        'metallic-gold': '#FFD700',
        'jet-black': '#1A1A1A',
        'neon-cyan': '#00FFFF',
        'gainsboro': '#DCDCDC',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
