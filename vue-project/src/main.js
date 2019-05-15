import Vue from 'vue' //Подключение библиотеки из node modules
import App from './App.vue'
import store from './store'

new Vue({

  el: '#app',
  store,
  render:h => h(App)

})

