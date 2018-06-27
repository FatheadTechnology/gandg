<template>
  <div class="product-grid video-grid">

    <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="video-wrap">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mtjIFRozEGk?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <span class="product-grid-item-header"> Video Title</span>
    </router-link>

    <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="video-wrap">
          <iframe width="25%" height="315" src="https://www.youtube.com/embed/LDnGhut8eJM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <span class="product-grid-item-header"> Video Title</span>
    </router-link>

    <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="video-wrap">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/DttfAYeS3C0?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <span class="product-grid-item-header"> Video Title</span>
    </router-link>

    <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="video-wrap">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/O5_hGBYfttk?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
      <span class="product-grid-item-header"> Video Title</span>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "MockLine",
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
