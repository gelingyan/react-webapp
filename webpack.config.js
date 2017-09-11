/**
 * Created by gelingyan on 2017/9/9.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/index.jsx", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        port: 8082
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less']
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.(css|less)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }]
            })
        }, {
            test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
            loader: 'url-loader?limit=5000' // 限制大小小于5k
        }]
    },
    plugins: [
        new webpack.BannerPlugin('design by gelingyan'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new OpenBrowserPlugin({     // 打开页面
            url: 'http://localhost:8082'
        }),
    //    new webpack.optimize.DedupePlugin()
    ]
};
