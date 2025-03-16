const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const rootPath = path.resolve(__dirname)
const srcPath = path.resolve(rootPath, 'src/index.js')
const distPath = path.resolve(rootPath, 'dist')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: ['@babel/polyfill', srcPath]
  },
  output: {
    filename: '[name].[hash].js',
    path: distPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(distPath, 'public'),
    },
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://localhost:5151',
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
