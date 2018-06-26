<template>
  <div class="color-picker">
    <!-- TODO: Fix flickering when selecting a color for the first time -->
    <template v-for="color in colors">
      <div class="color-option plain button" :class="{ selected : colorSelected == color.name }" @click="selectColor(color)" :style="{backgroundImage: 'url('+swatch(color.url)+')'}"></div>

    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cloudinary from "cloudinary";

export default {
  /*    components : {
      WallpaperPattern
    },*/
  props: ["colors"],
  computed: {
    ...mapGetters({
      colorSelected: "getColorSelectedFromStore"
    })
  },
  methods: {
    ...mapActions({
      selectColor: "selectColor",
      findPdpProduct: "findPdpProduct",
      colorExists: "colorExists"
    }),
    swatch(id) {
      let x = id.replace(":", "/");
      return cloudinary.url(x, { width: 200 });
    }
  },
  updated() {
    this.findPdpProduct();
  }
};
</script>
