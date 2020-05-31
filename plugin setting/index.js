// loader只是在匹配条件下协助编译文件
// 而插件更强大 为全程打包提供polyfill
// 由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。

const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件

module.exports = {
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};