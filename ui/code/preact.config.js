export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";
  config.output.publicPath = '';
  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  plugin.options.disable = true;
};
