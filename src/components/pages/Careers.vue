<template>
  <div id="careers-page">
    <div class="header" id="careers-header" :style='{backgroundImage: "url("+careers.header_image.url+")"}'></div>
    <div class="header-bar">
      <h2>{{careers.header_title[0].text}}</h2>
    </div>
    <div class="content-wrap">

      <div class="careers">
        <p>{{careers.page_info[0].text}}</p>
        <h1>{{careers.header[0].text}}</h1>
        <template v-for="item in careers.body[0].items[0]">
          <serializer :content="item" :key="item.position_title"></serializer>
        </template>

      </div>

      <h2>Recently Viewed</h2>
      <product-grid-line-mock></product-grid-line-mock>
    </div>

  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductGridLineMock from "../ProductGridLineMock";
import Serializer from "./../global/Serializer";

export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock,
    Serializer
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getCareers: "getCareers"
    })
  },
  computed: {
    ...mapGetters({
      careers: "getCareersFromStore"
    })
  },
  mounted() {
    this.getCareers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
