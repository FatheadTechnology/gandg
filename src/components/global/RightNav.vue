<template>
  <div id="right-nav">
    <router-link tag="div" to="/cart" id="cart-link">
      <img @mouseover="showCartMenu = !showCartMenu" class="social-btn" src="../../assets/icomoon_6_icons/SVG/cart.svg"
           alt="Cart">
    </router-link>
    <!--v-if="showCartMenu"-->
    <div id="cart-hover-menu" v-if="showCartMenu">
      <div id="cart-hover-menu-content">
        <div id="cart-hover-menu-header">Order Summary</div>

        <div class="cart-preview-line" v-for="i in 4">
          <div class=" cart-preview-item">

            <div class="cart-preview-item-image-container">
              <div class="cart-preview-item-image"></div>
            </div>
            <div class="cart-preview-item-details">
              <h4>Product Name</h4>
              <span>some thing here</span>
              <span>Donec id elit non mi metus.</span>
              <span>some thing here</span>
              <span>TODO : ADD FREE SQUEEGEE & KNIFE</span>
            </div>

          </div>
        </div>

        <div id="cart-hover-menu-footer">Total : $999</div>

      </div>
      <div class="btn-center-container cart-preview-btn">
        <div class="btn primary-btn">Check Out</div>
        <a href="#">My Shopping Cart</a>
      </div>

      <img id="cart-icon-hover" src="../../assets/icomoon_6_icons/SVG/cart-hover.svg" alt="">
      <div id="circle"></div>
      <div id="connector"></div>
    </div>
    <div id="cart-hover-connector-shadow" v-if="showCartMenu"></div>
    <div id="pseudo-space" v-if="showCartMenu" @mouseover="showCartMenu = !showCartMenu"></div>

    <router-link tag="div" to="/product-list" id="search-link">
      <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/search3.svg" alt="Search">
    </router-link>

    <router-link tag="div" to="/favorites" id="favorites-link">
      <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/heart3.svg" alt="Favorites">
    </router-link>

    <div @click="profileOrLogin()" id="profile-link">
      <img class="social-btn" src="../../assets/icomoon_6_icons/SVG/user2.svg" alt="Profile">
    </div>
    {{userEmail}}
    <div>
    </div>

    <!--
          TODO : custom btns from design
    -->
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        showCartMenu: false,
        userEmail: null
      };
    },
    methods: {
      profileOrLogin: function () {
        let user = firebase.auth().currentUser;

        if (user) {
          console.log('user', user)
          this.userEmail = user.email;
          this.$router.replace('profile2')
          console.log('logged in')
        } else {
          console.log(this)
          this.userEmail = null;
          this.$router.replace('login')
          console.log('not logged in')
        }

        /*      firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
         console.log(this)
         this.$router.replace('profile2')
         console.log('logged in')
         } else {
         console.log(this)

         this.$router.replace('login')
         console.log('not logged in')
         }
         });*/
      }
    },
    mounted () {
      let user = firebase.auth().currentUser;
      if (user) {
        this.userEmail = user.email;
      } else {
        this.userEmail = null;
      }
    },
    watch: {
      $route (to, from){
        let user = firebase.auth().currentUser;
        if (user) {
          this.userEmail = user.email;
        } else {
          this.userEmail = null;
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
