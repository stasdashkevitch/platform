import {type BuildOptions} from './types/config';
import {type Configuration} from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const {mode, paths, isDev} = options;
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: 'bundle.[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
