const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  entry: path.resolve(path.join(__dirname, "./src/index.tsx")),
  devServer: {
    compress: true,
    port: 7001,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        include: path.resolve(path.join(__dirname, "./src")),
        test: /.*(\.tsx|\.ts)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(path.join(__dirname, "./src/index.html")),
      favicon: path.resolve(path.join(__dirname, "./favicon.ico")),
      title: "Delipack: Admin Interface",
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(path.join(__dirname, "./public")),
    publicPath: "/",
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
      ".ts",
      ".tsx",
      ".css",
      ".scss",
      ".png",
      ".svg",
      ".jpg",
      ".gif",
    ],
  },
});
