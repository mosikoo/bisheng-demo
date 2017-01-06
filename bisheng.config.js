const path = require('path');

module.exports = {
  source: './posts',
  output: './dist',
  theme: './src/_theme',
  lazyLoad: true,
  // root: '/bisheng-theme-one/',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc',
    // './plugins/bisheng-plugin-escape',
    'bisheng-plugin-react?lang=jsx',
    './src/plugins/bisheng-plugin-copyjsx'
  ],
  htmlTemplate: path.join(__dirname, './src/index.html'),
  webpackConfig(config) {
    config.resolve.alias = {
      react: path.join(__dirname, 'node_modules', 'react'),
      'react-dom': path.join(__dirname, 'node_modules', 'react-dom')
    };

    if (process.env.NODE_ENV === 'develop') {
      // debug模式
      config.devtool = 'eval-source-map';
    }

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
