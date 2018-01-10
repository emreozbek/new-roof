const webpack = require( "webpack" );

module.exports = {
	entry: "./03-Front-end/App.js",
	output: {
		filename: "./00-Build/bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				loaders: [ "style-loader", "css-loader", "postcss-loader", "sass-loader" ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [ "env", "es2015", "react", "stage-0" ]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin( {
			"process.env": {
				NODE_ENV: JSON.stringify( "production" )
			}
		} ),
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false
			},
			output: { comments: false }
		} )
	]
};
