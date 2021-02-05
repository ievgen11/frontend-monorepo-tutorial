const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  target: "node",
  devtool: "source-map",
  entry: {
    index: path.resolve(path.join(__dirname, "./src/index.ts")),
  },
  module: {
    rules: [
      {
        include: path.resolve(path.join(__dirname, "./src")),
        test: /.*(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        include: path.resolve(path.join(__dirname, "./src")),
        test: /.*\.tsx$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
});
