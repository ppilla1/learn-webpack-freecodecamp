const path = require("path");

module.exports = {
    entry : "./src/app-one/index.js",
    output : {
        filename : "app.js",
        path: path.resolve(__dirname, "../dist")
    },
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