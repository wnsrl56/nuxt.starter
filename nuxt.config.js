const webpack = require('webpack')

module.exports = {
    build: {
        plugins: [
            new webpack.DefinePlugin({
                'process.VERSION': require('./package.json').version
            })
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