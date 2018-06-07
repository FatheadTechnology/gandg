<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="space-fill"></div>
    <router-view/>
    <div class="space-fill"></div>
    <right-nav></right-nav>
  </div>
</template>

<script>
  import LeftNav from './components/LeftNav'
  import RightNav from './components/RightNav'

  export default {
    name: 'App',
    components: {
      LeftNav, RightNav
    }
  }
</script>

<style lang="scss">
  @import "./assets/styles/main.scss";
</style>
