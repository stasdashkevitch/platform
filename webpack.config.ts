import webpack from "webpack"
import { buildWebpackConfig } from "./config/build/BuildWebpackConfig"
import path from "path"
import { BuildMode, BuildPaths } from "./config/build/types/config"

const paths: BuildPaths =  {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode: string = 'production'

const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'production',
  paths,
  isDev,
})

export default config
