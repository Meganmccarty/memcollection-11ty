/** @type {import('tailwindcss'.Config)} */
module.exports = {
    content: [
        './src/**/*.{html,njk}',
    ],
    theme: {
        extend: {},
        screens: {
            'max-xs': { max: '514px' },
            'max-sm': { max: '639px' },
            'max-md': { max: '767px' },
            'max-2xmd': { max: '899px' },
            'max-lg': { max: '1023px' },
            'max-xl': { max: '1279px' },
            'max-2xl': { max: '1535px' },
            xs: '515px',
            sm: '640px',
            md: '768px',
            '2xmd': '900px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
    prefix: 'tw-',
};
