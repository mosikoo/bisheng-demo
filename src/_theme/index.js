// const rootPath = '/cgfe/cg-react-docs/dist/';
const rootPath = '/';

module.exports = {
  rootPath,
  routes: [{
    path: rootPath,
    component: './template/Archive'
  }, {
    path: `${rootPath}posts/:post`,
    component: './template/Post'
  }]
};
