// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";
import VModal from "vue-js-modal";
import InstantSearch from "vue-instantsearch";
import cloudinary from "cloudinary";
import firebase from 'firebase';

Vue.use(VModal);
Vue.use(InstantSearch);
Vue.config.productionTip = false;
sync(store, router);

cloudinary.config({
  cloud_name: "rfathead"
});

let app;
let config = {
  apiKey: 'AIzaSyC18-Jisbl4qldOnksO7xTsWCCC8bUjevo',
  authDomain: 'evolution-883a5.firebaseapp.com',
  databaseURL: 'https://evolution-883a5.firebaseio.com',
  projectId: 'evolution-883a5',
  storageBucket: 'evolution-883a5.appspot.com',
  messagingSenderId: '742293904721'
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      store,
      router,
      template: '<App/>',
      components: { App }
    });
  }
});
