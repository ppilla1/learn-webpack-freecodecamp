const path = require("path");
const common = require("./webpack.common");
const merge =  require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    plugins: [new HtmlWebpackPlugin({
        template: "./src/app-one/templates/index-template.html",
        filename: "app-one.html"
    })],
    output : {
        filename : "app-[contentHash].js",
        path: path.resolve(__dirname, "../dist")
    }
});