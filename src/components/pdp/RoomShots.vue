<template>
  <div id="pdp-image-selection">
    <div class="maintain-square-image-container pdp-image-choice" v-for="image in roomShotData" :key="image.src" v-if="image.color==selectedProduct.Images.CloudinaryPath">
      <div class="maintain-square-image" :style="{ backgroundImage: 'url('+image.url+')'}" @click="selectPdpImage(image)" :class="{selected: selectedPdpImage == image}"></div>
    </div>
  </div>
  <!-- <span v-html='selectedImage'></span> -->
  <!-- <span id="cloud-layers" v-html='cloud'></span> -->
  <!-- <template v-for="combo in combinations">
      <span v-html="cloudinaryImg(combo.background,combo.size,combo.room)"></span>
    </template> -->
  <!-- <span class="productSelected">{{productSelected}}</span> {{pattern}} -->
  <!-- <image-picker></image-picker> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cloudinary from "cloudinary";

export default {
  props: ["roomShotData", "selectedProduct"],
  components: {},
  methods: {
    ...mapActions({
      selectPdpImage: "selectPdpImage"
    })
  },
  computed: {
    ...mapGetters({
      selectedPdpImage: "getSelectedPdpImageFromStore"
    })
  },
  mounted() {}
};
</script>
<style <style lang="scss" scoped>
</style>
