module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Ayushway',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Ayushway Traditional Wellness'}
    ],
    link: [
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Roboto|Slabo+27px'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {color: '#3B8070'},
  css: [
    {src: '~/assets/css/bulma.scss', lang: 'scss'},
    {src: '~/assets/css/main.scss', lang: 'scss'},
    {src: 'font-awesome/scss/font-awesome.scss', lang: 'scss'}
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
