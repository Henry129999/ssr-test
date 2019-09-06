module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        }]
      },
      // {
      //   test: /\.css?$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader']
      // }
    ],
  },
};