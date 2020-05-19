const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : "./src/app-one/index.js",
    plugins: [
        new CleanWebpackPlugin()
    ],
    module : {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]-[hash].[ext]",
                        outputPath: "img"
                    }
                }
            }
        ]
    }
};