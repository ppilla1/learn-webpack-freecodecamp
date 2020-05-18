const path = require("path");

module.exports = {
    entry : "./src/app-one/index.js",
    output : {
        filename : "app.js",
        path: path.resolve(__dirname, "../dist")
    }
};