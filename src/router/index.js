import Vue from "vue";
import Router from "vue-router";

import AboutUs from "@/components/pages/AboutUs";
import Artists from "@/components/pages/Artists";
import BlogHome from "@/components/pages/BlogHome";
import BlogPost from "@/components/pages/BlogPost";
import Cart from "@/components/pages/Cart";
import Favorites from "@/components/pages/Favorites";
import FAQ from "@/components/pages/FAQ";
import Glossary from "@/components/pages/Glossary";
import TermsAndConditions from "@/components/pages/TermsAndConditions";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import Careers from "@/components/pages/Careers";
import FindYourStyle from "@/components/pages/FindYourStyle";
import Home from "@/components/pages/Home";
import HowToHome from "@/components/pages/HowToHome";
import HowToVideo from "@/components/pages/HowToVideo";
import OrderHistory from "@/components/pages/OrderHistory";
import Login from "@/components/firebase/Login";
import ProfileFirebase from "@/components/firebase/Profile";
import SignUp from "@/components/firebase/SignUp";

//TODO : do we need this just for anon orders?
import PDP from "@/components/pages/PDP";
import ProductList from "@/components/pages/ProductList";
import Profile from "@/components/pages/Profile";
import SearchResults from "@/components/pages/SearchResults";
//TODO : this is just the product list with variables?

import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    /*   {
      path: "/blog",
      name: "Blog",
      component: BlogHome
    },
    {
      path: "/blog-post",
      name: "Blog Post",
      component: BlogPost
    },*/
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile2',
      name: 'Profile',
      component: ProfileFirebase
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: "/artists",
      name: "Artists",
      component: Artists
    },
    {
      path: "/about-us",
      name: "About Us",
      component: AboutUs
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: Favorites
    },
    {
      path: "/faq",
      name: "FAQ",
      component: FAQ
    },
    {
      path: "/glossary",
      name: "Glossary",
      component: Glossary
    },
    {
      path: "/terms-and-conditions",
      name: "TermsAndConditions",
      component: TermsAndConditions
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy
    },
    // {
    //   path: "/careers",
    //   name: "Careers",
    //   component: Careers
    // },
    {
      path: "/find-your-style",
      name: "Find Your Style",
      component: FindYourStyle
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/how-to",
      name: "How To",
      component: HowToHome
    },
    {
      path: "/how-to-video",
      name: "How To Video",
      component: HowToVideo
    },
    {
      path: "/order-history",
      name: "Order History",
      component: OrderHistory
    },
    {
      path: "/product/:pattern/:colorway?/:material?/:size?",
      //:licensed?
      // https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js
      name: "PDP",
      component: PDP
    },
    {
      //TODO: Add search= before searchTerm
      path: "/product-list/:landingId?/:searchTerm?",
      name: "product-list",
      component: ProductList
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/search-results",
      name: "Search Results",
      component: SearchResults
    }
  ]
});


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    /*  next('login')*/
    next();
  } else if (!requiresAuth && currentUser) {
    /* next('hello')*/
    next();
  } else {
    next();
  }
});

export default router;


