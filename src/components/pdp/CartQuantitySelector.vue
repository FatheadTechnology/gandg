<template>
  <div class="quantity-selector">
    <span class="minus-one button" @click="minusQuantity(product)">&minus;</span>
    <span class="quantity-selected">{{product.quantity}}</span>
    <span class="plus-one button" @click="addQuantity(product)">&plus;</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["product"],
  computed: {
    ...mapGetters({})
  },
  methods: {
    ...mapActions({
      addQuantity: "addQuantity",
      minusQuantity: "minusQuantity"
    })
  }
};
</script>
