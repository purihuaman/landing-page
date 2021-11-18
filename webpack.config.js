
const path									= require('path'),
			basePath 							= __dirname,
			publicPath 						= "public",
			HtmlWebpackPlugin 		= require("html-webpack-plugin"),
			MiniCssExtractPlugin  = require("mini-css-extract-plugin"),
			CopyWebpackPlugin			= require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
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
				test: /\.(png|jpe?g|gif|webp|svg)$/i,
				type: 'asset/resource',
				generator: { filename: './src/assets/image/' },
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: path.relative(__dirname, '') }
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
			filename: "./index.html",
			scriptLoading: "blocking",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/assets/icons', to: 'assets/icons' },
				{ from: './src/assets/image', to: 'assets/image' }
			]
		}),
		new MiniCssExtractPlugin({
			filename: 'css/styles.css'
		}),
	],
	// Output point
	output: {
		clean: false,
		path: path.join( basePath, publicPath),
		filename: "js/scripts.js",
	}
}
