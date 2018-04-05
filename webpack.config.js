const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: {
    "js/index": "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./build/"),
    filename: "[name].js",
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.js/, loader: "babel-loader",
        options: {
          "presets": ["env", "stage-3"]
        }
      },
      {
        test: /\.pug/,
        loaders: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty": true
            }

          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true
              }
            },
            'sass-loader'
          ],
          publicPath: "../"
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: "image/"
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ]

      }
    ]
  },
  plugins:[
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/views/index.pug"
      }),
      new HtmlWebpackPugPlugin(),
      new ExtractTextPlugin('css/style.css')
    ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9001
  }
};