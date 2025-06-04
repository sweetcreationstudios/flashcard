// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'text-red-600',
    'rotate-y-180',
    'backface-hidden',
    'perspective',
    'transform-style',
    // add other classes you use dynamically
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
