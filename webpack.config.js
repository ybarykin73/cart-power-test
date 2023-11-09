const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
        open: true,
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    optimization: {
        runtimeChunk: 'single',
    },

    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },

    resolve: {
        extensions: ['.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: './src/index.html'
        }),
    ],
};