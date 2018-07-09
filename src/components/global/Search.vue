<template>
  <form id="search-bar-global" @submit.prevent="sendParams">
    <input type="text" id="search-bar" v-model="params">
  </form>

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      params: null
    };
  },
  methods: {
    ...mapActions({}),
    sendParams() {
      console.log("router", this.$route);
      this.$router.push({
        name: "product-list",
        params: { searchTerm: this.params }
      });
    }
  },
  computed: {
    ...mapGetters({})
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
