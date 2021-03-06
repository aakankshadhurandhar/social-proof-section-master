module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body:['Spartan']
      },
      colors:{
        magenta: '#8E398E',
        softPink: '#EE68A4',
        darkMagenta: '#937B92',
        lightMagenta: '#F7F2F7',
        testimonial: '#521f50',
      },
      backgroundimage:{
        'hero-lg': "url('/images/bg-pattern-top-mobile.svg')",
        'lower-side': "url('/images/bg-pattern-bottom-desktop.svg')",
        'upper-side': "url('/images/bg-pattern-top-desktop.svg')",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
