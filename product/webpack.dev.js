const baseConfig = require("./webpack.config");
const merge = require("webpack-merge");
const serve = require("../server/server.js");

module.exports = merge(baseConfig, {
  devtool: "#eval-source-map",
  devServer: {
    hot: true,
    compress: true,
    port: 9000,
    open: false,
    proxy: {
      // "*": "http://localhost:18888",
      '/api': {
        target: 'http://localhost:18888',
        pathRewrite: { '^/api': '' },
      },
    },
    before() {
      serve.run(18888, "n");
    }
  }
});
