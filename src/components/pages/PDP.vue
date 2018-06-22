<template>
  <div class="content-wrap">
    <div id="pdp">
      <div class="pdp-top-content" id="pdp-image-container">
        <div class="maintain-square-image-container" id="active-image">
          <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamillePink24x24.jpg')">
          </div>
        </div>

        <div id="pdp-image-selection">
          <div class="maintain-square-image-container pdp-image-choice">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamillePink24x24.jpg')">

            </div>
          </div>
          <div class="maintain-square-image-container pdp-image-choice">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamilleTeal24x24.jpg')">

            </div>
          </div>
          <div class="maintain-square-image-container pdp-image-choice">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamilleMidnightPink24x24.jpg')">

            </div>
          </div>
          <div class="maintain-square-image-container pdp-image-choice">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamilleMidnightTeal24x24.jpg')">

            </div>
          </div>
        </div>

      </div>

      <div classs="pdp-top-content" id="pdp-purchase-container">
        <h1>Majestic Teal</h1>
        {{pattern}}

        <!--TODO : by artist component -->
        <p> A removable wallpaper design by
          <a href="#">Ellen Chang</a>
        </p>
        <div id="color-ways-grid">

          <div class="maintain-square-image-container color-way-grid-item">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamillePink24x24.jpg')">

            </div>
          </div>

          <div class="maintain-square-image-container color-way-grid-item">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamilleTeal24x24.jpg')">

            </div>
          </div>
          <div class="maintain-square-image-container color-way-grid-item">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamilleMidnightPink24x24.jpg')">

            </div>
          </div>

          <div class="maintain-square-image-container color-way-grid-item">
            <div class="maintain-square-image" style="background: url('http://assets.fathead.com/swipe-patterns/HeatherDuttonCamilleMidnightTeal24x24.jpg')">

            </div>
          </div>

        </div>
        <div class="selectors">
          <material-selector></material-selector>
          <size-selector></size-selector>
          <quantity-selector></quantity-selector>
          <div class="calculator-wrap">
            <span>How much do I need?</span>
            <!-- TODO: Remove fontawesome icon -->
            <img class="show-calculator" @click="showModal" id="calculator-btn" src="./../../assets/icomoon_6_icons/SVG/calculator.svg">
          </div>
          <calculator-modal id="calculator-modal"></calculator-modal>
          <h1 id="pdp-price">$150</h1>

          <div id="add-to-cart-btn" class="btn primary-btn">Add To Cart</div>
          <a href="#" id="order-sample">Order a sample swatch</a>
        </div>
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
import MaterialSelector from "../pdp/MaterialSelector";
import SizeSelector from "../pdp/SizeSelector";
import QuantitySelector from "../pdp/QuantitySelector";
import CalculatorModal from "../global/CalculatorModal";
import Algolia from "./../api/Algolia";
import algoliasearch from "algoliasearch";

const client = algoliasearch("S7MN0CIBBE", "ecf8c6a506e3515c1400eb7086879aa2", {
  protocol: "https:"
});
const index = client.initIndex("dev_NewEvolutionProducts");
export default {
  name: "PDP",
  components: {
    ProductGridLineMock,
    MaterialSelector,
    SizeSelector,
    QuantitySelector,
    CalculatorModal
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showAccordion1: false,
      showAccordion2: false,
      showAccordion3: false,
      pattern: null
    };
  },
  methods: {
    showModal() {
      this.$modal.show("calculator");
    },
    hideModal() {
      this.$modal.hide("calculator");
    }
  },
  mounted() {
    index.search(
      {
        filters: `ProductUrl:${this.$route.params.pattern}`
      },
      (err, content) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("content.hits[0]", content.hits[0]);
          this.pattern = content.hits[0];
          // router.push({ name: "wallpaper", query: { query: query } });2
        }
      }
    );
    // this.pattern = Algolia.findPattern(this.$route.params);
    // console.log("pattern", this.pattern);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
