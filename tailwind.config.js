const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
  purge: {
    mode: 'all',
    content: [
      './apps/app/content/**/*.{md,mdx}',
      './apps/app/pages/**/*.{js,jsx,ts,tsx}',
      './libs/ui-kit/src/**/*.{js,jsx,ts,tsx}',
    ],
    options: {
      whitelist: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'blockquote',
        'strong',
        'em',
        'mark',
        'del',
        'ins',
        's',
        'u',
        'small',
        'ul',
        'ol',
        'pre',
        'code',
      ],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
