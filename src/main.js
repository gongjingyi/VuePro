import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
import itemList from 'components/sportItem/itemList.vue';
import item from 'components/sportItem/item.vue';
import edit from 'components/sportItem/edie.vue';
import add from 'components/sportItem/add.vue';
import test from 'components/sportItem/test.vue';
import login from 'components/sportItem/login.vue';
import register from 'components/sportItem/register.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter({
  routes: [
    {path: '/goods', component: goods},
    {
      path: '/ratings',
      components: {
        default: ratings,
        ratings: ratings
      }
    },
    {path: '/seller', component: seller},
    {path: '/test', component: test},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/itemList', component: itemList},
    /* path: '/itemList', components: {default: itemList}}, */
    {path: '/item', components: {default: item, item: item}},
    {path: '/edit', components: {default: edit, edit: edit}},
    {path: '/add', components: {default: add, add: add}},
    {path: '/app', component: App}
  ]
});
/* eslint-disable no-new */
new Vue({
  router,
  /* template: '<App/>', */
  components: {App}
}).$mount('#ap');
Vue.prototype.timestampTransform = function (timeSend, dayName) {
  var resultStr;
  var dayNm = '';
  var date = new Date(timeSend);
  var year = date.getYear() + 1900;
  var month = date.getMonth();
  var day = date.getDate();
  if (dayName === 'todayList') {
    dayNm = '今天';
  } else if (dayName === 'tomorrowList') {
    dayNm = '明天';
  } else {
    dayNm = '后天';
  }
  resultStr = year + '-' + month + '-' + day + '( ' + dayNm + ' )  ';
  return resultStr;
};
router.push('/item');
/* router.push('/test'); */

