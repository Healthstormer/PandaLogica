/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.module.rules.push(
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
            attributes: false
          },
        },
      );
    return config;
  }
  