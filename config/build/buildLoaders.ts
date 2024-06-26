import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {type RuleSetRule} from 'webpack';
import {type BuildOptions} from './types/config';

export function buildLoaders(option: BuildOptions): RuleSetRule[] {
	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				'plugins': [
					['i18next-extract', {
						'locales': [
							'ru',
							'en',
						],
						'keyAsDefaultValue': true,
					}],
				],
			},
		},
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: option.isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
						namedExport: false,
					},
				},
			},
			// Compiles Sass to CSS
			'sass-loader',
		],
	};
	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		scssLoader,
	];
}
