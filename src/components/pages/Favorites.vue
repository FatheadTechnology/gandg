<template>
  <div id="product-list">
    <div class="header" id="favorites-header">

    </div>
    <div class="header-bar">
      <h2>MY FAVORITE DESIGNS COPY</h2>
    </div>
    <h4>favorites, actual data</h4>
    <div v-for="favorite in favorites">
      <img :src="'http://res.cloudinary.com/rfathead/image/upload/v1/test_patterns/'+favorite.pattern+'_'+favorite.colorway" alt="" style="max-width: 100px;">
      <router-link :to="{ name: 'PDP', params: { pattern: favorite.pattern, colorway : favorite.colorway }}">
        product/{{favorite.pattern}}/{{favorite.colorWay}}
      </router-link>
    </div>

    <div class="content-wrap">
      <product-grid-line-mock></product-grid-line-mock>
      <product-grid-line-mock></product-grid-line-mock>
      <product-grid-line-mock></product-grid-line-mock>
      <product-grid-line-mock></product-grid-line-mock>

      <div class="btn-center-container">
        <div class="btn primary-btn">Load More</div>
      </div>

    </div>

  </div>

</template>

<script>
import ProductGridLineMock from "../ProductGridLineMock";
import firebase from 'firebase';
export default {
  name: "HelloWorld",
  components: {
    ProductGridLineMock
  },
  data() {
    return {
      favorites: []
    };
  },
  mounted(){
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
      this.favorites = (snapshot.val() && snapshot.val().favorites) || '';
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
