const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Widget',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  }

}
