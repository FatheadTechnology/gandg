<template>
  <div id="product-list">
    <div class="header" id="product-list-header">

    </div>
    <div class="header-bar">
      <h2>CATEGORY NAME OR GENERAL TEXT (TODO : 6/18 PORT)</h2>
    </div>

<!--
TODO : ADD IN FILTERS
-->
    <div class="btn-center-container">
      <div class="btn primary-btn">TODO FILTERS HERE</div>
    </div>

    <product-grid-line-mock></product-grid-line-mock>
    <product-grid-line-mock></product-grid-line-mock>
    <product-grid-line-mock></product-grid-line-mock>
    <product-grid-line-mock></product-grid-line-mock>

    <div class="btn-center-container">
      <div class="btn primary-btn">Load More</div>
    </div>

    <h2>Recently Viewed</h2>
    <product-grid-line-mock></product-grid-line-mock>

    <!--
    TODO : Make Global Btn Component that takes in button type and where to
    -->
    <div class="btn-center-container">
      <div class="btn primary-btn">See all viewed patterns</div>
    </div>


  </div>


</template>

<script>
  import ProductGridLineMock from '../ProductGridLineMock'

  export default {
    name: 'HelloWorld',
    components: {
      ProductGridLineMock
    },
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
