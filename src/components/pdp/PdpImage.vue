<template>

  <div class="maintain-square-image-container pdp-image-choice" id="active-image">
    <div class="maintain-square-image" :style="{ backgroundImage: 'url('+selectedPdpImage.url+')'}"></div>
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
  props: [],
  components: {},
  methods: {},
  computed: {
    ...mapGetters({
      selectedPdpImage: "getSelectedPdpImageFromStore"
    })
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
