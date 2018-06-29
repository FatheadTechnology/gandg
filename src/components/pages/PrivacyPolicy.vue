<template>
  <div id="privacy-policy-page">
    <!-- <div class="header" id="faq-header" :style='{backgroundImage: "url("+faqInfo.page_image.url+")"}'></div>
    <div class="header-bar">
      <h2>{{faqInfo.page_header[0].text}}</h2>
    </div> -->
    <div class="content-wrap">

      <div class="privacy-policy">
        <h1>{{policy.page_header[0].text}}</h1>
        <serializer :content="policy.privacy_policy"></serializer>

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
      getPrivacyPolicy: "getPrivacyPolicy"
    })
  },
  computed: {
    ...mapGetters({
      policy: "getPrivacyPolicyFromStore"
    })
  },
  mounted() {
    this.getPrivacyPolicy();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
