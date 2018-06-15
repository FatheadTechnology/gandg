<template>
  <div id="right-nav">
    <router-link tag="div" to="/cart" id="cart-link" >
      <img @mouseover="showCartMenu = !showCartMenu"  class="social-btn" src="../../assets/icomoon_6_icons/SVG/cart.svg" alt="Cart">
    </router-link>
    <!--v-if="showCartMenu"-->
    <div id="cart-hover-menu" v-if="showCartMenu">
      <div id="cart-hover-menu-content">
        <h1>header here</h1>
      </div>


      <img id="cart-icon-hover" src="../../assets/icomoon_6_icons/SVG/cart-hover.svg" alt="">
      <div id="circle"></div>
      <div id="connector"></div>
    </div>
    <div id="cart-hover-connector-shadow" v-if="showCartMenu"></div>
    <div id="pseudo-space" v-if="showCartMenu"  @mouseover="showCartMenu = !showCartMenu"></div>

    <router-link tag="div" to="/product-list"  id="search-link">
    <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/search3.svg" alt="Search">
    </router-link>

    <router-link tag="div" to="/favorites" id="favorites-link">
      <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/heart3.svg" alt="Favorites">
    </router-link>

    <router-link tag="div" to="/profile"  id="profile-link">
    <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/user2.svg" alt="Profile">
    </router-link>

    <h1 @click="showCartMenu = !showCartMenu">{{showCartMenu}}</h1>

    <!--
          TODO : custom btns from design
    -->
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showCartMenu : true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
