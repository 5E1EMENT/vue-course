import Vue from 'vue' //Подключение библиотеки из node modules
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/'

Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'Rand token ' + Math.round(Math.random() * 10))
})
new Vue({

  el: '#app',
  render: h => h(App),

})

