var debug = process.argv.indexOf('-p') === -1;
var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: "node",
  context: path.resolve(__dirname),
  devtool: debug ? "#cheap-module-source-map" : null,
  entry: "./src/app.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  externals: /^[a-z\-0-9]+$/,
  output: {
    pathinfo: true,
    path: path.join(__dirname, 'dist'),
    libraryTarget: "commonjs2",
    filename: "app.js"
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
