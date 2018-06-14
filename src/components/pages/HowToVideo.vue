<template>
  <div id="how-to-video">
    <h1>How To Hang Removable Wallpaper</h1>
    <p>Watch the video or follow our step-by-step instructions of how to apply and remove your removable wallpaper.</p>
    <div class="video-wrap">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_Lvp6Gl9lUY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div class="steps">
      <div class="left-side">
        <br>
        <b>You'll need the following tools and materials:</b>
        <ul>
          <li>Removable wallpaper</li>
          <li>Measuring tape</li>
          <li>Painter's tape</li>
          <li>Scissors and/or utility knife</li>
          <li>Spackling compound (if there are holes in the wall)</li>
          <li>Sandpaper (if spackling is requiered)</li>
          <li>Squeegee (included)</li>
        </ul>
        <br>
        <h1>Step 1: Prep the Wall</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio vitae necessitatibus quas explicabo ducimus ab eveniet incidunt iste illo. Animi, vel omnis quam cumque aliquam exercitationem facilis rerum mollitia!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus molestiae perferendis ipsa maiores eos id molestias fugiat! Est aliquid laudantium optio quis minus exercitationem suscipit, nisi similique aspernatur at nostrum.</p>
        <br>
        <h1>Step 2: Measure and Cut</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio vitae necessitatibus quas explicabo ducimus ab eveniet incidunt iste illo. Animi, vel omnis quam cumque aliquam exercitationem facilis rerum mollitia!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus molestiae perferendis ipsa maiores eos id molestias fugiat! Est aliquid laudantium optio quis minus exercitationem suscipit, nisi similique aspernatur at nostrum.</p>
        <br>
        <h1>Step 3: Practice Hanging</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio vitae necessitatibus quas explicabo ducimus ab eveniet incidunt iste illo. Animi, vel omnis quam cumque aliquam exercitationem facilis rerum mollitia!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus molestiae perferendis ipsa maiores eos id molestias fugiat! Est aliquid laudantium optio quis minus exercitationem suscipit, nisi similique aspernatur at nostrum.</p>
        <br>
        <h1>Step 4: Hang the Removable Wallpaper</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio vitae necessitatibus quas explicabo ducimus ab eveniet incidunt iste illo. Animi, vel omnis quam cumque aliquam exercitationem facilis rerum mollitia!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus molestiae perferendis ipsa maiores eos id molestias fugiat! Est aliquid laudantium optio quis minus exercitationem suscipit, nisi similique aspernatur at nostrum.</p>
        <br>
        <h1>Step 5: Cut off Excess Paper</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio vitae necessitatibus quas explicabo ducimus ab eveniet incidunt iste illo. Animi, vel omnis quam cumque aliquam exercitationem facilis rerum mollitia!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus molestiae perferendis ipsa maiores eos id molestias fugiat! Est aliquid laudantium optio quis minus exercitationem suscipit, nisi similique aspernatur at nostrum.</p>
        <br>
        <br>
        <br>

      </div>
      <div class="right-side">
        <h3>More How-To Videos</h3>
        <div class="vertical-videos">

          <div class="video-wrap">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/mtjIFRozEGk?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <span class="product-grid-item-header"> Video Title</span>

          <div class="video-wrap">
            <iframe width="25%" height="315" src="https://www.youtube.com/embed/LDnGhut8eJM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <span class="product-grid-item-header"> Video Title</span>

          <div class="video-wrap">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/DttfAYeS3C0?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <span class="product-grid-item-header"> Video Title</span>

          <div class="video-wrap">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/O5_hGBYfttk?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <span class="product-grid-item-header"> Video Title</span>

        </div>
      </div>

    </div>
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
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
