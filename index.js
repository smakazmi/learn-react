var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var path = require('path');
var express = require('express');

var compiler = webpack(require('./webpack.config.js'));

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: path.resolve(__dirname, "client/public/"),
  // Can also be an array, or: contentBase: "http://localhost/",

  setup: function (app) {
    app.use('/externals', express.static(path.resolve('node_modules')));
  },
  
  // It's a required option.
  publicPath: "/build/",
  reload: true,  
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  }
});
server.listen(8080, "localhost", function () { });
// server.close();