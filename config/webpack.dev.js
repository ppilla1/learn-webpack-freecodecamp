const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
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
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        chunks: ['app', 'vendor']
    }),
    new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        filename: "app-two.html",
        chunks: ['appTwo','vendor']
    })],
    output : {
        filename : "[name].js",
        path: path.resolve(__dirname, "../dist")
    }
});