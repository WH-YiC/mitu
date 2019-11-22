import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/css/swiper.css'
import 'swiper/js/swiper.min'
// import gg from'../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
let bus = new Vue()
Vue.prototype.$bus = bus
Vue.config.productionTip = false
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
