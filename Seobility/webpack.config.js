const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => ({
    entry: './src/main.js',
    output: {
        filename: 'index.[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
            {
                test: /\.scss$/i,
                use: [
                env.prod ? MiniCssExtractPlugin.loader : "style-loader",
                "css-loader", "sass-loader",
                ],
            },
        ],
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            title:'Submitting the form'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    optimization: {
        minimizer: [
          "...",
          new CssMinimizerWebpackPlugin(),
        ],
      },
});