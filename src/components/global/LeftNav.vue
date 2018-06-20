<template>
  <div id="left-nav">
    <router-link tag="div" to="/" id="home-link" >
      <img @click="onClick('homepageClick')" src="../../assets/guildandgrace.png" alt="Guild & Grace">
    </router-link>

    <div class="left-menu-item" id="wallpaper" @mouseover="showWallpaperMenu = !showWallpaperMenu">
      <span>Wallpaper</span> <span> > </span></div>


    <div id="wallpaper-menu-left-highlight" v-if="showWallpaperMenu">
      <div id="wallpaper-highlight-copy">
        <span class="selected-right-menu-item">> &nbsp;</span> WALLPAPER

      </div>
      <div id="wallpaper-forward-circle"></div>
    </div>
    <div id="wallpaper-circle" v-if="showWallpaperMenu"></div>
    <div id="left-wallpaper-menu-content" v-if="showWallpaperMenu">
      <div class="left-wallpaper-grid-inner-group">
        <div class="title">Styles</div>
        <div class="group">
          <div class="group-item">Bohemian</div>
          <div class="group-item">Contemporary</div>
          <div class="group-item">Country</div>
          <div class="group-item">Damask</div>
          <div class="group-item">Eclectic</div>
          <div class="group-item">Industrial</div>
          <div class="group-item">Kids</div>
        </div>
        <div class="group">
          <div class="group-item">Mid-Century</div>
          <div class="group-item">Modern</div>
          <div class="group-item">Shabby Chic</div>
          <div class="group-item">Traditional</div>
          <div class="group-item">Victorian</div>
          <div class="group-item">Vintage</div>
        </div>
      </div>

      <div class="left-wallpaper-grid-inner-group">
        <div class="title">Colors</div>
        <div class="group">
          <div class="group-item">Pink</div>
          <div class="group-item">Red</div>
          <div class="group-item">Orange</div>
          <div class="group-item">Green</div>
          <div class="group-item">Blue</div>
          <div class="group-item">Purple</div>
          <div class="group-item">Brown</div>
        </div>
        <div class="group">
          <div class="group-item">Black</div>
          <div class="group-item">Gray</div>
          <div class="group-item">White</div>
          <div class="group-item">White</div>

        </div>
      </div>

      <div class="full-width">
        <div class="btn-center-container">
          <div class="btn primary-btn">SEE ALL DESIGN STYLES</div>
        </div>
      </div>
    </div>

    <div id="wallpaper-dummy-area" @mouseover="showWallpaperMenu = !showWallpaperMenu" v-if="showWallpaperMenu"></div>


    <div class="left-menu-item" id="collections" @mouseover="showCollectionsMenu = !showCollectionsMenu"><span>Collections</span>
      <span> > </span></div>

    <div id="collections-menu-left-highlight" v-if="showCollectionsMenu">
      <div id="collections-highlight-copy">
        <span class="selected-right-menu-item">> &nbsp;</span> COLLECTIONS

      </div>
      <div id="collections-forward-circle"></div>
    </div>
    <div id="collections-circle" v-if="showCollectionsMenu"></div>
    <div id="left-collections-menu-content" v-if="showCollectionsMenu">stuff</div>
    <div id="collections-dummy-area" @mouseover="showCollectionsMenu = !showCollectionsMenu"
         v-if="showCollectionsMenu"></div>


    <div class="left-menu-item" id="artists" @mouseover="showArtistsMenu = !showArtistsMenu"><span>Artists</span> <span> > </span>
    </div>


    <div id="artists-menu-left-highlight" v-if="showArtistsMenu">
      <div id="artists-highlight-copy">
        <span class="selected-right-menu-item">> &nbsp;</span> ARTISTS

      </div>
      <div id="artists-forward-circle"></div>
    </div>
    <div id="artists-circle" v-if="showArtistsMenu"></div>
    <div id="left-artists-menu-content" v-if="showArtistsMenu">stuff</div>
    <div id="artists-dummy-area" @mouseover="showArtistsMenu = !showArtistsMenu" v-if="showArtistsMenu"></div>


    <router-link tag="div" to="/find-your-style" class="btn secondary-btn" id="find-your-style">
      FIND YOUR STYLE

    </router-link>
    <router-link tag="div" to="/how-to" class="left-menu-item" id="how-to-link"><span>How To</span></router-link>
    <router-link tag="div" to="/blog" class="left-menu-item" id="blog-link"><span>Blog</span></router-link>
    <router-link tag="div" to="/about-us" class="left-menu-item" id="about-us-link"><span>About Us</span></router-link>


  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showWallpaperMenu: false,
        showCollectionsMenu: false,
        showArtistsMenu: false

      }
    },
    methods: {
      onClick: function(eventValue) {
        console.log(this.$gtm.enabled);
        console.log('clicked!');
        this.$gtm.trackEvent({
          category: 'Homepage',
          action: 'click',
          label: 'Home page link',
          value: 5000,
          event : eventValue
        });
      }
    },
  mounted() {
    this.$gtm.trackView('MyScreenName', 'currentpath');
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
