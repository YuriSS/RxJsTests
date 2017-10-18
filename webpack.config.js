const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff2"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test:    /\.html$/,
        exclude: /node_modules/,
        loader:  "file-loader?name=[name].[ext]",
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["es2015"] }
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  }
};