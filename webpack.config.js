
const path = require('path'),
			basePath = __dirname,
			distPath = "dist",
			HtmlWebpackPlugin = require("html-webpack-plugin"),
			MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
	module: {
		rules: [
			{
				test:/\.js$/i,
				exclude: /node_modules/,
				use: { loader: "babel-loader", }
			},
			{
				test: /\.pug$/i,
				use: [ { loader: "pug-loader", } ],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
			filename: "./index.html",
			scriptLoading: "blocking",
		}),
		new MiniCssExtractPlugin({
			filename: 'css/styles.css'
		}),
	],
	// Output point
	output: {
		path: path.join( basePath, distPath),
		filename: "js/scripts.js"
	}
}
