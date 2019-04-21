const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './src/query.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ]
}
