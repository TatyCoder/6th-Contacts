const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'webpack_output'),
        publicPath: 'webpack_output'
    },
    devServer: {
      publicPath: '/webpack_output',
      contentBase: './',
      hot: true
    }
};