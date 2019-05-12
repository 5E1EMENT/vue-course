import Vue from 'vue' //Подключение библиотеки из node modules
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './store/index'


Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000/'
Vue.http.interceptors.push(request => {
    request.headers.set('Auth', 'RAND TOKEN' + Math.random())
});

new Vue({

    el: '#app',
    store: store,
    render: h => h(App)

})

