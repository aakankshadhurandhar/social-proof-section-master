module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body:['Spartan']
      },
      colors:{
        darkmagenta:'#502050',
        softpink:'#EE68a4',
        darkgraymagenta:'#937b92',
        lightgraymagenta:'#f7f2f7',
        white:'#ffffff',
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
