
const webpack = require("webpack");

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-module-map',
    devServer: {
        contentBase: __dirname + '/public',
        inline: true,
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 热替换插件
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            }
        ]
    }
}