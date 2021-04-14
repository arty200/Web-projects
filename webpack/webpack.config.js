const webpack = require('webpack')
const modoDev = process.env.Node_ENV !== 'production'
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/principal.js',
    output: {
        filename:'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new miniCssExtractPlugin({
            filename:"estilo.css"
        })
    ],
    devServer: {
        contentBase: "./public",
        port:9000
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache:true,
                parallel:true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use:[
                //miniCssExtractPlugin.loader,
                'style-loader',//Adiciona CSS a DOM injetando a tag <style>
                'css-loader',//interpreta @import, url()
                'sass-loader',
            ]
        }, {
            test:/\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}