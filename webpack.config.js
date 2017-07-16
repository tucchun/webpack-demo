const path = require('path');
const webpack = require('webpack');
// const WebpackManifestHash = require("webpack-manifest-plugin");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    // index: "./src/index.js",
    // another: './src/another-module.js',
    main: "./src/index.js" // application code
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: ["vendor", "manifest"], // vendor libs + extracted manifest
      minChunks: Infinity,
    }),

    new ChunkManifestPlugin({
      filename: "manifest.json",
      manifestVariable: "webpackManifest",
      inlineManifest: false
    }),
    new HtmlWebpackPlugin({
      title: 'cache',
      template: path.join(__dirname, 'src/index.ejs'),
    }),

    // new webpack.HashedModuleIdsPlugin(),
    // new WebpackChunkHash(),

  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
    // filename: '[name].[hash].js'
  }
};
