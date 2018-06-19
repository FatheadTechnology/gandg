<template>
  <div id="product-list">
    <div class="header" id="favorites-header">

    </div>
    <div class="header-bar">
      <h2>MY FAVORITE DESIGNS COPY</h2>
    </div>
    <div class="content-wrap">
      <product-grid-line-mock></product-grid-line-mock>
      <product-grid-line-mock></product-grid-line-mock>
      <product-grid-line-mock></product-grid-line-mock>
      <product-grid-line-mock></product-grid-line-mock>

      <div class="btn-center-container">
        <div class="btn primary-btn">Load More</div>
      </div>

    </div>

  </div>

</template>

<script>
import ProductGridLineMock from "../ProductGridLineMock";

export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock
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
