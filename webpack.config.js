const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const config = require('./cyb.config.js')

const eslintLoader = () => ({
  test: /\.(js)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  exclude: /(node_modules|bower_components)/,
  options: {
    formatter: eslintFriendlyFormatter,
    emitWarning: true
  }
})

module.exports = {
  externals: {
    '@antv/data-set': 'DataSet',
    rollbar: 'rollbar'
  },
  resolve: {
    alias: {
      "components": 'views/index/components/'
    }
  },
  module: {
    rules: [
      ...(config.eslint.available ? [eslintLoader()] : []),
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  }
}
