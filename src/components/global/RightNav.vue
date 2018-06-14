<template>
  <div id="right-nav">
    <router-link tag="div" to="/cart" id="cart-link">
      <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/cart.svg" alt="Cart">
    </router-link>

    <router-link tag="div" to="/product-list"  id="search-link">
    <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/search3.svg" alt="Search">
    </router-link>

    <router-link tag="div" to="/favorites" id="favorites-link">
      <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/heart3.svg" alt="Favorites">
    </router-link>

    <router-link tag="div" to="/profile"  id="profile-link">
    <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/user2.svg" alt="Profile">
    </router-link>
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
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
