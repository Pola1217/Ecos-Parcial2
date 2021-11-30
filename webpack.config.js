const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        login: './src/login.js',
        index: './src/index.js',
    }, 

    output: {

        path: path.resolve(__dirname, 'public')

    }

};