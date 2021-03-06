var path = require("path");


module.exports = {
  context: __dirname,
  entry: "./frontend/autolist_lite.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
    }]
  },
  target: 'node',
  node: {
    fs: 'empty'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};