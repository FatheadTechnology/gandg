<template>
  <div id="home">
<!--    <div id="cta-hero-bar" v-show="showCTA">
      {{homepageContent["0"].data.marketingcta["0"].text}}
      <div id="close-hero" v-on:click="showCTA = !showCTA">
        <span> &times;</span>
      </div>
    </div>-->
    <div id="hero">
      <!--      <div id="hero-content">
        <h2>Transform Your Room</h2>
        <p>
          Our wallpaper is easy to hang and comes off clean so you can make your room match your style without the fuss. </p>
        <div id="hero-btn" class="btn primary-btn">CALL TO ACTION</div>
      </div>-->
    </div>
    <div id="hero-bar">
      <h2>  {{homepageContent["0"].data.header["0"].text}}</h2>
      <p>
       {{homepageContent["0"].data.subheader["0"].text}} </p>
    </div>
    <!--   <div class="btn-center-container">
      <div id="hero-subheader-btn" class="btn secondary-btn">CALL TO ACTION</div>
    </div>-->
    <div class="content-wrap">

      <div id="subheader-grid-container">
        <div class="product-grid">
          <div class="product-grid-item-container" v-for="(patternType, index) in homepageContent['0'].data.featured_pattern_types" :key="index">
            <div class="product-grid-item-image-container">
              <div class="product-grid-item-image" :style="{backgroundImage: 'url('+ homepageContent['0'].data.featured_pattern_types[index].pattern_image.url +')' }"></div>
            </div>
            <span class="product-grid-item-header"> {{homepageContent["0"].data.featured_pattern_types[index].pattern_header["0"].text}}</span>
            <span class="product-grid-item-subheader">{{homepageContent["0"].data.featured_pattern_types[index].pattern_explanation["0"].text}}</span>
          </div>
        </div>
      </div>

      <div class="btn-center-container">
        <router-link tag="div" to="/product-list" class="btn primary-btn" id="see-all-design-styles">
          See all design styles
        </router-link>
      </div>

      <h2>Featured Patterns, needs to call product api?</h2>
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
        <h1> {{homepageContent["0"].data.featured_artist["0"].text}}</h1>
        <p>  {{homepageContent["0"].data.featured_artist_copy["0"].text}}</p>
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showCTA: true
    };
  },
  computed:{
    ...mapGetters({
      homepageContent: 'getHomepageContentFromStore'
    })
  },
  methods : {
    ...mapActions({
      getHomepageContent: 'getHomepageContent',
    })
  },
  created() {
    this.getHomepageContent();

  },
  mounted(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
