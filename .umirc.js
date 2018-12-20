export default {
  hash: true,
  history: 'hash',
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: true,
        routes: {
          exclude: [/models\//]
        },
        library: 'preact',
        dynamicImport: {
          webpackChunkName: true
        },
        fastClick: true,
        title: '蝉時雨',
        pwa: {
          manifestOptions: 'src/manifest.json',
          workboxPluginMode: 'GenerateSW',
          workboxOptions: {
            importWorkboxFrom: 'local'
          }
        }
      }
    ]
  ]
}
