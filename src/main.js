// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";
import VModal from "vue-js-modal";
import InstantSearch from "vue-instantsearch";
import PrismicDOM from "prismic-dom";
import Prismic from "prismic-javascript";
import cloudinary from "cloudinary";

Vue.use(VModal);
Vue.use(InstantSearch);
Vue.config.productionTip = false;
sync(store, router);

cloudinary.config({
  cloud_name: "rfathead"
});

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);

  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
