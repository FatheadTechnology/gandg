<template>
  <div id="home">
    <div id="hero">
      <div id="hero-content">
        <h2>Transform Your Room</h2>
        <p>
          Our wallpaper is easy to hang and comes off clean so you can make your room match your style without the fuss. </p>
        <div id="hero-btn" class="btn primary-btn">CALL TO ACTION</div>
      </div>
    </div>
    <div id="cta-hero-bar">
      Memorial Day Sale: 30% Off Select Styles

    </div>
    <div class="content-wrap">

      <div id="subheader-grid-container">
        <div class="product-grid">
          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/HeatherDuttonLamaisondespapillonsNavy12x12.jpg');"></div>
            </div>
            <span class="product-grid-item-header"> vintage</span>
            <span class="product-grid-item-subheader">gritty & grungy</span>
          </div>

          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/HeatherDuttonDunesGray24x24.jpg');"></div>
            </div>
            <span class="product-grid-item-header"> Geometric</span>
            <span class="product-grid-item-subheader">patterns & lines</span>
          </div>

          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/resting_sparrows_white.jpg');"></div>
            </div>
            <span class="product-grid-item-header"> Damask</span>
            <span class="product-grid-item-subheader">traditional style</span>
          </div>

          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/deco_diamond_blue-01.jpg');"></div>
            </div>
            <span class="product-grid-item-header">Kids</span>
            <span class="product-grid-item-subheader">fun & funky</span>
          </div>
        </div>
      </div>

      <div class="btn-center-container">
        <div class="btn primary-btn">See all design styles</div>
      </div>

      <h2>Featured Patterns</h2>
      <product-grid-line-mock></product-grid-line-mock>
      <div class="btn-center-container">
        <div class="btn primary-btn">See all patterns</div>
      </div>

      <h2>Recently Viewed</h2>
      <product-grid-line-mock></product-grid-line-mock>

      <div class="btn-center-container">
        <div class="btn primary-btn">See all viewed patterns</div>
      </div>

      <div id="featured-artist-grid-container">
        <h1>Featured Artist</h1>
        <p>Multi-disciplinary designers, Wayne & Gerardine Hemingway, bring an iconic style to their wallpaper designs with a graphic style & vintage cool.</p>
        <div class="product-grid">

          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/deco_diamond_blue-01.jpg');"></div>
            </div>
            <span class="product-grid-item-header"> Some Product Name</span>
            <span class="product-grid-item-subheader">6 colors available</span>
          </div>

          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/resting_sparrows_white.jpg');"></div>
            </div>
            <span class="product-grid-item-header"> Some Product Name</span>
            <span class="product-grid-item-subheader">6 colors available</span>
          </div>

          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/HeatherDuttonDunesGray24x24.jpg');"></div>
            </div>
            <span class="product-grid-item-header"> Some Product Name</span>
            <span class="product-grid-item-subheader">6 colors available</span>
          </div>

          <div class="product-grid-item-container">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/HeatherDuttonLamaisondespapillonsNavy12x12.jpg');"></div>
            </div>
            <span class="product-grid-item-header"> Some Product Name</span>
            <span class="product-grid-item-subheader">6 colors available</span>
          </div>
        </div>

        <div class="btn-center-container">
          <div class="btn primary-btn">SEE THE COLLECTION</div>
          <a href="#">See All Artists</a>
        </div>

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
