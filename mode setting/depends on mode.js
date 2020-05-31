// 如果要根据 webpack.config.js 中的 mode 变量更改打包行为，则必须将配置导出为一个函数，而不是导出为一个对象：

var config = {
    entry: './app.js'
    //...
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        //...
    }

    return config;
};