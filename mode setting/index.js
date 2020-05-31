module.exports = {
    mode: 'development' //production（默认）
    /**选项
        development
        会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。
        启用 NamedChunksPlugin 和 NamedModulesPlugin。

        production
        会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。
        启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。

        none
        退出任何默认优化选项 

        !!反过来设置 NODE_ENV 并不会自动地设置 mode
    */
};