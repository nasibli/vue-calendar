import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

Vue.use(VueI18n)
Vue.config.productionTip = false

import messages from './config/translations';

const i18n = new VueI18n({
  locale: 'ru',
  messages,
})

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')
