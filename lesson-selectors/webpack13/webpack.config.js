const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
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
    }
}