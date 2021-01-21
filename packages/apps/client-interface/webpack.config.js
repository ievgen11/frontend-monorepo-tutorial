const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () =>
  merge.smartStrategy({
    "module.rules": "append",
  })({
    entry: path.resolve(path.join(__dirname, "./src/index.js")),
    devServer: {
      compress: true,
      port: 7002,
      open: true,
    },
    module: {
      rules: [
        {
          include: path.resolve(path.join(__dirname, "./src")),
          test: /.*(\.jsx|\.js)$/,
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(path.join(__dirname, "./src/index.html")),
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  });
