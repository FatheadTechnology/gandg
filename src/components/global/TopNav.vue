<template>
  <div id="top-nav">
    <div id="nav-wrap">
      <div class="close-nav" @mouseover="hideNav" v-show="showNavDrop"></div>
      <router-link tag="div" to="/" id="home-link">
        <svg id="desktop-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1683.6 585.7" enable-background="new 0 0 1683.6 585.7" xml:space="preserve">
          <g id="Layer_1">
          </g>
          <g id="Artwork">
            <g>
              <path fill="#3E3935" d="M242.8,232c4.4,0.9,8.9,1.5,13.3,2.6c8.5,2.1,19.1,8.7,24.8,14.9c-3.1,3.2-6.3,6.3-9.2,9.2
			c-4-2.8-7.8-6.2-12.3-8.4c-24.8-12.4-55.6-0.9-62.7,29.2c-3.8,16.1-0.7,30.9,10.2,43.5c9.2,10.5,21,14.8,34.7,14.2
			c9.6-0.5,18.7-2.7,26.9-8c2.4-1.5,3.5-3.1,3.4-6.2c-0.3-6.7-0.1-13.4-0.1-20.3c-11.1,0-22,0-33,0c0-4.6,0-8.9,0-13.3
			c15.5,0,30.9,0,46.6,0c0,0.7,0,1.4,0,2.1c0,13,0,26.1-0.1,39.1c0,1.1-0.5,2.4-1.3,3.2c-8.2,8.4-18.3,13.2-29.6,15.5
			c-12.4,2.5-24.8,2.3-36.7-2.3c-15.6-6.1-26.5-17-32.4-32.9c-5.3-14.2-5.6-28.6-0.8-42.9c6.6-19.6,20-32.2,39.9-37.4
			c3.3-0.8,6.7-1.2,10-1.8C237.4,232,240.1,232,242.8,232z" />
              <path fill="#3E3935" d="M585.7,350.6c0-39.2,0-78.6,0-118.2c0.7,0,1.4,0,2.1,0c11.1,0,22.2,0,33.2,0c10.4,0,20.5,1.7,29.9,6.5
			c14.5,7.3,23.4,19.3,26.6,35.4c3.2,16.2,1.9,32-5.6,46.9c-6.1,12.1-15.9,20.1-28.3,24.9c-6.7,2.6-13.7,4.3-20.9,4.5
			C610.5,350.7,598.2,350.6,585.7,350.6z M599.3,246c0,30.6,0,60.9,0,91.2c5.9,0,11.7,0.1,17.5,0c7.1-0.1,14.1-1.1,20.8-3.4
			c11.9-4.1,20.3-12,24.4-24.3c3-8.9,3.5-18.1,2.6-27.4c-1.9-18.4-14.1-31.6-31.8-34.8C621.8,245.3,610.6,246.5,599.3,246z" />
              <path fill="#3E3935" d="M396.2,232.5c4.7,0,9,0,13.7,0c0,0.8,0,1.6,0,2.4c0,22.1,0,44.2,0,66.3c0,11-1.9,21.5-8.1,30.9
			c-6.2,9.4-14.8,15.2-25.6,17.5c-12,2.6-23.9,2.2-35.2-3.2c-10.6-5-16.9-13.7-20.3-24.8c-1.8-5.9-2.3-12-2.3-18.1c0-23,0-46,0-68.9
			c0-0.6,0.1-1.3,0.1-2c4.5,0,8.9,0,13.5,0c0,1,0,1.8,0,2.7c0,22-0.1,44.1,0.1,66.1c0.1,5.3,0.7,10.8,1.9,15.9
			c2.6,10.6,9.6,17.1,20.1,19.4c8,1.7,16,1.4,23.6-1.7c10.4-4.3,15.6-12.9,17.6-23.8c0.6-3.6,0.8-7.4,0.9-11.1
			c0.1-21.6,0-43.2,0-64.8C396.2,234.4,396.2,233.5,396.2,232.5z" />
              <path fill="#3E3935" d="M487,350.6c0-39.4,0-78.6,0-118.1c4.4,0,8.8,0,13.4,0c0,34.8,0,69.5,0,104.5c17.4,0,34.5,0,51.8,0
			c0,4.6,0,9,0,13.6C530.5,350.6,508.8,350.6,487,350.6z" />
              <path fill="#3E3935" d="M441.7,232.9c4.5,0,8.9,0,13.4,0c0,39.2,0,78.4,0,117.7c-4.4,0-8.9,0-13.4,0
			C441.7,311.5,441.7,272.3,441.7,232.9z" />
              <path fill="#3E3935" d="M1245.6,233.2c1.8,4.3,3.5,8.7,5.4,13c14.7,33.9,29.5,67.9,44.3,101.8c0.8,1.9,0.6,2.3-1.4,2.3
			c-4.2,0-8.5,0-12.8,0c-2.8-6.7-5.6-13.2-8.3-19.9c-0.7-1.7-1.5-2.3-3.4-2.3c-16.7,0.1-33.3,0.1-50,0c-1.7,0-2.5,0.6-3.1,2.1
			c-2.4,6.2-5,12.3-7.5,18.5c-0.5,1.3-1.2,1.7-2.5,1.6c-3.5-0.1-6.9,0-10.4,0c-2.4,0-2.5-0.3-1.6-2.5c5.8-13.3,11.5-26.6,17.3-39.9
			c10.5-24.3,21.1-48.6,31.6-72.9c0.3-0.6,0.4-1.2,0.6-1.8C1244.5,233.2,1245.1,233.2,1245.6,233.2z M1244.3,262.5
			c-7.2,17.7-14.2,34.8-21.3,52.1c14.5,0,28.7,0,43.1,0C1258.8,297.3,1251.6,280.2,1244.3,262.5z" />
              <path fill="#3E3935" d="M1500.9,246.4c-16.8,0-33.6,0-50.6,0c0,14.3,0,28.5,0,43c14,0,28.1,0,42.3,0c0,4.6,0,9,0,13.6
			c-14.1,0-28.2,0-42.3,0c0,11.3,0,22.4,0,33.8c16.9,0,33.8,0,50.6,0c0,4.5,0,9,0,13.5c-21.4,0-42.8,0-64.3,0c0-39.2,0-78.2,0-117.5
			c21.4,0,42.9,0,64.3,0C1500.9,237.4,1500.9,241.9,1500.9,246.4z" />
              <path fill="#3E3935" d="M1371.9,232.9c3.7,0.7,7.5,1.2,11.2,2.1c9,2.2,16.8,6.9,23.3,13.4c-3.2,3.2-6.3,6.4-9.3,9.4
			c-3.3-2.3-6.6-5.3-10.5-7.1c-15.6-7.4-31-6.2-44.7,4.1c-16.2,12.3-20.7,29.5-16.2,49c3.5,15.2,12.6,26.1,27.4,31.2
			c14.6,5,28.5,2.3,41.1-6.7c1.9-1.4,3.7-3.1,5.3-4.5c3.1,3.2,6.2,6.3,9.4,9.5c-5.2,5.2-11.4,9.3-18.3,12.3
			c-14.6,6.1-29.4,7.1-44.2,1.3c-15.5-6-26.2-17.1-32-32.8c-5.2-14-5.4-28.2-0.7-42.3c6.6-19.6,20-32.1,39.9-37.1
			c3.4-0.9,6.9-1.2,10.3-1.8C1366.5,232.9,1369.2,232.9,1371.9,232.9z" />
              <path fill="#3E3935" d="M1144.3,307.1c4.2,7.1,8.3,14.1,12.4,21c3.9,6.6,7.8,13.2,11.7,19.8c1.2,2.1,1,2.4-1.4,2.4
			c-3.6,0-7.2-0.1-10.8,0c-1.5,0.1-2.1-0.5-2.8-1.7c-7-11.7-14-23.3-21-35c-0.8-1.4-1.6-1.6-3.2-1.5c-7.3,0.4-14.6,0.5-21.9,0.7
			c-1.1,0-2.3,0-3.7,0c0,12.5,0,24.9,0,37.4c-4.7,0-9.1,0-13.6,0c0-39.1,0-78,0-117.2c0.7,0,1.3-0.1,1.9-0.1c11.1,0,22.1-0.1,33.2,0
			c11,0.1,20.9,3.4,28.9,11.4c7.7,7.7,10.7,17.4,10.5,28.1c-0.3,12.7-5.2,23.2-15.1,31.1c-0.8,0.6-1.6,1.2-2.5,1.7
			C1146,305.9,1145.2,306.4,1144.3,307.1z M1103.7,246.1c0,18.1,0,35.6,0,52.8c7.5,0,15,0.6,22.3-0.1c12.3-1.2,22.7-9.6,24.2-23.1
			c1.6-13.6-4.5-25.7-19.3-28.1C1122,246,1112.9,246.5,1103.7,246.1z" />
              <path fill="#CEA052" d="M886.9,251.8c-1-4.6-2.9-9.1-6.3-12.4c-4.3-4.1-10.8-6.8-16.8-6.3c-5.3,0.4-10.8,3.4-12.4,8.9
			c-1.3,4.6,0.4,10.2,5.5,11.3c3,0.7,6.9,0.6,9.5-1.2c3.4-2.4-0.2-7.3,2.5-8.9c1.1-0.7,2-1,3.9,0.1c4.4,2.5,7.4,9.8,6.4,16.9
			c-1.1,7.4-9.3,12.7-15.6,15.6c-8.5,3.9-19,2.4-27.8,5.1c-8.2,2.5-16.5,6.5-20.4,14.5c-3.8,7.9-2.4,15.6,3.5,21.6
			c2.5,2.5,8,4,11.2,4.1c8.1,0.3,14.7-6.2,13.3-14.1c-0.5-3-1.7-5.5-4.3-6.9c-3-1.6-7.7-1.8-10.8,1.8c-2.3,2.7-2.3,6.3,0.2,9.2
			c0.6,0.7,0.1,1.7-0.8,1.7c-4.6-0.1-6.9-5.6-6.3-10.8c0.7-6.1,4.5-9.9,13.1-10c5.1-0.1,11.3,2,13.6,7c3.1,6.5,0.2,20.4-3.8,25.7
			c-6.5,8.5-16.4,11.7-26.8,12.8c-10.7,1.1-23.5-1.9-30.7-10.3c-9.9-11.7-8.1-30.8,0.6-42.5c0-0.1,7.7,3.2,8.5,3.4
			c3.8,1,8.1,0.9,11.7-0.7c4-1.9,6.7-5.7,6.4-10.2c-0.2-3.8-2.5-7.5-5.9-9.2c-3.9-1.9-9.5-1-13.6,0c-1.9,0.5-3.8,1.1-5.6,1.9
			c-0.2,0.1-2,1.1-3.1,1.6c-0.4,0.2-1,0.1-1.3-0.2c-3.9-4.8-3.2-12.5-1.2-16.7c4.8-10.1,14.3-9.1,22.7-5.6c3.2,1.3,8.4,0.3,6.6-4.4
			c-0.6-1.6-2.2-2.4-3.6-3.3c-13.8-9.3-33.3-2.3-37.7,12.7c-2.1,7.2-2.1,14,5.7,24.6c0.1,0.1-1.2,1.9-2.9,4.6
			c-2,3.4-4.3,6.5-5.7,10.2c-5.5,14-1.8,32,8.4,42.8c1.3,1.4,2.7,2.7,4.3,3.8c14.6,11.2,35.6,12.4,52.2,5.4c2.6-1.1,5.2-2.5,7.6-4.1
			c7-4.7,12.8-11.2,16.5-18.8c4.2-8.8,3.7-19,0.6-28.1c-1-3.1-0.9-4.8,2.2-6c1.8-0.7,3.4-1.6,5.2-2.2
			C880.9,280.7,890.7,269.3,886.9,251.8z M804.7,275c4.8,3.1-2.4,10.7-14.3,3.2C790.4,278.2,798.9,271.2,804.7,275z" />

              <rect x="834.9" y="-300.5" transform="matrix(1.332669e-06 -1 1 1.332669e-06 382.092 1301.205)" fill="#3E3935" width="13.5" height="1520.2" />

              <rect x="835.1" y="-634.1" transform="matrix(1.332930e-06 -1 1 1.332930e-06 715.6067 967.9889)" fill="#3E3935" width="13.5" height="1520.5" />
              <path fill="#3E3935" d="M1013.2,232c4.4,0.9,8.9,1.5,13.3,2.6c8.5,2.1,19,8.7,24.8,14.9c-3.1,3.2-6.3,6.3-9.1,9.2
			c-4-2.8-7.8-6.2-12.3-8.4c-24.7-12.4-55.4-0.9-62.6,29.2c-3.8,16-0.7,30.9,10.2,43.5c9.1,10.5,21,14.8,34.7,14.2
			c9.6-0.4,18.6-2.7,26.8-8c2.4-1.5,3.5-3.1,3.4-6.2c-0.3-6.7-0.1-13.3-0.1-20.3c-11.1,0-22,0-32.9,0c0-4.6,0-8.9,0-13.3
			c15.5,0,30.8,0,46.5,0c0,0.7,0,1.4,0,2.1c0,13,0,26-0.1,39c0,1.1-0.5,2.4-1.3,3.2c-8.2,8.4-18.3,13.1-29.6,15.5
			c-12.4,2.5-24.7,2.3-36.7-2.3c-15.5-6-26.4-17-32.3-32.8c-5.3-14.2-5.5-28.6-0.8-42.9c6.6-19.6,19.9-32.2,39.8-37.3
			c3.3-0.8,6.7-1.2,10-1.8C1007.8,232,1010.5,232,1013.2,232z" />
            </g>
          </g>
        </svg>

      </router-link>
      <div id="top-nav-link-wrap">

        <div id="nav-items">
          <router-link tag="div" to="/product-list" class="top-nav-link" id="wallpaper-link" @mouseover.native="showNavSection('Wallpaper')" :class="{active: hoverSection == 'Wallpaper'}">
            Wallpaper
          </router-link>

          <router-link tag="div" to="/artists" class="top-nav-link" id="artists-link" @mouseover.native="hideNav()" :class="{active: hoverSection == 'Artists'}">
            Artists
          </router-link>

          <router-link tag="div" to="/find-your-style" class="top-nav-link" id="findyourstyle-link" @mouseover.native="hideNav()" :class="{active: hoverSection == 'FindYourStyle'}">
            Design Style Quiz
          </router-link>

          <router-link tag="div" to="/how-to-home" class="top-nav-link" id="how-to-link" @mouseover.native="showNavSection('HowTo')" :class="{active: hoverSection == 'HowTo'}">
            How To
          </router-link>
          <router-link tag="div" to="/about-us" class="top-nav-link" id="about-us-link" @mouseover.native="showNavSection('AboutUs')" :class="{active: hoverSection == 'AboutUs'}">
            About Us
          </router-link>
        </div>
        <transition nam="slide-fade">
          <div id="top-nav-dropdown" v-show="showNavDrop" :class="hoverSection">
            <div class="top-nav-wrapper" v-if="hoverSection == 'Wallpaper'">
              <!-- <div class="img-wrap section-wrap">
              <router-link tag="div" to="/product/rosa" class="img-inner">

                <div class="section-title">Featured Product</div>
                <img src="https://assets.fathead.com/new_patterns/Banana_Leaf.png">
                <h4>Product Name</h4>
              </router-link>
            </div> -->
              <div class="section-wrap">
                <div class="section-title">Pattern Types</div>
                <ul class="pattern-types">
                  <router-link to="#" tag="li">Abstract</router-link>
                  <router-link to="#" tag="li">Animal</router-link>
                  <router-link to="#" tag="li">Beach</router-link>
                  <router-link to="#" tag="li">Botanical</router-link>
                  <router-link to="#" tag="li">Brick</router-link>
                  <router-link to="#" tag="li">Burlap</router-link>
                  <router-link to="#" tag="li">Chevron</router-link>
                  <router-link to="#" tag="li">Coastal</router-link>
                  <router-link to="#" tag="li">Cultural</router-link>
                  <router-link to="#" tag="li">Damask</router-link>
                  <router-link to="#" tag="li">Fine Arts</router-link>
                  <router-link to="#" tag="li">Floral</router-link>
                  <router-link to="#" tag="li">Folk</router-link>
                  <router-link to="#" tag="li">Food</router-link>
                  <router-link to="#" tag="li">Geometric</router-link>
                  <router-link to="#" tag="li">Illustration</router-link>
                  <router-link to="#" tag="li">Industrial</router-link>
                  <router-link to="#" tag="li">Leather</router-link>
                  <router-link to="#" tag="li">Linen</router-link>
                  <router-link to="#" tag="li">Marble</router-link>
                  <router-link to="#" tag="li">Nature</router-link>
                  <router-link to="#" tag="li">Novelty</router-link>
                  <router-link to="#" tag="li">Paisley</router-link>
                  <router-link to="#" tag="li">Plaid</router-link>
                  <router-link to="#" tag="li">Stone</router-link>
                  <router-link to="#" tag="li">Stripes</router-link>
                  <router-link to="#" tag="li">Texture</router-link>
                  <router-link to="#" tag="li">Tile</router-link>
                  <router-link to="#" tag="li">Tropical</router-link>
                  <router-link to="#" tag="li">Tufted</router-link>
                  <router-link to="#" tag="li">Vintage</router-link>
                  <router-link to="#" tag="li">Watercolor</router-link>
                  <router-link to="#" tag="li">Wood</router-link>
                  <router-link to="#" tag="li">Woven</router-link>
                </ul>
              </div>
              <div class="section-wrap">
                <div class="section-title">Design Types</div>
                <ul class="design-types">
                  <router-link to="#" tag="li">Bohemian</router-link>
                  <router-link to="#" tag="li">Mid-Century</router-link>
                  <router-link to="#" tag="li">Contemporary</router-link>
                  <router-link to="#" tag="li">Modern</router-link>
                  <router-link to="#" tag="li">Country</router-link>
                  <router-link to="#" tag="li">Shabby Chic</router-link>
                  <router-link to="#" tag="li">Damask</router-link>
                  <router-link to="#" tag="li">Traditional</router-link>
                  <router-link to="#" tag="li">Eclectic</router-link>
                  <router-link to="#" tag="li">Victorian</router-link>
                  <router-link to="#" tag="li">Industrial</router-link>
                  <router-link to="#" tag="li">Victorian</router-link>
                  <router-link to="#" tag="li">Kids</router-link>
                  <router-link to="#" tag="li">Nursery</router-link>
                  <router-link to="#" tag="li">Vintage</router-link>
                </ul>
              </div>
              <div class="section-wrap">
                <div class="section-title">Colors</div>
                <ul class="colors">
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: pink"></div>Pink</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: red"></div>Red</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: orange"></div>Orange</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: yellow"></div>Yellow</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: green"></div>Green</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: blue"></div>Blue</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: purple"></div>Purple</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: brown"></div>Brown</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: black"></div>Black</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot" style="background-color: gray"></div>Gray</router-link>
                  <router-link to="#" tag="li">
                    <div class="color-dot white" style="background-color: white"></div>White</router-link>
                </ul>
              </div>
            </div>
            <div class="top-nav-wrapper" v-if="hoverSection == 'HowTo'">
              <div class="section-wrap">

                <div class="section-title">Tutorial Videos</div>
                <ul class="tutorial-videos">
                  <router-link to="#" tag="li">How to Apply</router-link>
                  <router-link to="#" tag="li">Disaster Control</router-link>
                  <router-link to="#" tag="li">Wall Types</router-link>
                  <router-link to="#" tag="li">Matching Your Room</router-link>
                  <router-link to="#" tag="li">Removing Wallpaper</router-link>
                </ul>
              </div>
              <div class="section-wrap">
                <div class="section-title">Support</div>
                <ul class="support">
                  <router-link to="#" tag="li">Return Policy</router-link>
                  <router-link to="#" tag="li">Help</router-link>
                  <router-link to="#" tag="li">Privacy Policy</router-link>
                  <router-link to="#" tag="li">Terms of Use</router-link>
                </ul>
              </div>
            </div>
            <div class="top-nav-wrapper" v-if="hoverSection == 'AboutUs'">
              <div class="section-wrap">

                <ul class="about-us">
                  <router-link to="#" tag="li">Our Artists</router-link>
                  <router-link to="#" tag="li">Mission</router-link>
                  <router-link to="#" tag="li">Our Material</router-link>
                  <router-link to="#" tag="li">Quality</router-link>
                  <router-link to="#" tag="li">Location</router-link>
                  <router-link to="#" tag="li">Contact</router-link>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showWallpaperMenu: false,
      showCollectionsMenu: false,
      showArtistsMenu: false
    };
  },
  methods: {
    ...mapActions({
      showNavSection: "showNavSection",
      hideNav: "hideNav",
      showNav: "showNav"
    })
  },
  computed: {
    ...mapGetters({
      hoverSection: "getHoverSectionFromStore",
      showNavDrop: "getShowNavDropFromStore"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cls-2 {
  fill: #3e3935;
}
</style>
