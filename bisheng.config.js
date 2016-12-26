const path = require('path');

module.exports = {
  lazyLoad: true,
  // root: '/bisheng-theme-one/',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc',
    'bisheng-plugin-react?lang=jsx'
  ],
  htmlTemplate: path.join(__dirname, './index.html'),
  webpackConfig(config) {
    config.resolve.alias = {
      react: path.join(__dirname, 'node_modules', 'react'),
      'react-dom': path.join(__dirname, 'node_modules', 'react-dom')
    };

    // todo:debug模式
    config.devtool = 'eval-source-map';

    return config;
  },
  pick: {
    posts(markdownData) {
      console.log(markdownData);
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
