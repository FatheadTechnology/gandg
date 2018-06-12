<template>
  <div id="pdp">
    <div class="pdp-top-content" id="pdp-image-container">
      <div class="maintain-square-image-container" id="active-image">
        <div class="maintain-square-image">
        </div>
      </div>
      <!-- TODO : on mobile there will be no active image, just a scroll through of the image choices?
            TODO: on mobile maybe use a totally different container???
      -->

      <div class="maintain-square-image-container pdp-image-choice">
        <div class="maintain-square-image">

        </div>
      </div>
      <div class="maintain-square-image-container pdp-image-choice">
        <div class="maintain-square-image">

        </div>
      </div>
      <h4>TODO : MAKE SLIDER ON MOBILE</h4>

    </div>

    <div classs="pdp-top-content" id="pdp-purchase-container">
      <h1>Majestic Teal</h1>
      <!--TODO : by artist component -->
      <p> A removable wallpaper design by <a href="#">Ellen Chang</a></p>
      <div id="color-ways-grid">

        <div class="maintain-square-image-container color-way-grid-item">
          <div class="maintain-square-image">

          </div>
        </div>

        <div class="maintain-square-image-container color-way-grid-item">
          <div class="maintain-square-image">

          </div>
        </div>

        <div class="maintain-square-image-container color-way-grid-item">
          <div class="maintain-square-image">

          </div>
        </div>

        <div class="maintain-square-image-container color-way-grid-item">
          <div class="maintain-square-image">

          </div>
        </div>

        <div class="maintain-square-image-container color-way-grid-item">
          <div class="maintain-square-image">

          </div>
        </div>

        <div class="maintain-square-image-container color-way-grid-item">
          <div class="maintain-square-image">

          </div>
        </div>

      </div>

      <p class="selection-header">Select Finish</p>
      <p>PORT FROM OLD PAGE SELECTOR</p>
      <p class="selection-header">Select Size</p>
      <p>PORT FROM OLD PAGE SELECTOR</p>

      <p class="selection-header">Select Quantity</p>
      <p>PORT FROM OLD PAGE SELECTOR</p>


      <h1 id="pdp-price">$150</h1>

      <div id="add-to-cart-btn" class="btn primary-btn">Add To Cart</div>
      <a href="#" id="order-sample">Order a sample swatch</a>
    </div>

    <!--TODO : Build Accordion -->
    <div class="pdp-full-width-content">
      <span>TODO : Build Accordion</span>
    </div>

    <div class="pdp-full-width-content">
      <h2>Description</h2>
    </div>
    <div class="pdp-full-width-content">
      <h2>Weight & Dimensions</h2>
    </div>
    <div class="pdp-full-width-content">
      <h2>Delivery Options</h2>
    </div>

    <div class="pdp-full-width-content">
      <h2>Related Patterns</h2>
      <product-grid-line-mock></product-grid-line-mock>
    </div>

    <div class="pdp-full-width-content">
      <h2>More patterns by { { ARTIST NAME } } </h2>
      <product-grid-line-mock></product-grid-line-mock>
    </div>

    <div class="pdp-full-width-content">
      <h2>Recently Viewed</h2>
      <product-grid-line-mock></product-grid-line-mock>
      <div class="btn-center-container">
        <div class="btn primary-btn">See all viewed Patterns</div>
      </div>
    </div>

  </div>


</template>

<script>
  import ProductGridLineMock from '../ProductGridLineMock'

  export default {
    name: 'PDP',
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
