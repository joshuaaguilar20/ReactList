const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: [
      './src/index.js',
      'react-hot-loader/patch'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.s?[ac]ss$/,
            use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
      ],
    devServer: {
      contentBase: './dist',
      hot: true
    },
    // optimization: {
    //     splitChunks: {
    //       cacheGroups: {
    //         styles: {
    //           name: 'styles',
    //           test: /\.s?[ac]ss$/,
    //           chunks: 'all',
    //           enforce: true
    //         }
    //       }
    //     }
    //   }
  };