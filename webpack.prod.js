const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {},
    }),
    new MiniCssExtractPlugin(),
    new CompressionWebpackPlugin(),
  ],
};
