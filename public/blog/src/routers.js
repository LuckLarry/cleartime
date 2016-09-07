export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('./views/page'),
    isindex: true,
  },
  '/welcome': {
    name: 'welcome',
    component: require('./views/welcome'),
  },
  '/post/:id': {
    name: 'post',
    component: require('./views/post'),
    isPost: true,
  },
  '/me': {
    name: 'me',
    component: require('./views/me'),
    isMe: true,
  },
  '*': {
    component: require('./views/404'),
  },
});

