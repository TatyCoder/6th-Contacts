const path = require('path');

module.exports = {
    mode: 'production',
    entry: './app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'webpack_output'),
        publicPath: 'webpack_output'
    }
};