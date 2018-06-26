// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VModal from "vue-js-modal";

Vue.use(VModal);
Vue.config.productionTip = false;

router.beforeEach(function(to, from, next) {
  console.log(dataLayer);
  console.log(to)
  console.log(from)
  dataLayer.push({
    event: 'Page View',
    page: {
      path: to.fullpath
    }
  });
  dataLayer.push({
    event: 'History Change',
    page: {
      path: to.fullpath
    }
  });
  window.scrollTo(0, 0);

  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
