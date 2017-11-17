//Konfiguracja Webpack
module.exports = {
    entry: ["whatwg-fetch","./js/index.jsx"],
    output: { filename: "./js/out.js" },
    watch: true,
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    module: {
        loaders: [
            {

                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}