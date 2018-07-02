<template>
  <div id="about-us">
    <div class="header" id="about-us-header">

    </div>
    <div class="header-bar">
      <h2>ABOUT</h2>
    </div>
    <div class="content-wrap">
      <serializer :content="aboutUs.data.page_content"></serializer>
      <br>
      <br>
      <br>

      <h2>Recently Viewed</h2>
      <product-grid-line-mock></product-grid-line-mock>

      <!--
    TODO : Make Global Btn Component that takes in button type and where to
    -->
      <div class="btn-center-container">
        <div class="btn primary-btn">See all viewed patterns</div>
      </div>

    </div>

  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductGridLineMock from "../ProductGridLineMock";
import Serializer from "../global/Serializer";

export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock,
    Serializer
  },
  computed: {
    ...mapGetters({
      aboutUs: "getAboutUsFromStore"
    })
  },
  methods: {
    ...mapActions({
      getAboutUs: "getAboutUs"
    })
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.getAboutUs();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

