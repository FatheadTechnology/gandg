<template>
  <div id="about-us">
    <div class="header" id="about-us-header">
      <div class="header-content">
        <h2>About Us</h2>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
</p>
      </div>
    </div>

    <h2>Dapibus Elit Sit</h2>
    <p>
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. </p>

    <h2>Egestas Purus</h2>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <h2>Cras Tortor Vehicula Egestas</h2>
    <p>
      Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <h2>Inceptos Etiam</h2>
    <p>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum.</p>

    <br>
    <br>
    <br>

    <h2>Recently Viewed</h2>
    <product-grid-line-mock></product-grid-line-mock>

    <!--
    TODO : Make Global Btn Component that takes in button type and where to
    -->
    <div class="btn-center-container">
      <div class="btn primary-btn">See all viewed patterns</div>
    </div>

  </div>


</template>

<script>
  import ProductGridLineMock from '../ProductGridLineMock'

  export default {
    name: 'HelloWorld',
    components: {
      ProductGridLineMock
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

