const path = require('path');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          }},
          ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};

module.exports = merge(baseConfig, clientConfig);