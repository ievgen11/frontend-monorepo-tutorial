const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => ({
  entry: path.resolve(path.join(__dirname, "./src/index.js")),
  devServer: {
    compress: true,
    port: 7002,
    open: true,
    historyApiFallback: true,
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
      inject: true,
      hash: true,
      template: path.resolve(path.join(__dirname, "./src/index.html")),
      favicon: path.resolve(path.join(__dirname, "./favicon.ico")),
      title: "Delipack: Client Interface",
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[chunkhash:6].css",
      chunkFilename: "static/css/[name].[chunkhash:6].css",
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    publicPath: "/",
    path: path.resolve(path.join(__dirname, "./build")),
    filename: "static/js/[name].js",
    sourceMapFilename: "static/maps/[filebase].map",
  },
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
