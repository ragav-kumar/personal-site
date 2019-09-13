const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						modules: true,
					}
				}]
			}, {
				test: /\.scss$/i,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [
				{
					loader: 'style-loader', // creates style nodes from JS strings
				}, {
					loader: 'css-loader', // translates CSS into CommonJS
					options: {
						modules: true,
					}
				}, {
					loader: 'sass-loader', // compiles Sass to CSS
				},
				],
			}
		]
	}
};