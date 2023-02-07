const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === "production" ? "dist" : "/",
  outputDir: "dist",
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
})
