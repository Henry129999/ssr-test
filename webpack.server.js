const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
  mode: 'development',
  target: "node",
  entry: './src/server/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: ['isomorphic-style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        }]
      }
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin()
  ],
};

module.exports = merge(baseConfig, serverConfig);
