module.exports = {
  home: '/',
  sitename: 'Home Page',
  // tagline: 'The one theme for bisheng',
  // navigation: [{
  //   title: 'BiSheng',
  //   link: 'https://github.com/benjycui/bisheng',
  // }],
  // footer: 'Copyright and so on...',
  // hideBisheng: true,
  github: 'https://github.com/benjycui/bisheng-theme-one',
  routes: [{
    path: '/',
    component: './template/Archive'
  }, {
    path: '/posts/:post',
    component: './template/Post'
  }, {
    path: '/tags',
    component: './template/TagCloud',
    dataPath: '/'
  }],
  footer: 'footer',
  categorys: [
    {
      name: 'base',
      id: 0
    },
    {
      name: 'Business',
      id: 1
    }
  ]
};
