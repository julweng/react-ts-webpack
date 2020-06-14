const path = require('path');

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  }
]

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: './',
    port: 3000,
  },
  devtool: 'inline-source-map'
};
