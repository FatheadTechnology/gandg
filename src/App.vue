<template>
  <div id="app">
    <mobile-nav></mobile-nav>
    <left-nav></left-nav>
    <div class="space-fill"></div>
    <div id="page-content">
    <router-view/>
      <global-footer></global-footer>
    </div>
    <div class="space-fill"></div>
    <right-nav></right-nav>
    <!--
    TODO: absolute position the icon in the help btn?
    -->
    <div id="help-btn">
      <img src="./assets/icomoon_6_icons/SVG/bubbles2.svg" alt="Chat Bubble">

    </div>
  </div>
</template>

<script>
  import LeftNav from './components/global/LeftNav'
  import RightNav from './components/global/RightNav'
  import MobileNav from './components/global/MobileNav'
  import GlobalFooter from './components/global/GlobalFooter'

  export default {
    name: 'App',
    components: {
      LeftNav, RightNav, MobileNav, GlobalFooter
    }
  }
</script>

<style lang="scss">
  @import "./assets/styles/main.scss";
</style>
