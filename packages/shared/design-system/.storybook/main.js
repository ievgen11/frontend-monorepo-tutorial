const merge = require("webpack-merge");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (config) =>
    merge.smartStrategy({
      "module.rules": "append",
    })(config, {
      module: {
        rules: [
          {
            include: path.resolve(path.join(__dirname, "../src")),
            test: /.*(\.jsx|\.js)$/,
            use: ["babel-loader"],
          },
          {
            include: path.resolve(path.join(__dirname, "../src")),
            test: /.*(\.ts|\.tsx)$/,
            use: ["ts-loader"],
          },
        ],
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    }),
};
