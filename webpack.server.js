const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: "node",
  entry: './server/src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
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
