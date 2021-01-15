/* eslint-disable */
/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

/**
 * @typedef { import("webpack-dev-server").Configuration } DevServerConfig
 */

/**
 * @typedef { import("webpack-chain") } ChainConfig
 */

const path = require("path");

const isPro = process.env.NODE_ENV === "production";

/** @type {DevServerConfig} */
const devServer = {
  hot: true,
  open: true
};

function addStyleResource(/** @type {import("webpack-chain").Rule}*/ rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/global.less")]
    });
}

function setCssProcessors(/** @type {ChainConfig} */ config) {
  const types = ["vue-modules", "vue", "normal-modules", "normal"];
  types.forEach(type =>
    addStyleResource(config.module.rule("less").oneOf(type))
  );
}

/** @type {Options} */
const config = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: !isPro,
  chainWebpack: config => {
    setCssProcessors(config);
    if (isPro) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },
  configureWebpack(config) {
  },
  devServer
};

module.exports = config;
