module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', "sans-serif"],
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dcf46e",

          "secondary": "#ff4a47",

          "accent": "#4cb2ba",

          "neutral": "#282F3E",

          "base-100": "#FBF8FC",

          "info": "#8AB5EA",

          "success": "#26C99E",

          "warning": "#F39C2B",

          "error": "#EF3939",
        },
      },
      {
        mytheme2: {

          "primary": "#ef43f2",

          "secondary": "#e0473c",

          "accent": "#0098a3",

          "neutral": "#232131",

          "base-100": "#433B4E",

          "info": "#2F98F4",

          "success": "#52E5B7",

          "warning": "#904F0E",

          "error": "#FC2C2F",
        },
      },
    ],
  },
}
