module.exports = {
  home: '/',
  routes: [{
    path: '/',
    component: './template/Archive'
  }, {
    path: '/posts/:post',
    component: './template/Post'
  }]
};
