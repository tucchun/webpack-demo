const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},

	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
};