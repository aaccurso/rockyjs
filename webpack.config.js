module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + "/js",
		filename: "dist/rocky.js"
	},
	module: {
	  loaders: [
		{
		  test: /\.js$/,
		  loader: 'babel',
		  query: {
			presets: ['es2015']
		  }
		}
	  ]
	}
};
