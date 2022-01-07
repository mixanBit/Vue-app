import Vue from 'vue'
import App from './App.vue'
import Example from './Example.vue'



Vue.config.productionTip = false

Vue.component('app-example', Example)


new Vue({
  render: h => h(App),
}).$mount('#app')
