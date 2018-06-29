<template>
  <div id="faq-page">
    <div class="header" id="faq-header" :style='{backgroundImage: "url("+glossary.header_image.url+")"}'></div>
    <div class="header-bar">
      <h2>{{glossary.page_header[0].text}}</h2>
      {{glossary.body[0].items}} {{glossary.body[0].items[0].term[0].text}}
    </div>
    <div class="content-wrap">

      <div class="glossary-terms">
        <div class="term" v-for="(term, index) in glossary.body[0].items" :key="term.term[0].text">
          <div class="accordion-container">
            <div class="accordion-header" :id="`accordion-header-${index}`" v-on:click="toggleAccordion(index)">
              <h2 class="term">{{term.term[0].text}}</h2>
              <h2 v-if="!exists(index)" class="open-accordion">+</h2>
              <h2 v-else class="close-accordion">-</h2>
            </div>
            <div class="pdp-full-width-content description" id="accordion-content-1" v-if="exists(index)">
              <p>{{term.description_of_term[0].text}}</p>
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
    ProductGridLineMock
  },
  data() {
    return {
      shownAccordions: []
    };
  },
  methods: {
    ...mapActions({
      getGlossary: "getGlossary"
    }),
    toggleAccordion(num) {
      if (this.exists(num)) {
        this.shownAccordions.pop(num);
      } else {
        this.shownAccordions.push(num);
      }
    },
    exists(num) {
      return this.shownAccordions.indexOf(num) > -1;
    }
  },
  computed: {
    ...mapGetters({
      glossary: "getGlossaryFromStore"
    })
  },
  mounted() {
    this.getGlossary();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
