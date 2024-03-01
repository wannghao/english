const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? '/english/'  // 在发布到 GitHub Pages 时，调整成你的项目子目录名
        : '/',
    transpileDependencies: true
})
