<template>
  <div class="quantity-selector">
    <span class="minus-one btn" @click="minusQuantity(product)">&minus;</span>
    <span class="quantity-selected">{{product.quantity}}</span>
    <span class="plus-one btn" @click="addQuantity(product)">&plus;</span>
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
