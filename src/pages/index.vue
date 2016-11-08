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

<script>
  import APIConfig from 'scripts/common/api';
  export default {
    name: 'index',
    data() {
      return {
        msg: 'this is index page',
      };
    },
    created() {
      console.log(`msg is ${this.msg}`)
      console.dir(APIConfig)
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
