// Generated using webpack-cli https://github.com/webpack/webpack-cli
// https://stackoverflow.com/questions/68913996/use-webpack-5-to-build-an-es-module-bundle-and-consume-that-bundle-in-a-node-js

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            type: "module",
        },
    },
    experiments: {
        outputModule: true,
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
