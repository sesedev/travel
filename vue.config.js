// vue.config.js
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@s/mixins/flex";@import "@s/var.scss";`
      }
    },
  },
  chainWebpack: config => {
    // 别名路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@i', resolve('src/assets/img'))
      .set('@s', resolve('src/assets/css'))
      .set('@j', resolve('src/assets/js'))

    return config;
  }
};
