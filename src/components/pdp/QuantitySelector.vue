<template>
  <div>
    <div class="selection-header">Select Quantity:</div>
    <div class="quantity-selector" id="quantity-selector-wrapper">
      <span class="minus-one btn" id="minus-quantity-btn" @click="changeQuantity(-1)">&minus;</span>
      <span class="quantity-selected">{{quantitySelected}}</span>
      <span class="plus-one btn" id="plus-quantity-btn" @click="changeQuantity(1)">&plus;</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      quantitySelected: "getQuantitySelectedFromStore"
    })
  },
  methods: {
    ...mapActions({
      changeQuantity: "changeQuantity"
    })
  }
};
</script>
