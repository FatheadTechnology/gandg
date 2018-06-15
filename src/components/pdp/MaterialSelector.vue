<template>
  <div class="material-picker">
    <div class="selection-header">Select Finish:</div>
    <div class="button-wrap">
      <!-- TODO: Decide between these options -->
      <!-- OPTION A -->
      <!-- <div class="material-option plain button" :id="material" v-for="material in materials" :class="{ selected : materialSelected == material }" @click="selectMaterial(material)">{{material}}</div> -->
      <!-- END OPTION A -->

      <!-- OPTION B -->
      <select name="material-select" class="material-select">
        <option>Vinyl</option>
        <option>Textured</option>
      </select>
      <!-- <select name="material-select" class="material-select" v-model="selectedMaterial" @change="selectMaterial(materialSelected)">
        <option v-for="material in materials" :value="`${material}`">{{material}}</option>
      </select> -->
      <!-- END OPTION B -->
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  /*    components : {
      WallpaperPattern
    },*/
  props: ["materials"],
  data: function() {
    return {
      // TODO: Only needed for option B
      selectedMaterial: this.$route.params.material
    };
  },
  computed: {
    // ...mapGetters({
    //   // materialSelected: "getMaterialSelectedFromStore"
    // })
  },
  methods: {
    // ...mapActions({
    //   // selectMaterial: "selectMaterial",
    //   // findPdpProduct: "findPdpProduct"
    // })
  },
  updated() {
    // this.findPdpProduct();
  },
  created() {
    // this.selectMaterial('vinyl')
  }
};
</script>
