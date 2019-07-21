const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    app: './public/app/index.ts',
  },
  output: {
    path: path.resolve(__dirname, '../../public/build'),
    filename: '[name].[hash].js',
    // Keep publicPath relative for deployments
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.es6', '.js', '.json', '.svg'],
    alias: {},
    modules: [path.resolve('public'), path.resolve('node_modules')],
  },
  stats: {
    children: false,
    warningsFilter: /export .* was not found in/,
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        enforce: 'pre',
        exclude: [/node_modules/],
        use: [
          {
            loader: '@microsoft/loader-load-themed-styles', // creates style nodes from JS strings
          },
          {
            loader: 'css-modules-typescript-loader',
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                // eslint-disable-next-line global-require
                return [require('autoprefixer')];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            query: 'jQuery',
          },
          {
            loader: 'expose-loader',
            query: '$',
          },
        ],
      },
      {
        test: /\.html$/,
        // eslint-disable-next-line no-useless-escape
        exclude: /(index|error)\-template\.html/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [],
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
            },
          },
        ],
      },
    ],
  },
  // https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-3
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/].*[jt]sx?$/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
    }),
  ],
};
