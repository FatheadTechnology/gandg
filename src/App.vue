<template>
  <div id="app">
    <div id="site-wrap">

      <div id="global-grid">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <mobile-nav></mobile-nav>
        <!--
    <left-nav></left-nav>
-->
        <top-nav></top-nav>
        <div class="space-fill left"></div>
        <div id="page-content">
          <transition name="fade">

            <router-view/>
          </transition>
          <global-footer></global-footer>
        </div>
        <div class="space-fill right"></div>
        <right-nav></right-nav>
        <!--
    TODO: absolute position the icon in the help btn?
    -->
        <div id="help-btn">
          <img src="./assets/icomoon_6_icons/SVG/bubbles2.svg" alt="Chat Bubble">

        </div>
        <div id="breakpoint-teller"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from "./components/global/LeftNav";
import TopNav from "./components/global/TopNav";
import RightNav from "./components/global/RightNav";
import MobileNav from "./components/global/MobileNav";
import GlobalFooter from "./components/global/GlobalFooter";

export default {
  name: "App",
  components: {
    LeftNav,
    RightNav,
    TopNav,
    MobileNav,
    GlobalFooter
  }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
