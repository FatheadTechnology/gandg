<template>
  <div class="size-picker" id="size-picker">
    <div class="selection-header">Select Size:</div>
    <div class="button-wrap">
      <!-- TODO: Decide between these options -->
      <!-- OPTION A -->
      <!-- <div class="size-option plain button" :id="size.Value" v-for="size in sizes" :class="{ selected : sizeSelected == size.Value }" @click="selectSize(size.Value)">{{size.DisplayName}}</div> -->
      <!-- END OPTION A -->

      <!-- OPTION B -->
      <!-- <select name="size-select" class="size-select" v-model="selectedSize">
        <option>2ft. x 10.5 ft. - $105 ea.</option>
        <option>2ft. x 12.5 ft. - $120 ea.</option>
        <option>2ft. x 16.5 ft. - $150 ea.</option>
        <option>Sample - FREE*</option>
      </select>
      <span v-show="selectedSize == 'Sample - FREE*'">*not actually free lol</span> -->
      <select name="size-select" class="size-select" v-model="selectedSize" @change="selectSize(selectedSize)">
        <option v-for="size in sizes" :value="`${size.Value}`">{{size.DisplayName}}</option>
      </select>
      <!-- END OPTION B -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["sizes"],
  data: function() {
    return {
      selectedSize: "16x3",
      // TODO: Only needed for option B
      selectedSize: this.$route.params.size
    };
  },
  computed: {
    ...mapGetters({
      sizeSelected: "getSizeSelectedFromStore"
    })
  },
  methods: {
    ...mapActions({
      selectSize: "selectSize",
      findPdpProduct: "findPdpProduct"
    })
  },
  updated() {
    this.findPdpProduct();
  }
};
</script>
