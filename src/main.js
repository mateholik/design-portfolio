import Vue from "vue";
import App from "./App.vue";
import Vuelidate from 'vuelidate'

const VueScrollTo = require('vue-scrollto');
Vue.use(Vuelidate)
Vue.use(VueScrollTo)
import router from "./router";
import "./assets/scss/style.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
