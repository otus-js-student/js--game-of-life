const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        // https://webpack.js.org/loaders/css-loader/
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
