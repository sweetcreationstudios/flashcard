// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'text-red-600',
    // add other classes you use dynamically
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
