<template>
  <div class="product-grid">

    <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="product-grid-item-image" style="background-image: url('https://assets.fathead.com/swipe-patterns/deco_diamond_blue-01.jpg');"></div>
      </div>
      <span class="product-grid-item-header"> Some Product Name</span>
      <span class="product-grid-item-subheader">6 colors available</span>
    </router-link>

    <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="product-grid-item-image"  style="background-image: url('https://assets.fathead.com/swipe-patterns/resting_sparrows_white.jpg');"></div>
      </div>
      <span class="product-grid-item-header"> Some Product Name</span>
      <span class="product-grid-item-subheader">6 colors available</span>
    </router-link>

  <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="product-grid-item-image"  style="background-image: url('https://assets.fathead.com/swipe-patterns/HeatherDuttonDunesGray24x24.jpg');"></div>
      </div>
      <span class="product-grid-item-header"> Some Product Name</span>
      <span class="product-grid-item-subheader">6 colors available</span>
  </router-link>

    <router-link tag="div" to="/pdp" class="product-grid-item-container">
      <div class="product-grid-item-image-container">
        <div class="product-grid-item-image"  style="background-image: url('https://assets.fathead.com/swipe-patterns/HeatherDuttonLamaisondespapillonsNavy12x12.jpg');"></div>
      </div>
      <span class="product-grid-item-header"> Some Product Name</span>
      <span class="product-grid-item-subheader">6 colors available</span>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: 'Mock Line',
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
