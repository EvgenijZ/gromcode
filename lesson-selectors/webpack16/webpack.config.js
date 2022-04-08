const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production';

    const config = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ["babel-loader"],
                },
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
            ],
            plugins: [
                new CleanWebpackPlugin(),
                new HtmlWebpackPlugin(),
                new MiniCssExtractPlugin()
            ],
            devServer: {
                hot: true,
                port: 9000,
            }
        }
    }

    return config;
}