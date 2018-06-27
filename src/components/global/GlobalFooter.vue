<template>
  <div id="global-footer">
    <div class="small-nav-col" id="contact-us">
      <!--
TODO : MAKE THESE LINKS WORK WITH THE PRISMIC INTERPOLATOR : JACOB
-->

      <h3>CONTACT</h3>
      <a href="tel:877-328-8877">877-328-8877</a>
      <a href="mailto:support@guildandgrace.com">E-mail Support</a>
      <a href="#">Track Your Order</a>
      <a href="#">Help Center</a>
      <a href="#">Careers</a>
    </div>

    <div class="small-nav-col" id="support">
      <h3>SUPPORT</h3>
      <a href="#">FAQs</a>
      <a href="#">Glossary</a>
      <a href="#">Return Policy</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
    </div>

    <div class="spacer"></div>
    <div id="email-col">
      <h3>STAY CONNECTED</h3>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'GFooter',
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
