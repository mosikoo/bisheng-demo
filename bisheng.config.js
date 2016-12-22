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
    config.resolve.alias = {
      'react': path.join(__dirname, 'node_modules', 'react'),
      'react-dom': path.join(__dirname, 'node_modules', 'react-dom')
    };
    
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
