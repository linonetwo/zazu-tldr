const cache = require('tldr/lib/cache');

module.exports = () => () => cache.update().then(() => 'done');
