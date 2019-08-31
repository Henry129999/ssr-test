const path = require('path');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', ['@babel/env', {
            targets: {
              browsers: ['last 2 versions']
            }
          }]]
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};