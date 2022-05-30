import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false

// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
  vuetify, router,
  icons: {
    iconfont: 'fa4',
  },
  render: h => h(App)
}).$mount('#app')
