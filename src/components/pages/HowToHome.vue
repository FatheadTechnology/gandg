<template>
  <div id="how-to-home" class="content-wrap">
    <h1>How To</h1>
    <p>Watch the video or follow our step-by-step instructions of how to apply and remove your removable wallpaper.</p>
    <div class="video-wrap-outer-container">
      <div class="video-wrap-container">
        <div class="video-wrap">
          <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+youtube"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <h1>How to Hang Removable Wallpaper, PORT2PRISMIC</h1>
    <p>
      Lorem ipsum dolor sit amet, eros mentitum duo ea. Labitur officiis et sed. Soluta maiorum an sea. Eum nuhil persius te. Impetus nesessitatibus id, cu inermis assueverit est.</p>
    <div class="btn-center-container">
      <div class="btn primary-btn">Step-by-Step Instructions</div>
    </div>
    <h1>More How-to Videos</h1>
    <!--
        <div class="video-swap" @click="youtube = 'vE2tcalBh9w'"><h1>change video</h1></div>
    -->
    <div class="video-preview-container">

      <div @click="changeVideo('vE2tcalBh9w?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> Only Happy When It Rains</span>
      </div>

      <div @click="changeVideo('OKRJfIPiJGY?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> Bela Lugosis Dead</span>
      </div>

      <div @click="changeVideo('5w2YLdjxS_M?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> Here & Now</span>
      </div>

      <div @click="changeVideo('hAFuD-S-e_E?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> Popular</span>
      </div>

      <div @click="changeVideo('E2Oe5YKhzCE?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> Bound for the Floor</span>
      </div>

      <div @click="changeVideo('EU1CDSP7FRk?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> Decepticon</span>
      </div>

      <div @click="changeVideo('cMOAXm94VWo?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> Waiting Room</span>
      </div>

      <div @click="changeVideo('IlcMRq3gb1s?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> My Doorbell</span>
      </div>

      <div @click="changeVideo('1GwdHe5nQSQ?autoplay=1')">
        <div class="maintain-square-video-preview">
          <div class="maintain-square-video-preview-image">
          </div>
        </div>
        <span class="video-preview-title"> No Tears</span>
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
        youtube: 'iwVaTfXT1fo'
      };
    },
    methods: {
      changeVideo(videoId) {
        this.youtube = videoId;
        window.scrollTo(0, 0);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
