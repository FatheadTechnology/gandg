import Vue from 'vue'
import Router from 'vue-router'

import AboutUs from '@/components/pages/AboutUs'
import BlogHome from '@/components/pages/BlogHome'
import BlogPost from '@/components/pages/BlogPost'
import Cart from '@/components/pages/Cart'
import Favorites from '@/components/pages/Favorites'
import FAQ from '@/components/pages/FAQ'
import FindYourStyle from '@/components/pages/FindYourStyle'
import Home from '@/components/pages/Home'
import HowToHome from '@/components/pages/HowToHome'
import HowToVideo from '@/components/pages/HowToVideo'
import OrderHistory from '@/components/pages/OrderHistory'
//TODO : do we need this just for anon orders?
import PDP from '@/components/pages/PDP'
import ProductList from '@/components/pages/ProductList'
import Profile from '@/components/pages/Profile'
import SearchResults from '@/components/pages/SearchResults'
//TODO : this is just the product list with variables?

Vue.use(Router)

//TODO : add in dynamic links
export default new Router({
  routes: [
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUs,
      meta: {gtm: 'About Us'}
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogHome,
      meta: {gtm: 'Blog Home'}
    },
    {
      path: '/blog-post',
      name: 'Blog Post',
      component: BlogPost,
      meta: {gtm: 'Blog Post'}
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {gtm: 'Cart'}
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites,
      meta: {gtm: 'Favorites'}
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
      meta: {gtm: 'FAQ'}
    },
    {
      path: '/find-your-style',
      name: 'Find Your Style',
      component: FindYourStyle,
      meta: {gtm: 'Find Your Style'}
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {gtm: 'Homepage'}
    },
    {
      path: '/how-to',
      name: 'How To',
      component: HowToHome,
      meta: {gtm: 'How To'}
    },
    {
      path: '/how-to-video',
      name: 'How To Video',
      component: HowToVideo,
      meta: {gtm: 'How To Video'}
    },
    {
      path: '/order-history',
      name: 'Order History',
      component: OrderHistory,
      meta: {gtm: 'Order History'}
    },
    {
      path: '/pdp',
      name: 'Product Description Page',
      component: PDP,
      meta: {gtm: 'PDP'}
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: ProductList,
      meta: {gtm: 'Product List'}
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {gtm: 'Profile'}
    },
    {
      path: '/search-results',
      name: 'Search Results',
      component: SearchResults,
      meta: {gtm: 'Homepage'}
    }
  ]
})
