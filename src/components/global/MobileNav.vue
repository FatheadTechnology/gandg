<template>
  <div id="mobile-nav">
    <img src="../../assets/icomoon_6_icons/SVG/menu.svg" alt="menu" @click="openMenu" v-show="!showMenu">
    <img src="../../assets/icomoon_6_icons/SVG/cross.svg" alt="close" v-show="showMenu" @click="closeMenu">
    <router-link to="/">
      <img src="../../assets/fakegg.svg" alt="home" @click="closeMenu">
    </router-link>
    <router-link to="/cart">
      <img src="../../assets/icomoon_6_icons/SVG/cart.svg" alt="cart" @click="closeMenu">
    </router-link>
    <transition name="fade">

      <div id="mobile-menu" v-show="showMenu">

        <div class="mobile-menu-bar" @click="closeMenu">
          <router-link to="/cart">
            <img src="../../assets/icomoon_6_icons/SVG/cart.svg" alt="cart">
          </router-link>
          <router-link to="/favorites">
            <img src="../../assets/icomoon_6_icons/SVG/heart3.svg" alt="Favorites">
          </router-link>
          <router-link to="/profile">
            <img src="../../assets/icomoon_6_icons/SVG/user2.svg" alt="Profile">
          </router-link>
        </div>
        <div class="mobile-menu-content-wrap">

          <div class="left-menu-item">
            <div class="search-bar">
              <input type="text"><img src="../../assets/icomoon_6_icons/SVG/search3.svg" alt="Search">
            </div>
          </div>
          <div class="link-list" @click="closeMenu">
            <div class="left-menu-item" id="wallpaper">
              <span>Wallpaper</span>
            </div>
            <div class="left-menu-item" id="collections">
              <span>Collections</span>
            </div>
            <div class="left-menu-item" id="artists">
              <span>Artists</span>
            </div>
            <router-link tag="div" to="/find-your-style" class="btn secondary-btn" id="find-your-style">
              FIND YOUR STYLE
            </router-link>
            <router-link tag="div" to="/how-to" class="left-menu-item" id="how-to-link">
              <span>How To</span>
            </router-link>
            <router-link tag="div" to="/blog" class="left-menu-item" id="blog-link">
              <span>Blog</span>
            </router-link>
            <router-link tag="div" to="/about-us" class="left-menu-item" id="about-us-link">
              <span>About Us</span>
            </router-link>
          </div>
        </div>
      </div>
    </transition>
    <!--
    <img src="../assets/hamburger.png" alt="Hamburger">


  <img src="../assets/logo.png" alt="Guild & Grace">
    <img src="../assets/cart.png" alt="Cart">-->
    <!--
TODO: make this all svg goodness
-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    closeMenu() {
      this.showMenu = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
