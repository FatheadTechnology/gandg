<template>
  <div class="add-to-cart" id="add-to-cart-btn">
    <div v-on:click="addToCartHere(product).then(showModal())" class="btn primary-btn add-to-cart-btn" :id="`add-to-cart-${product.SkuNumber}`">
      ADD TO CART
    </div>
    <add-to-cart-modal :product="product" id="add-to-cart-modal"></add-to-cart-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCartModal from "../global/AddToCartModal";

export default {
  components: {
    AddToCartModal
  },
  props: ["product"],
  methods: {
    ...mapActions({
      addToCartHere: "addToCart"
    }),
    showModal() {
      this.$modal.show("add-to-cart");
    },
    hideModal() {
      this.$modal.hide("add-to-cart");
    }
  }
};
</script>
