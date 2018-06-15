<template>
  <div class="content-wrap">
    <div id="pdp">

      <div class="pdp-top-content" id="pdp-image-container">

        <div class="maintain-square-image-container" id="active-image">
          <div class="maintain-square-image">
          </div>
        </div>

        <div id="pdp-image-selection">
          <div class="maintain-square-image-container pdp-image-choice" v-for="i in 5">
            <div class="maintain-square-image">

            </div>
          </div>
        </div>

      </div>

      <div classs="pdp-top-content" id="pdp-purchase-container">
        <h1>Majestic Teal</h1>
        <!--TODO : by artist component -->
        <p> A removable wallpaper design by
          <a href="#">Ellen Chang</a>
        </p>
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

      <div id="accordion-container">
        <div class="accordion-header" id="accordion-header-1" v-on:click="showAccordion1 = !showAccordion1">
          <h2>Description</h2>
          <h2 v-if="!showAccordion1">+</h2>
          <h2 v-if="showAccordion1">-</h2>
        </div>
        <div class="pdp-full-width-content" id="accordion-content-1" v-if="showAccordion1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div class="accordion-header" id="accordion-header-2" v-on:click="showAccordion2 = !showAccordion2">
          <h2>Weight & Dimensions</h2>
          <h2 v-if="!showAccordion2">+</h2>
          <h2 v-if="showAccordion2">-</h2>
        </div>
        <div class="pdp-full-width-content" id="accordion-content-2" v-if="showAccordion2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <div class="accordion-header" id="accordion-header-3" v-on:click="showAccordion3 = !showAccordion3">
          <h2>Delivery Options</h2>
          <h2 v-if="!showAccordion3">+</h2>
          <h2 v-if="showAccordion3">-</h2>
        </div>
        <div class="pdp-full-width-content" id="accordion-content-3" v-if="showAccordion3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
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

  </div>

</template>

<script>
import ProductGridLineMock from "../ProductGridLineMock";

export default {
  name: "PDP",
  components: {
    ProductGridLineMock
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showAccordion1: false,
      showAccordion2: false,
      showAccordion3: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
