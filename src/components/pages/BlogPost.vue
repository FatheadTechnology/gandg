<template>
  <div id="blog-post">
    <div class="header" id="blog-header" style='background-image: url("https://assets.fathead.com/find-your-style-images/contemporary.jpg");'>

    </div>
    <div class="content-wrap">

      <h1>Blog Title</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptatum aut, beatae provident recusandae velit aperiam suscipit vitae illo necessitatibus! Voluptates numquam amet at nemo, doloribus dignissimos voluptas maxime minus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor saepe sed hic, ullam non enim? Accusamus quo ad labore ex, voluptatum corporis aliquid expedita perspiciatis neque harum aliquam hic debitis!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum reiciendis autem vero quisquam deleniti. Placeat inventore explicabo consectetur? Ipsum iste at unde! Odit libero saepe beatae excepturi aliquam blanditiis. Error, dignissimos obcaecati vero optio neque itaque ea doloribus laborum accusamus rerum, quibusdam reiciendis! Laudantium eius, mollitia pariatur illum deserunt doloribus veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit voluptate in itaque, recusandae impedit omnis, possimus perspiciatis voluptas sit similique blanditiis maxime odio consequuntur officia facilis nulla optio. Tempore!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel, vero incidunt necessitatibus rerum dignissimos provident totam temporibus corrupti omnis quae quas fugiat fugit eaque quibusdam laboriosam illum quis esse.</p>
      <h2>Recently Viewed</h2>
      <product-grid-line-mock></product-grid-line-mock>
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
