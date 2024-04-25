import { Configuration } from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import path from "path"
import { BuildEnv, BuildPaths } from "./config/build/types/config"

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const isDev = (env.mode || 'development')  === 'development'
  const PORT = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode: env.mode || 'development',
    paths,
    isDev,
    port: PORT,
  })
  return config
}
