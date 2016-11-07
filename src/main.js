import Vue from 'vue';
// import App from 'pages/App';
import VueRouter from 'vue-router';
import routes from 'scripts/router/routes';

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
// });

Vue.use(VueRouter);

// console.dir(routes); //检查:export的routes必须是数组
const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
