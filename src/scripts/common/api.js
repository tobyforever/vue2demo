import _ from 'lodash';

let server = '';
if (DEV) {
  server = '/api';
}

const path = {
  getbanner: '/app/public/getbanner',
  goods_recommend: '/app/goods/recommend',
  goods_getchild: '/app/goods/getChild',
  public_advertising: '/app/public/advertising',
  goods_getcates: '/app/goods/getCates',
  shop_recommend: '/app/shop/recommend'
}

const APIConfig = {}

_.forIn(path, (key, value) => {
  APIConfig[key] = value
})

console.dir(APIConfig);
export default APIConfig;
