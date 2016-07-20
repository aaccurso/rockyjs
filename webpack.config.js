module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: "rocky.js"
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel'
    }
    ]
  }
};
