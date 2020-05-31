const webpack = require('webpack'); //访问 webpack 运行时(runtime)
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);

// 通过apply方法往webpack传入插件
new webpack.ProgressPlugin().apply(compiler);

compiler.run(function(err, stats) {
  // ...
});
