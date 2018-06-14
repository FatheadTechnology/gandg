<template>
  <div id="how-to-home">
    <h1>How To</h1>
    <p>Watch the video or follow our step-by-step instructions of how to apply and remove your removable wallpaper.</p>
    <div class="video-wrap">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_Lvp6Gl9lUY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <h1>How to Hang Removable Wallpaper</h1>
    <p>Lorem ipsum dolor sit amet, eros mentitum duo ea. Labitur officiis et sed. Soluta maiorum an sea. Eum nuhil persius te. Impetus nesessitatibus id, cu inermis assueverit est.</p>
    <div class="btn-center-container">
      <div class="btn primary-btn">Step-by-Step Instructions</div>
    </div>
    <h1>More How-to Videos</h1>
    <video-grid></video-grid>
    <video-grid></video-grid>
    <br>
    <br>
    <br>

    <h2>Recently Viewed</h2>
    <product-grid-line-mock></product-grid-line-mock>

    <div class="btn-center-container">
      <div class="btn primary-btn">See all viewed patterns</div>
    </div>
  </div>

</template>

<script>
import ProductGridLineMock from "../ProductGridLineMock";
import VideoGrid from "../VideoGrid";

export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock,
    VideoGrid
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
