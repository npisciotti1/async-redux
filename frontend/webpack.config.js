'use strict';

const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

//a boolean value that's true if our NODE_ENV is set to production.
const production = process.env.NODE_ENV === 'production';

//default variables
const plugins = [
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
