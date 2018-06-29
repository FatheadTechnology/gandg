<template>
  <modal name="add-to-cart" width="600px" height="600px" :adaptive="true" class="add-to-cart modal" id="add-to-cart-modal">
    <div class="modal-inner top-bar">
      <h1 id="added-to-cart">{{product.DisplayName}} Added to Cart!</h1>
      <div @click="hideModal" class="modal-close" id="add-to-cart-close">&times;</div>
    </div>
    <div class="modal-wrap">
      <div class="image-bar">
        <img :src="addedImage" class="image">
      </div>
      <div class="modal-inner">
        <div class="modal-info-wrap">
          <!-- <img :src="`${selectedPdpImage.url}`" :alt="`${product.DisplayName}`"> -->
          <div class="info-wrap">
            <img src="./../../assets/icomoon_6_icons/SVG/eyedropper.svg" alt="Color">
            <p>Color: {{product.ColorWay.ColorWayDisplayName}}</p>
          </div>
          <div class="info-wrap">
            <img src="./../../assets/icomoon_6_icons/SVG/droplet.svg" alt="Material">
            <p>Material: {{product.MaterialDisplayName}}</p>
          </div>
          <div class="info-wrap">
            <img src="./../../assets/icomoon_6_icons/SVG/enlarge2.svg" alt="Size">
            <p>Size: {{product.SizeDisplayName}}</p>
          </div>
        </div>
        <cart-quantity-selector :product="productAdded"></cart-quantity-selector>

        <div class="button-wrap">
          <router-link to="/wallpaper" class="btn secondary-btn" id="continue-shopping-modal-btn" tag="div">Continue Shopping</router-link>
          <router-link to="/cart" class="btn primary-btn" id="checkout-modal-btn" tag="div">Checkout &#x21E2;</router-link>
        </div>

        <!-- <h2>Make Installation Easier!</h2>
        <p>-----Upsells here-----</p> -->
        <!-- TODO: <upsells></upsells> -->
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartQuantitySelector from "../pdp/CartQuantitySelector";
import cloudinary from "cloudinary";

export default {
  components: {
    CartQuantitySelector
  },
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    hideModal() {
      this.$modal.hide("add-to-cart");
    }
  },
  computed: {
    ...mapGetters({
      productAdded: "getProductAddedFromStore",
      selectedPdpImage: "getSelectedPdpImageFromStore"
    }),
    addedImage() {
      return cloudinary.url(
        this.product.Images.CloudinaryPath.replace(":", "/")
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
