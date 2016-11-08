const routes = [
  {
    path: '/',
    component: require('pages/index'),
  },
  { path: '/services', component: require('pages/service-index') },
  { path: '/shops', component: require('pages/shop-index') },
  { path: '/user', component: require('pages/user-index') },
  { path: '/login', component: require('pages/login') }
];

export default routes;
