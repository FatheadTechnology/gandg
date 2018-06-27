import Vue from "vue";
import Router from "vue-router";

import AboutUs from "@/components/pages/AboutUs";
import BlogHome from "@/components/pages/BlogHome";
import BlogPost from "@/components/pages/BlogPost";
import Cart from "@/components/pages/Cart";
import Favorites from "@/components/pages/Favorites";
import FAQ from "@/components/pages/FAQ";
import FindYourStyle from "@/components/pages/FindYourStyle";
import Home from "@/components/pages/Home";
import HowToHome from "@/components/pages/HowToHome";
import HowToVideo from "@/components/pages/HowToVideo";
import OrderHistory from "@/components/pages/OrderHistory";
//TODO : do we need this just for anon orders?
import PDP from "@/components/pages/PDP";
import ProductList from "@/components/pages/ProductList";
import Profile from "@/components/pages/Profile";
import SearchResults from "@/components/pages/SearchResults";
//TODO : this is just the product list with variables?

Vue.use(Router);

//TODO : add in dynamic links
export default new Router({
  mode: "history",
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
      //https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js
      name: "PDP",
      component: PDP
    },
    {
      path: "/product-list/:landingId?",
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
