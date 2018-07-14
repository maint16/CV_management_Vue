import Vue from 'vue'
import App from './App.vue'
const uiv = require('uiv');
Vue.use(uiv)

import '../node_modules/bootstrap3/dist/css/bootstrap.css';
import 'expose-loader?$!expose-loader?jQuery!jquery';
import '../node_modules/bootstrap3/dist/js/bootstrap';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
