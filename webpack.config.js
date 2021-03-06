const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: {
		server: './my-express-app/bin/www'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	target: 'node',
	node: {
		// Need this when working with express, otherwise the build fails
		__dirname: false, // if you don't put this is, __dirname
		__filename: false // and __filename return blank or /
	},
	externals: [ nodeExternals() ], // Need this to avoid error when working with Express
	module: {
		rules: [
			{
				// Transpiles ES6-8 into ES5
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				// Transpiles ES6-8 into ES5
				test: /\.pug$/,
				use: {
					loader: 'pug-html-loader'
				}
			},
			{
				// Loads the javacript into html template provided.
				// Entry point is set below in HtmlWebPackPlugin in Plugins
				test: /\.html$/,
				use: [ { loader: 'html-loader' } ]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './my-express-app/public/index.html',
			filename: './public/index.html',
			excludeChunks: [ 'server' ]
        }),
        new CopyWebpackPlugin([{ 
            context: "./my-express-app",
            from: "views/**/**"
            // I *did not* have to put a 'to' property here
        }]),
        new CopyWebpackPlugin([{ 
            context: "./my-express-app",
            from: "public/stylesheets/**/**"
            // I *did not* have to put a 'to' property here
        }])
	]
};
