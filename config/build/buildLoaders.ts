import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders(option: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            exportGlobals: true,
            localIdentName: option.isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
            namedExport: false,
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }
  return [
    typescriptLoader,
    scssLoader,
  ]
}
