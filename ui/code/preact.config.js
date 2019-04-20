import Visualizer from 'webpack-visualizer-plugin'

export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";
  config.output.publicPath = '';
  config.plugins.push(new Visualizer({
    filename: './statistics.html'
  }))
  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  plugin.options.disable = true;
};
