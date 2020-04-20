const path = require('path');
const Cache = require('tldr/lib/cache');

const cache = new Cache({ cache: path.resolve(__filename, '..') });

module.exports = (pluginContext) => () =>
  cache
    .update()
    .then(() => 'done')
    .catch((error) => {
      pluginContext.error(error);
    });
