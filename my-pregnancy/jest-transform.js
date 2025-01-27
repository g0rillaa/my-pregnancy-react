const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-private-property-in-object'],
});
