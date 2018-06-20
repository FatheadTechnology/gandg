<template>
  <ais-refinement-list attribute-name="colors.ColorWayDisplayName">
    <div class="filter">
      <h3 slot="header">Design Type</h3>
      <select>
        <option v-for="facet in facetValues" :value="`${facet.name}`" :key="facet.name">{{facet.name}} ({{facet.count}})</option>
      </select>
    </div>
  </ais-refinement-list>
</template>
<script>
import { RefinementList } from "vue-instantsearch";

export default {
  extends: RefinementList,
  props: ["colors"]
};
</script>
