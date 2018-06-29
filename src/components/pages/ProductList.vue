<template>
  <div id="product-list">
    <div class="header" id="product-list-header" :style="{ backgroundImage: 'url('+ landingPageContent['0'].data.landing_page_image.url +')' }">
    </div>
    <div class="header-bar">
      <h2>
        {{landingPageContent["0"].data.landing_page_title["0"].text}}

      </h2>
    </div>
    <h3 class="btn-center-container">
      <!--
      TODO : Make unique class for these headers with better styling
      -->
      {{landingPageContent["0"].data.landing_page_subheader["0"].text}}
    </h3>
    <div class="content-wrap">

      <ais-index appId="S7MN0CIBBE" apiKey="ecf8c6a506e3515c1400eb7086879aa2">
        <!-- <ais-search-box>
            <div class="input-group">
              <ais-input placeholder="Search" class="search-input text-input" id="freaking-search" />
              <button type="submit">
                <span class="submit-search-button">Search</span>
              </button>
            </div>
          </ais-search-box> -->

        <!-- <div>
            {name: 'master_sku', label: 'Master Sku'},-->
        <!--   <ais-sort-by-selector :indices="[
                      {name: 'dev_EvolutionProducts', label: 'Relevance'},
                               {name: 'price_desc', label: 'Lowest price'}                ]"
                           >
                             <template slot-scope="{ indexName, label }">
                               <option :value="indexName">Sort by: {{ label }}</option>
                             </template>
                           </ais-sort-by-selector>
          <ais-stats/>
        </div>-->
        <!-- <ais-tree-menu :attributes="['DisplayName']">
              <h3 slot="header">Browse by</h3>
            </ais-tree-menu> -->

        <!--            <ais-price-range attribute-name="price">
                                    <h3 slot="header">Price</h3>
                                </ais-price-range>

            -->
        <div class="filters-row">
          <div class="active-filters">

          </div>
          <div class="search-bar">
            <ais-search-box></ais-search-box>
          </div>
          <div class="dropdown-wrap">

            <div class="dropdown" @click="toggleFilters" :class="{open : showFilters}">Filter</div>
            <ais-sort-by-selector class="dropdown" :indices="[
                    {name: 'dev_NewEvolutionProducts', label: 'Popular'}]" />
          </div>

        </div>
        <div class="filters" v-show="showFilters">
          <ais-refinement-list inline-template attribute-name="Colors.ColorWayDisplayName">
            <div class="filter">
              <h3 slot="header">Color</h3>
              <div class="input-checkbox" v-for="facet in facetValues" :key="facet.name">
                <input type="checkbox" v-model="facet.isRefined" @change="toggleRefinement(facet);toggleActive(facet)" :value="facet.name" />
                <label for="checkbox">
                  <span>{{ facet.name }}</span>
                </label>
              </div>
              <!-- <select @change="toggleRefinement(colorOption)" v-model="colorOption">
                 TODO: Get the refinement to actually toggle
                <option v-for="facet in facetValues" :value="facet.name" :key="facet.name">{{facet.name}} ({{facet.count}})</option>
              </select> -->
            </div>
          </ais-refinement-list>
          <!-- <ais-refinement-list attribute-name="Colors.ColorWayDisplayName">
            <h3 slot="header">Color</h3>
          </ais-refinement-list> -->
          <!-- <color-filter :colors="Colors"></color-filter> -->
          <ais-refinement-list inline-template attribute-name="PrimaryCategory.DisplayName">
            <div class="filter">
              <h3 slot="header">Design Type</h3>
              <div class="input-checkbox" v-for="facet in facetValues" :key="facet.name">
                <input type="checkbox" v-model="facet.isRefined" @change="toggleRefinement(facet);toggleActive(facet)" :value="facet.name" />
                <label for="checkbox">
                  <span>{{ facet.name }}</span>
                </label>
              </div>
              <!-- <select @change="toggleRefinement(designType)" v-model="designType">
                <option v-for="facet in facetValues" :value="facet.name" :key="facet.name">{{facet.name}} ({{facet.count}})</option>
              </select> -->
            </div>
          </ais-refinement-list>
          <!-- <ais-refinement-list attribute-name="PrimaryCategory.DisplayName">
            <h3 slot="header">Design Type</h3>
          </ais-refinement-list> -->
        </div>
        <!--    <ais-rating attribute-name="rating">
                            <h3 slot="header">Rating</h3>
                        </ais-rating>-->

        <!-- <transition name="fade">
          <div class="overlay" v-if="mobileFiltersShown" @click="hideMobileFilters"></div>
        </transition>
        <transition name="slide-right">
          <div class="filters-mobile" v-show="mobileFiltersShown">
            <div class="close" @click="hideMobileFilters">X (use icon from menu)</div>
            <ais-refinement-list attribute-name="Colors.ColorWayDisplayName">
              <h3 slot="header">Color</h3>
            </ais-refinement-list>

            <ais-refinement-list attribute-name="PrimaryCategory.DisplayName">
              <h3 slot="header">Design Type</h3>
            </ais-refinement-list>
          </div>
        </transition> -->
        <!-- End Filters -->
        <div class="results">
          <!-- <div class="button-wrap under-s">
            <div class="plain button" id="mobile-filters-button" @click="showMobileFilters">Filters</div>
          </div> -->
          <ais-results class="product-grid">
            <template slot-scope="{ result }">
              <wallpaper-pattern :result="result"></wallpaper-pattern>
            </template>
          </ais-results>

          <ais-no-results/>

        </div>
        <div class="btn-center-container">
          <div class="btn primary-btn">Load More</div>
        </div>
        <!-- <div class="pagination-wrap">
          <ais-pagination :classNames="{
                    'ais-pagination': 'pagination',
                    'ais-pagination__item--active': 'active',
                    'ais-pagination__item--disabled': 'disabled'
                    }" v-on:page-change="onPageChange" />
          <ais-results-per-page-selector :options="[12, 24, 48]" />
          <span class="results-per-page-text">Results Per Page</span>
        </div> -->
      </ais-index>

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
import ProductGridLineMock from "../ProductGridLineMock";
import WallpaperPattern from "../global/WallpaperPattern";
import ColorFilter from "../pdp/ColorFilter";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock,
    WallpaperPattern,
    ColorFilter
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      onPageChange: function() {
        window.scrollTo(0, 0);
      },
      showFilters: false,
      showSort: false,
      colorOption: null,
      designType: null
    };
  },
  computed: {
    ...mapGetters({
      landingPageContent: "getLandingPageContentFromStore"
    })
  },
  methods: {
    ...mapActions({
      getLandingPageContent: "getLandingPageContent"
    }),
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    toggleSort() {
      this.showSort = !this.showSort;
    },
    toggleActive(facet) {
      console.log("facet", facet);
    }
  },
  created() {
    console.log(this.$route.params.landingId);
    if (this.$route.params.landingId) {
      this.getLandingPageContent(this.$route.params.landingId);
    } else {
      this.getLandingPageContent("standard");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
