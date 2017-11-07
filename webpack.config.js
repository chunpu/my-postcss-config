// style-loader 只支持到IE9, 用了 polyfill 可以 IE6
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    // modern webpack
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ],
    // webpack v1.x
    loaders: [
        {
            test: /\.css$/,
            // loader: 'style!css!postcss',
            loader: 'postcss'
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
            // loader: ExtractTextPlugin.extract('style-loader!css-loader!postcss-loader')
        }
    ]
  }
}

module.exports = config
