import Vue from 'vue';
import App from 'pages/App';
import VueRouter from 'vue-router';

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
// });

Vue.use(VueRouter);
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/', component: App },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
