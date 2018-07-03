<template>
  <div id="global-footer">
    <div class="small-nav-col" id="contact-us">
      <!--
TODO : MAKE THESE LINKS WORK WITH THE PRISMIC INTERPOLATOR : JACOB
-->

      <h3>Contact</h3>
      <a href="tel:877-328-8877">877-328-8877</a>
      <a href="mailto:support@guildandgrace.com">E-mail Us</a>
      <a href="order-tracking">Chat</a>
      <a href="#">Help Center</a>
      <a href="#">Become a G&G Designer</a>
      <!-- <a href="#">Careers</a> -->
    </div>

    <div class="small-nav-col" id="support">
      <h3>Support</h3>
      <a href="/faq">FAQs</a>
      <a href="return-policy">Return Policy</a>
      <a href="privacy-policy">Privacy Policy</a>
      <a href="terms-of-use">Terms of Use</a>
      <a href="glossary">Glossary</a>
    </div>
    <div class="small-nav-col" id="about">
      <h3>About</h3>
      <a href="/faq">Our Company</a>
      <a href="return-policy">Leadership</a>
      <a href="privacy-policy">Press Releases</a>
      <a href="terms-of-use">In the News</a>
    </div>
    <div class="small-nav-col" id="social">
      <h3>Stay Connected</h3>
      <a href="/faq">
        <img src="./../../assets/icomoon_6_icons/SVG/facebook2.svg" alt="facebook">
      </a>
      <a href="/faq">
        <img src="./../../assets/icomoon_6_icons/SVG/pinterest.svg" alt="pintrest">
      </a>
      <a href="/faq">
        <img src="./../../assets/icomoon_6_icons/SVG/twitter.svg" alt="twitter">
      </a>
      <a href="/faq">
        <img src="./../../assets/icomoon_6_icons/SVG/youtube.svg" alt="youtube">
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "GFooter",
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
