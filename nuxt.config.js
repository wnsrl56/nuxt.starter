const webpack = require('webpack')

module.exports = {
    head: {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    },
    css: [
      '~/css/main.css'
    ],
    plugins: ['~/plugins/mixin.js'],
    render: {
        bundleRenderer: {
          shouldPreload: (file, type) => {
            return ['script', 'style', 'font'].includes(type)
          }
        }
    },
    build: {
        plugins: [
            new webpack.DefinePlugin({
                'process.VERSION': require('./package.json').version,
            }),
        ],
        vendor: ['axios'],
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
