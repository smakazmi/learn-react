var webpack = require('webpack');
var path = require('path');

var PATHS = {
  script: path.resolve(__dirname, 'client/src/script'),
  build: path.resolve(__dirname, 'client/public/build')
}

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(PATHS.script, 'app.tsx'),
  output: {
    path: PATHS.build,
    filename: 'client.bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },
  watch: true,
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.png', '.jpg'],
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  module: {
    loaders: [{
      test: /\.tsx?$/, loaders: ['babel?presets[]=es2015&presets[]=react', 'ts']
    }, {
      test: /\.jsx?$/, loaders: ['babel?presets[]=es2015&presets[]=react']
    }, {
      test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    }, {
      test: /\.css$/, loaders: ['style', 'css?sourceMap']
    }, {
      test: /\.(jpe?g|gif|png)$/, loader: 'url-loader?limit=100000'
    }, { 
      test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" 
    }, { 
      test: /\.ttf$/, loader: "file-loader" 
    }, { 
      test: /\.eot$/, loader: "file-loader" 
    }, {
      test: /\.svg$/, loader: "file-loader" 
    }, {
      test: /\.woff2$/, loader: "file-loader" 
    }],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    contentBase: 'client/public/'
  }
}