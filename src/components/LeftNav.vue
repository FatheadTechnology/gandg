<template>
  <div id="left-nav">
    <img src="../assets/guildandgrace.png" alt="Guild & Grace">

    <!--TODO : make ids that make sense for hover -->
    <div class="left-menu-item" id="wallpaper"><span>Wallpaper</span> <span> > </span></div>
    <div class="left-menu-item"><span>Collections</span> <span> > </span></div>
    <div class="left-menu-item"><span>Artists</span> <span> > </span></div>
    <div class="btn secondary-btn">
      FIND YOUR STYLE
    </div>
    <div class="left-menu-item"><span>How To</span></div>
    <div class="left-menu-item"><span>Blog</span></div>
    <div class="left-menu-item"><span>About</span></div>
    <div class="left-menu-item"><span>Support</span></div>

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
