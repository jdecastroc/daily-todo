const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//const withLess = require('@zeit/next-less');

const webpack = require('webpack');
module.exports =
  withTypescript(
    withCSS({
      cssModules: true,
    })
)
