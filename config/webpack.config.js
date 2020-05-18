const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry : "./src/app-one/index.js",
    output : {
        filename : "app-[contentHash].js",
        path: path.resolve(__dirname, "../dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        filename: "app-one.html"
    })],
    module : {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};