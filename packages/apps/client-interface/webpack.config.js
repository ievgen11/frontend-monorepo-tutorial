const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => ({
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
      {
        include: path.resolve(path.join(__dirname, "./src")),
        test: /.*(\.scss|\.css)$/,
        use: [
          options.mode === "production"
            ? MiniCssExtractPlugin.loader
            : { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          publicPath: "/",
          name:
            options.mode === "production"
              ? "static/img/[contenthash].[ext]"
              : "static/img/[path][name].[ext]",
        },
      },
      {
        test: /normalize.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(path.join(__dirname, "./src/index.html")),
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[chunkhash:6].css",
      chunkFilename: "static/css/[name].[chunkhash:6].css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".css",
      ".scss",
      ".png",
      ".svg",
      ".jpg",
      ".gif",
    ],
  },
});
