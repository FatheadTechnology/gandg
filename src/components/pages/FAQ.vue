<template>
  <div id="faq-page">
    <div class="header" id="faq-header" :style='{backgroundImage: "url("+faqInfo.page_image.url+")"}'></div>
    <div class="header-bar">
      <h2>{{faqInfo.page_header[0].text}}</h2>
    </div>
    <div class="content-wrap">

      <div class="faqs">
        <div class="faq" v-for="(qa, index) in faqInfo.body[0].items" :key="qa.question[0].text">
          <div class="accordion-container">
            <div class="accordion-header" :id="`accordion-header-${index}`" v-on:click="toggleAccordion(index)">
              <h2 class="question">Q: {{qa.question[0].text}}</h2>
              <h2 v-if="!exists(index)" class="open-accordion">+</h2>
              <h2 v-else class="close-accordion">-</h2>
            </div>
            <div class="pdp-full-width-content answer" id="accordion-content-1" v-if="exists(index)">
              <h2>A:&nbsp;</h2>
              <p>{{qa.answer[0].text}}</p>
            </div>
          </div>
        </div>

      </div>

      <h2>Recently Viewed</h2>
      <product-grid-line-mock></product-grid-line-mock>
    </div>

  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductGridLineMock from "../ProductGridLineMock";
import VideoGrid from "../VideoGrid";

export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock,
    VideoGrid
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      shownAccordions: []
    };
  },
  methods: {
    ...mapActions({
      getFaq: "getFaq"
    }),
    toggleAccordion(num) {
      console.log("toggleAccordion");
      if (this.exists(num)) {
        console.log("pop", num);
        this.shownAccordions.pop(num);
        console.log("shownAccordions", this.shownAccordions);
      } else {
        console.log("push", num);
        this.shownAccordions.push(num);
        console.log("shownAccordions", this.shownAccordions);
      }
      console.log("this.shownAccordions", this.shownAccordions);
    },
    exists(num) {
      return this.shownAccordions.indexOf(num) > -1;
    }
  },
  computed: {
    ...mapGetters({
      faqInfo: "getFaqFromStore"
    })
  },
  mounted() {
    this.getFaq();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
