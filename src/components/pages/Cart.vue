<template>
  <div id="cart">
    <div id="cart-header">
     <h1> Shopping Cart</h1>
    </div>
    <div id="label-bar">
      <div class="cart-label cart-item"> Pattern</div>
      <div class="cart-label quantity"> Quantity</div>
      <div class="cart-label"> Price</div>
      <div class="cart-label"> Total</div>
      <div class="cart-label"> Remove</div>
    </div>

    <div class="cart-line">
      <div class=" cart-label cart-item">
        some stuff here FLEX ME OUT
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
        Total :
      </div>
      <div id="total-ammount" class="cart-label">
        $190
      </div>
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
