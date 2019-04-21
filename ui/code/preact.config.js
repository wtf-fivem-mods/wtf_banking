import Visualizer from 'webpack-visualizer-plugin'
import DynamicCdnWebpackPlugin from 'dynamic-cdn-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'


export default (config, env, helpers) => {
  config.output.filename = "[name].js"
  config.output.publicPath = ''

  // disable polyfills, not needed
  delete config.entry.polyfills

  // disable default html-webpack-plugin
  {
    let { index } = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0]
    config.plugins.splice(index, 1)
  }
  {
    let { index } = helpers.getPluginsByName(config, 'PushManifestPlugin')[0]
    config.plugins.splice(index, 1)
  }
  // overwrite hash in css name
  {
    let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0]
    plugin.filename = 'style.css'
  }
  // don't process url() in css/scss
  {
    let { loader } = helpers.getLoadersByName(config, 'css-loader')[0]
    loader.options.url = false
  }

  config.plugins.push(new HtmlWebpackPlugin({ filename: 'index.html', template: 'index.html' }))
  config.plugins.push(new DynamicCdnWebpackPlugin())
  config.plugins.push(new Visualizer({ filename: './statistics.html' }))
};