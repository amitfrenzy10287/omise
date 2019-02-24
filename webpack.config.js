const path = require('path');
require('babel-polyfill');

const config = {
  entry: ['babel-polyfill','./src/Layout.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: 'build'
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'public',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
};

module.exports = config;
