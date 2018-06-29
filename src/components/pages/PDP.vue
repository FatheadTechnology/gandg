<template>
  <div class="content-wrap">
    <div id="pdp">
      <div class="pdp-top-content" id="pdp-image-container">

        <!-- TODO: Make a component -->
        <!-- <div class="maintain-square-image-container pdp-image-choice">
            <div class="maintain-square-image" :style="{ backgroundImage: 'url('+selectedImage+')'}" v-if="selectedProduct"></div>
          </div> -->
        <pdp-image></pdp-image>

        <!-- <div class="maintain-square-image-container pdp-image-choice" v-for="image in roomShotData" :key="image.src">
            <div class="maintain-square-image" :style="{ backgroundImage: 'url('+image.url+')'}" v-if="image.color==selectedProduct.Images.CloudinaryPath"></div>
          </div> -->
        <room-shots :roomShotData="roomShotData" :selectedProduct="selectedProduct"></room-shots>

      </div>

      <div classs="pdp-top-content" id="pdp-purchase-container">
        <pattern-info :info="patternInfo"></pattern-info>
        <!-- <h1>Majestic Teal</h1>

         TODO : by artist component
        <p> A removable wallpaper design by
          <a href="#">Ellen Chang</a>
        </p> -->
        <div id="color-ways-grid">
        </div>
        <div class="selectors">
          <color-selector :colors="pdpColors"></color-selector>
          <material-selector :materials="materials"></material-selector>
          <size-selector :sizes="sizes"></size-selector>
          <quantity-selector></quantity-selector>
          <div class="calculator-wrap">
            <span>How much do I need?</span>
            <!-- TODO: Remove fontawesome icon -->
            <img class="show-calculator" @click="showModal" id="calculator-btn" src="./../../assets/icomoon_6_icons/SVG/calculator.svg">
          </div>
          <calculator-modal id="calculator-modal"></calculator-modal>
          <h1 id="pdp-price">$150</h1>

          <add-to-cart :product="selectedProduct"></add-to-cart>
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
        <div class="product-grid">
          <wallpaper-pattern :result="item" v-for="item in crossSells" :key="item.MasterSkuNumber"></wallpaper-pattern>
        </div>
        <!-- <product-grid-line-mock></product-grid-line-mock> -->
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
import { mapGetters, mapActions } from "vuex";
import ProductGridLineMock from "../ProductGridLineMock";
import ColorSelector from "../pdp/ColorSelector";
import MaterialSelector from "../pdp/MaterialSelector";
import SizeSelector from "../pdp/SizeSelector";
import QuantitySelector from "../pdp/QuantitySelector";
import CalculatorModal from "../global/CalculatorModal";
import PdpImage from "../pdp/PdpImage";
import RoomShots from "../pdp/RoomShots";
import AddToCart from "../pdp/AddToCart";
import PatternInfo from "../pdp/PatternInfo";
import WallpaperPattern from "./../global/WallpaperPattern";
import cloudinary from "cloudinary";

export default {
  name: "PDP",
  components: {
    ProductGridLineMock,
    ColorSelector,
    MaterialSelector,
    SizeSelector,
    QuantitySelector,
    CalculatorModal,
    PdpImage,
    AddToCart,
    PatternInfo,
    RoomShots,
    WallpaperPattern
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
    ...mapActions({
      getPatternInfo: "getPatternInfo",
      findProduct: "findPdpProduct",
      createRoomShotData: "createRoomShotData",
      getCrossSells: "getCrossSells"
    }),
    showModal() {
      this.$modal.show("calculator");
    },
    hideModal() {
      this.$modal.hide("calculator");
    }
  },
  computed: {
    ...mapGetters({
      //TODO : make Pattern Info Grabber
      patternInfo: "getPatternInfoFromStore",
      selectedProduct: "getSelectedProductFromStore",
      materialSelected: "getMaterialSelectedFromStore",
      quantity: "getQuantitySelectorFromStore",
      pdpColors: "getPdpColorsFromStore",
      materials: "getPdpMaterialsFromStore",
      sizes: "getPdpSizesFromStore",
      selectedPdpImage: "getSelectedPdpImageFromStore",
      roomShotData: "getRoomShotDataFromStore",
      roomShots: "getRoomShotsFromStore",
      crossSells: "getCrossSellsFromStore"
    })
  },
  created() {
    // Get pattern info before creating room shots with it
    this.getPatternInfo(this.$route.params).then(response => {
      this.createRoomShotData(this.patternInfo);
      this.getCrossSells(this.patternInfo);
    });
    window.scrollTo(0, 0);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
