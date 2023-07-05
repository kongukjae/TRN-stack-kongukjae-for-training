const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  // argv.mode는 webpack을 실행할 때의 mode를 의미합니다.
  // mode 옵션을 지정하지 않으면 기본값으로 production 모드가 설정됩니다.

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/, // .ts, .tsx, .js, .jsx 파일을 대상으로 합니다.
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], 
              // @babel/preset-typescript를 추가합니다.
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'], // .tsx와 .jsx 확장자를 처리합니다.
    },
    plugins: [new ESLintPlugin({ 
      fix: true,
      extensions: ["ts", "js"] 
    })],
    output: {
      filename: isProduction ? "index.bundle.js" : "index.dev.bundle.js",
      path: path.resolve(__dirname, "dist"),
    }
  };
};