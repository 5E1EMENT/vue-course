import Vue from 'vue' //Подключение библиотеки из node modules
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
new Vue({

  el: '#app',
  render: h => h(App),

})

