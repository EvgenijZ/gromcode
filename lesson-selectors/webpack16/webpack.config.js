const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production';

    const config = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [
                        isProduction ?
                            MiniCssExtractPlugin.loader
                            :
                            "style-loader",
                        "css-loader",
                        "sass-loader"],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: '[name].[ext]',
                                outputPath: 'images'
                            },
                        },
                    ],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin()
        ],
        devServer: {
            hot: true,
            port: 9000,
        }
    }

    return config;
}