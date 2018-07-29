// webpack v4
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
          use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader", 
            options: {
                sourceMap: true
            }
          },
          // {
          //   loader: "postcss-loader"
          // }, 
          {
            loader: "sass-loader", 
            options: {
                sourceMap: true
            }
          }
        ]
      }     
    ]
  },
  
  plugins: [
    new webpack.ProvidePlugin ({
      $: 'jquery',
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      trumbowyg: 'trumbowyg',
    }),
    
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      files: './src/scss/*.scss',
      syntax: 'scss'
    }),
    new CopyWebpackPlugin([
      {from:'src/img',to:'img'},
      {from:'src/components',to:'components'},
      {from:'src/fonts',to:'fonts'}
    ]),
    new webpack.ProvidePlugin({
      trumbowyg: 'trumbowyg',
       jQuery: 'jquery',
       $: 'jquery',
       
     }),
  ]
};
