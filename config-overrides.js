const { injectBabelPlugin } = require('react-app-rewired');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  // use the MobX rewire
  config = rewireMobX(config, env);

  return config
}