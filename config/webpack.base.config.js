import config from './config.js'
import express from 'express'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'

const paths = config.utils_paths
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    target: 'web',
    entry: {
        app: [
            paths.src('index.tsx'),
        ]
    },
    output: {
        filename: "bundle.js",
        path: paths.dist()
    },

    context: path.base,
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin(config.globals),
        new HtmlWebpackPlugin({
            template: paths.src('index.html'),
            hash: false,
            favicon: paths.base('static/favicon.ico'),
            inject: 'body',
            minify: {
                collapseWhitespace: true
            },
            chunksSortMode: 'dependency',
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],

    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: paths.dist(),
        historyApiFallback: true,
        inline: false,
        overlay: true,
        quiet: false,
        hot: true,
        before(app) {
            app.use(express.static(paths.base('static')))
        }
    },

    resolve: {
        modules: [paths.base('node_modules')],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.woff(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
            { test: /\.otf(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
            { test: /\.ttf(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
            { test: /\.svg(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader?limit=8192' },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: []
                        }
                    }
                ],
            }
        ]
    },
};
