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
    <div id="help-btn">?</div>
  </div>
</template>

<script>
  import LeftNav from './components/LeftNav'
  import RightNav from './components/RightNav'
  import MobileNav from './components/MobileNav'
  import GlobalFooter from './components/GlobalFooter'

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
