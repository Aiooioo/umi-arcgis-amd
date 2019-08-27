// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  chainWebpack(config) {
    config.output.libraryTarget('amd');
    config.externals([
      /^esri\//,
      // function(context, request, callback) {
      //   // Every module prefixed with "global-" becomes external
      //   // "global-abc" -> abc
      //   if (
      //     /^dojo/.test(request) ||
      //     /^dojox/.test(request) ||
      //     /^dijit/.test(request) ||
      //     /^esri\//.test(request)
      //   ) {
      //     return callback(null, 'amd ' + request);
      //   }
      //   callback();
      // },
    ]);
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        dynamicImport: false,
        title: 'umi-arcgis-amd',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
