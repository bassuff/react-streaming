const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = {
  target: 'web',
  entry: './client/index.jsx',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};

const serverConfig = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        loader: MiniCssExtractPlugin.loader
      }
    ],
  },
};

module.exports = [clientConfig, serverConfig];
