import _ from 'lodash';

let server = '';
if (DEV) {
  server = '/api';
}

const TOKEN = 'ax9b3QVfdbdYfHvPQKdhh6qnPT2qMYqm';
const API = {
  getbanner: `${server}/app/public/getbanner?token=${TOKEN}`,
  goods_recommend: `${server}/app/goods/recommend?token=${TOKEN}`,
  goods_getchild: `${server}/app/goods/getChild?token=${TOKEN}`,
  public_advertising: `${server}/app/public/advertising?token=${TOKEN}`,
  goods_getcates: `${server}/app/goods/getCates?token=${TOKEN}`,
  shop_recommend: `${server}/app/shop/recommend?token=${TOKEN}`
}

// _.forIn(API, (value, key) => {
//   API[key] = server + value
// })

API.TOKEN = TOKEN;

// console.dir(APIConfig);
export default API;
