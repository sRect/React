const path = require("path");
const HtmlPlugin = require('html-webpack-plugin') // 打包html

module.exports = {
  entry: {
    entry: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env','react']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      template: './src/html/index.html'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: 1717
  }
}