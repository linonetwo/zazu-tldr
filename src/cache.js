const cache = require('tldr/lib/cache');

module.exports = pluginContext => () => cache
  .update()
  .then(() => 'done')
  .catch((error) => {
    pluginContext.error(error);
  });
