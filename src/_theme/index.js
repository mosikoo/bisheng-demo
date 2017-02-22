const rootPath = '/bisheng-demo/dist/';
// const rootPath = '/';

module.exports = {
  rootPath,
  routes: [{
    path: '/',
    component: './template/Archive'
  }, {
    path: '/posts/:post',
    component: './template/Post'
  }]
};
