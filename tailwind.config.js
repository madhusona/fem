module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/pattern-background-desktop.svg')",
        'mobile': "url('/images/pattern-background-mobile.svg')",
       },
       fontFamily:{
         'redhat':['Red Hat Display', 'sans-serif']
       },
       colors:{
         blue:'#3829E0',
         light:'#E0E8FF'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
