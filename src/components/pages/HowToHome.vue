<template>
  <div id="how-to-home" class="content-wrap">
    <h1>{{howTo.page_header[0].text}}</h1>
    <p>{{howTo.page_subheader[0].text}}</p>
    <div class="video-wrap-outer-container">
      <div class="video-wrap-container">
        <div class="video-wrap">
          <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <h1>{{howTo.secondary_header[0].text}}</h1>
    <p>{{howTo.secondary_subheader[0].text}}</p>
    <div class="btn-center-container">
      <div class="btn primary-btn">Step-by-Step Instructions</div>
    </div>
    <h1>More How-to Videos</h1>
    <!--
        <div class="video-swap" @click="youtube = 'vE2tcalBh9w'"><h1>change video</h1></div>
    -->
    <div class="video-preview-container">

      <div class="video-preview" @click="changeVideo(video.video_url.embed_url)" v-for="video in howTo.body[0].items" :key="video.video_url.embed_url">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image" :style="{ backgroundImage: 'url('+video.video_url.thumbnail_url+')' }">
          </div>
        </div>
        <span class="video-preview-title"> {{video.video_title[0].text}}</span>
      </div>

    </div>

    <br>
    <br>
    <br>

    <h2>Recently Viewed</h2>
    <product-grid-line-mock></product-grid-line-mock>

    <div class="btn-center-container">
      <div class="btn primary-btn">See all viewed patterns</div>
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
      youtube: null
    };
  },
  methods: {
    ...mapActions({
      getHowTo: "getHowTo"
    }),
    videoId(fullPath) {
      return fullPath.split("?v=")[1];
    },
    changeVideo(videoId) {
      this.youtube = this.videoId(videoId) + "?autoplay=1";
      window.scrollTo(0, 0);
    }
  },
  computed: {
    ...mapGetters({
      howTo: "getHowToFromStore"
    })
  },
  mounted() {
    this.getHowTo().then(response => {
      this.youtube = this.videoId(this.howTo.main_video.embed_url);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
