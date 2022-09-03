const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // Injects Styles into DOM
                    "css-loader", // Turns CSS into CommonJS
                    "sass-loader" // Turns SASS into CSS
                ]
            }
        ]
    }
};