<template>
  <div id="cart">
    <div id="cart-header">
     <h1> Shopping Cart</h1>
    </div>
    <div id="label-bar">
      <div class="cart-label cart-item"> Pattern</div>
      <div class="cart-label quantity"> Quantity</div>
      <div class="cart-label"> Price</div>
      <div class="cart-label"> Total Price</div>
      <div class="cart-label"> Remove</div>
    </div>

    <div class="cart-line" v-for="i in 4">
      <div class=" cart-label cart-item">
        <div class="cart-item-image-container">
        <div class="cart-item-image"></div></div>
        <div class="cart-item-details">
          <h4>Product Name</h4>
          <span>some thing here</span>
          <span>Donec id elit non mi  metus.</span>
          <span>some thing here</span>
          <span>TODO : ADD FREE SQUEEGEE & KNIFE</span>
        </div>

      </div>

      <div class="cart-label quantity">
        from old site quantity here
      </div>

      <div class="cart-label">$95</div>
      <div class="cart-label">$190</div>
      <div class="cart-label remove">x</div>

    </div>

    <div id="cart-last-line">
      <div id="promo" class="cart-label">
        PROMO STUFF HERE
      </div>
      <div id="total" class="cart-label">
        Total Price :
      </div>
      <div id="total-ammount" class="cart-label">
        ${{190 * 4}}
      </div>
    </div>

    <div id="checkout-btn-container">
      <div class="spacer"></div>
      <div class="btn primary-btn">CHECK OUT</div>
      <div class="spacer"></div>
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
