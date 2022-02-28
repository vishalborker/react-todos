const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env", "@babel/preset-react"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/dist/',
        },
        host: 'localhost',
        port: 3002,
        liveReload: true,
        hot: true,
        open: {
            target: ['http://localhost:3002/dist'],
            app: {
              name: 'safari',
              arguments: ['--incognito', '--new-window'],
            },
        },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};