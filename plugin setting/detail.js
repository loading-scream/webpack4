/**
 * webpack 插件是一个具有 apply 方法的 JavaScript 对象。
 * apply 方法会被 webpack compiler 调用，
 * 并且 compiler 对象可在整个编译生命周期访问。
 */
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log('webpack 构建过程开始！');
        });
    }
}