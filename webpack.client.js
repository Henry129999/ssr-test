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
  plugins: [
    new CleanWebpackPlugin()
  ],
};

module.exports = merge(baseConfig, clientConfig);