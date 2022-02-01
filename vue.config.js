module.exports = {
    publicPath: '/CalendarioPersonal/',

    pwa: {
      name: 'Toolbook',
      themeColor: '#1C2135',
      msTileColor: '#1C2135',
      manifestOptions: {
        background_color: '#1C2135'
      }
    },

    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Toolbook";
              return args;
          })
  }
}