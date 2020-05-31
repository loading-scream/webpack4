module.exports = {
    module: {
        // module.rules 允许你在 webpack 配置中指定多个 loader。
        rules: [
            // loader旨于将一切文件编译成 webpack 期望的 JavaScript 以供打包
            {
                // 匹配规则, 正则或字符串
                test: /\.css$/,
                // 对应使用的loader
                use: [
                    // loader执行方式: 逆序执行并解析递值, 类似管道
                    // 从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        // loader配置
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    }
};