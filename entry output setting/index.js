const path = require('path');

module.exports = {
    // 入口 对象语法 多页应用
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    },
    // 出口 统一输出 
    output: {
        path: path.resolve(__dirname, 'dist'), //输出路径
        filename: `[name]-[hash:6].js`, //命名规则
        chunkFilename: `[name]-[chunkhash:6].js`, //命名规则
        publicPath: 'http://cdn.example.com' //CDN 域名
    }
    /**
     * 使用 optimization.splitChunks 为页面间共享的应用程序代码创建 bundle。
     * 由于入口起点增多，多页应用能够复用入口起点之间的大量代码/模块，
     * 从而可以极大地从这些技术中受益。
     */
};

/**
 * 依赖文件模块化
 * ES2015 import 语句
 * css/sass/less 文件中的 @import 语句。
 * 样式(url(...))或 HTML 文件(<img src=...>)中的图片链接 
 * 均支持开箱即用
 */