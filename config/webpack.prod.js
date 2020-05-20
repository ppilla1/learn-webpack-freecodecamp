const path = require("path");
const common = require("./webpack.common");
const merge =  require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extracts css into file
                    'css-loader', //2. Turns css into commonjs
                    'sass-loader' //1. Turns sass into css
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].bundle.css"
        }),        
        new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        filename: "app-one.html",
        chunks: ['app', 'vendor'],
        minify:{ //Minify instructions for html
            removeAttributeQuotes: true
        }
    }),
    new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        filename: "app-two.html",
        chunks: ['appTwo','vendor'],
        minify:{ //Minify instructions for html
            removeAttributeQuotes: true
        }
    })],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), // Css minification plugin
            new TerserPlugin(), // Default Js minification plugin
        ]
    },
    output : {
        filename : "[name]-[hash].bundle.js",
        path: path.resolve(__dirname, "../dist")
    }
});