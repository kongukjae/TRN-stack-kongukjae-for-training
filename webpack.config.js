const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new ESLintPlugin({ 
    fix: true,
    extensions: ["ts", "js"] 
  })],

  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
};
