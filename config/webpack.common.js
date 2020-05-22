const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : {
        app: "./src/app-one/index.js",
        appTwo: "./src/app-one/app-two.js",
        vendor: "./src/app-one/vendor.js"
    },
    plugins: [
        new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../dist")]})
    ],
    module : {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
};