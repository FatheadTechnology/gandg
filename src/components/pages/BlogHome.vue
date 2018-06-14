<template>
  <div id="blog-home">
    <div class="header" id="blog-header" style='background-image: url("https://assets.fathead.com/find-your-style-images/mcm.jpg");'>

    </div>
    <div class="header-bar">
      <h2>BLOG</h2>
    </div>
    <div class="blog-posts">
      <div class="blog">
        <div class="blog-inner-left">
          <h1>Blog Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam? Nemo quod rerum voluptate temporibus a amet rem reiciendis libero modi ea error nam harum cumque eaque dolorum, maiores corporis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cupiditate consequuntur libero expedita quibusdam facilis id eveniet totam. Unde nulla delectus voluptatum nobis voluptates asperiores impedit error cupiditate reiciendis iste?</p>
        </div>
        <div class="blog-inner-right" style='background: url(http://assets.fathead.com/find-your-style-images/victorian.jpg); background-size: cover'>
        </div>
      </div>
      <div class="blog">
        <div class="blog-inner-left">
          <h1>Blog Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam? Nemo quod rerum voluptate temporibus a amet rem reiciendis libero modi ea error nam harum cumque eaque dolorum, maiores corporis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cupiditate consequuntur libero expedita quibusdam facilis id eveniet totam. Unde nulla delectus voluptatum nobis voluptates asperiores impedit error cupiditate reiciendis iste?</p>
        </div>
        <div class="blog-inner-right" style='background: url(http://assets.fathead.com/find-your-style-images/header.jpg); background-size: cover'>
        </div>
      </div>
      <div class="blog">
        <div class="blog-inner-left">
          <h1>Blog Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam? Nemo quod rerum voluptate temporibus a amet rem reiciendis libero modi ea error nam harum cumque eaque dolorum, maiores corporis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cupiditate consequuntur libero expedita quibusdam facilis id eveniet totam. Unde nulla delectus voluptatum nobis voluptates asperiores impedit error cupiditate reiciendis iste?</p>
        </div>
        <div class="blog-inner-right" style='background: url(http://assets.fathead.com/find-your-style-images/mcm.jpg); background-size: cover'>
        </div>
      </div>
      <div class="blog">
        <div class="blog-inner-left">
          <h1>Blog Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ullam? Nemo quod rerum voluptate temporibus a amet rem reiciendis libero modi ea error nam harum cumque eaque dolorum, maiores corporis.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cupiditate consequuntur libero expedita quibusdam facilis id eveniet totam. Unde nulla delectus voluptatum nobis voluptates asperiores impedit error cupiditate reiciendis iste?</p>
        </div>
        <div class="blog-inner-right" style='background: url(http://assets.fathead.com/find-your-style-images/contemporary.jpg); background-size: cover'>
        </div>
      </div>
    </div>

    <h2>Recently Viewed</h2>
    <product-grid-line-mock></product-grid-line-mock>

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
