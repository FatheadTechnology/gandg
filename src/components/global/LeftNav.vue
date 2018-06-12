<template>
  <div id="left-nav">
    <router-link tag="div" to="/" id="home-link">
    <img src="../../assets/guildandgrace.png" alt="Guild & Grace">
    </router-link>

    <div class="left-menu-item" id="wallpaper"><span>Wallpaper</span> <span> > </span></div>
    <div class="left-menu-item" id="collections"><span>Collections</span> <span> > </span></div>
    <div class="left-menu-item" id="artists"><span>Artists</span> <span> > </span></div>
    <router-link tag="div" to="/find-your-style" class="btn secondary-btn" id="find-your-style">
      FIND YOUR STYLE
    </router-link>
    <router-link tag="div" to="/how-to" class="left-menu-item" id="how-to-link"><span>How To</span> </router-link>
    <router-link tag="div" to="/blog" class="left-menu-item" id="blog-link"><span>Blog</span>  </router-link>
    <router-link tag="div" to="/about-us" class="left-menu-item" id="about-us-link"><span>About</span>  </router-link>


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
