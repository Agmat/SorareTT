/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const MyAnimations = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        test: '#2B2A30',
        grey: '#D6D6D6',

        // Card rarity
        unique: '#F0783D',
        super_rare: '#7C38BB',
        rare: '#2986CC',
        limited: '#127254',
        common: '#999999',
      },
      backgroundImage: {
        'player-card': 'linear-gradient(to top, black 15%, transparent)',
        'unique-card-svg': 'url(/img/unique-card-bg.svg)',
        'super_rare-card-svg': 'url(/img/super_rare-card-bg.svg)',
        'rare-card-svg': 'url(/img/rare-card-bg.svg)',
        'limited-card-svg': 'url(/img/limited-card-bg.svg)',
        'common-card-svg': 'url(/img/common-card-bg.svg)',
      },
      boxShadow: {
        '3xl': '0 0 25px -3px',
      },
    },
  },

  plugins: [MyAnimations],
};
