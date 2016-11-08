<template>
  <div class="index">
    <router-view></router-view>
    <h1>{{ msg }}</h1>
    <div>
      <router-link to="/shops">商家</router-link>
      <router-link to="/services">服务</router-link>
      <router-link to="/user">我的</router-link>
    </div>
  </div>
</template>

<script type="text/babel">
  import API from 'scripts/common/api';
  import axios from 'axios';

  export default {
    name: 'index',
    data() {
      return {
        msg: 'this is index page',
      };
    },
    created() {
      console.log(`msg is ${this.msg}`)
      this.loaddata()
    },
    methods: {
      showdata(res1, res2, res3, res4, res5) {
        debugger
        console.log(res1);
      },
      loaddata() {
        console.dir(API)
//      const p = {
//        params: {
//          token: API.TOKEN
//        }
//      }

        const getgoodsrecommend = axios.get(API.goods_recommend, {
          params: {
            city: '海口'
          }
        });
        const getbanner = axios.get(API.getbanner);
        const getgoodschild = axios.get(API.goods_getchild);
        const getadvertising = axios.get(API.public_advertising);
        const getgoodscates = axios.get(API.goods_getcates, {
          params: {
            group: '推荐'
          }
        });
        const getshoprecommend = axios.get(API.shop_recommend, {
          params: {
            city: '海口'
          }
        });
        const reqs = [getbanner, getgoodschild, getadvertising, getgoodscates, getshoprecommend];
        axios.all(reqs).then(axios.spread((res1, res2, res3, res4, res5)=> {
          console.log('reqs ok!')
          this.showdata(res1.data, res2.data, res3.data, res4.data, res5.data)
        }))
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    /*color: #42b983;*/
    color: #7f7f7f;
  }
</style>
