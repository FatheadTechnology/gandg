<template>
  <div class="room-layers">
    <!-- <span v-html='selectedImage'></span> -->
    <!-- <span id="cloud-layers" v-html='cloud'></span> -->
    <!-- <template v-for="combo in combinations">
      <span v-html="cloudinaryImg(combo.background,combo.size,combo.room)"></span>
    </template> -->
    <!-- <span class="productSelected">{{productSelected}}</span> {{pattern}} -->
    <!-- <image-picker></image-picker> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cloudinary from "cloudinary";

export default {
  props: ["product", "productSelected"],
  components: {},
  methods: {},
  computed: {},
  mounted() {}
};
</script>
<style <style lang="scss" scoped>
</style>
