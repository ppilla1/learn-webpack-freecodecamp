const path = require("path");
const common = require("./webpack.common");
const merge =  require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        filename: "app-one.html",
        chunks: ['app']
    }),
    new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        filename: "app-two.html",
        chunks: ['vendor']
    })],
    output : {
        filename : "[name]-[hash].js",
        path: path.resolve(__dirname, "../dist")
    }
});