const path = require('path');
const webpack = require('webpack');

module.exports = {
  lazyLoad: true,
  // root: '/bisheng-theme-one/',
  plugins: [
    'bisheng-plugin-react?lang=jsx'
  ],
  htmlTemplate: path.join(__dirname, './index.html'),
  webpackConfig(config) {
    // console.log(config.plugins);
    // config.plugins.push(new webpack.ProvidePlugin({
    //   React: 'React', react: 'React', 'window.react': 'React', 'window.React': 'React'
    // }));
    // config.externals = {
    //   react: 'window.React',
    //   'react-dom': 'window.ReactDOM'
    // };
    return config;
  },
  pick: {
    posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: '11'
      };
    },
    lists(markdownData) {
      return {
        name: markdownData.meta.title,
        chineseName: markdownData.meta.name,
        parent_id: markdownData.meta.parent_id
      };
    }
  }
};
