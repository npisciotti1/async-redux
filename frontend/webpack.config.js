'use strict';

//load environment
require('dotenv').config();

//declare plugins
const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

//a boolean value that's true if our NODE_ENV is set to production.
const production = process.env.NODE_ENV === 'production';

//default variables
let plugins = [
  new ExtractPlugin('bundle.[hash].css'),
  new HTMLPlugin({
    template: `${__dirname}/src/index.html`
  }),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.API_URL)
  }),
  new EnvironmentPlugin(['NODE_ENV'])
]

//add two plugins if NODE_ENV === 'production'
if(production) {
  plugins = plugins.concat([
    new CleanPlugin(),
    new UglifyPlugin()
  ])
}

//config
module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
    publicPath: process.env.CDN_URL,

  }
  devtool: production ? undefined : 'cheap-module-eval-sourcemap',
  //force webpack-dev-server to support single page apps
  //by making it serve index.html when it cant find a resource/page for your
  //given route
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader', //works like 'cp' (unix command)
            options: {
              name: 'image/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
