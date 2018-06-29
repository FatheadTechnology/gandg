<template>
  <router-link tag='div' :to="{ name: 'PDP', params: { pattern: result.ProductUrl, colorway: selectedColor.ColorWayName } }">
    <div class="wallpaper-pattern product-grid-item-container">
      <!-- <div class="designer-series-ribbon">
            <div class="ribbon">Designer</div>
        </div> -->

      <div class="product-grid-item-image-container">
        <div class="product-grid-item-image" :style="`background-image: url(${result.Images.DefaultThumbnail})`"></div>
      </div>
      <span class="product-grid-item-header">{{result.DisplayName}}</span>
      <span class="product-grid-item-subheader">{{result.Colors.length}} colors available</span>
    </div>
  </router-link>
</template>

<script>
/*
import AddFavorite from './../favorites/AddFavorite';
*/

export default {
  props: ["result"],
  components: {
    /*AddFavorite*/
  },
  data() {
    return {
      selectedColor: this.result.Colors[0]
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    }
  }
};
</script>
