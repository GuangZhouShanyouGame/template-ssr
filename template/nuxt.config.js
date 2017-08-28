var path = require('path')

var projectSrc = path.join(__dirname, 'src')

module.exports = {
    srcDir: 'src/',

    htmlAttrs: {
        lang: 'zh-CN'
    },

    head: {
        title: 'starter',
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    loading: { color: '#3B8070' },

    build: {
        filenames: {
            vendor: 'vendor.[chunkhash].js',
            app: 'app.[chunkhash].js'
        },

        // Uncomment to use CDN
        // publicPath: '//img-2.24haowan.shanyougame.com/24haowan/**** PROJECT FOLDER ****/',

        /*
        ** Run ESLINT on save
        */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }

            config.resolve.alias['@'] = path.join(projectSrc, 'libraries/24')
        }
    }
}
