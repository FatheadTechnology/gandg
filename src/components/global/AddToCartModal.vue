<template>
  <modal name="add-to-cart" width="700px" height="700px" :adaptive="true" class="add-to-cart modal" id="add-to-cart-modal">
    <div class="modal-inner top-bar">
      <div class="title" id="added-to-cart">{{product.DisplayName}} Added to Cart!</div>
      <div @click="hideModal" class="modal-close" id="add-to-cart-close">&times;</div>
    </div>
    <div class="modal-wrap">
      <div class="modal-inner">
        <div class="modal-info-wrap">
          <img :src="`${product.Images.Thumbnail}`" :alt="`${product.DisplayName}`">
          <p>Material: {{product.Material}}</p>
          <p>Color: {{product.ColorWay.ColorWayDisplayName}}</p>
          <cart-quantity-selector :product="productAdded"></cart-quantity-selector>
        </div>
        <div class="button-wrap">
          <router-link to="/wallpaper" class="button" id="continue-shopping-modal-btn">Continue Shopping</router-link>
          <router-link to="/cart" class="button" id="checkout-modal-btn">Checkout &#x21E2;</router-link>
        </div>

        <h2>Make Installation Easier!</h2>
        <p>-----Upsells here-----</p>
        <!-- TODO: <upsells></upsells> -->
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartQuantitySelector from "../pdp/CartQuantitySelector";

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
      productAdded: "getProductAddedFromStore"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
