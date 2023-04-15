const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env) => {
  const mode = env.mode === 'production' ? 'production' : 'development'
  const isDev = mode === 'development'

  return {
    mode,
    entry: path.resolve(__dirname, 'src'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/',
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
                },
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      preferAbsolute: true,
      modules: ['./src', 'node_modules'],
      mainFiles: ['index'],
    },
    devServer: isDev
      ? {
          port: 3000,
          open: true,
          historyApiFallback: true,
          hot: true,
          static: {
            directory: path.resolve(__dirname, './dist'),
          },
        }
      : undefined,
  }
}
