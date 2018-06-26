<template>
  <div class="cart-total" id="cart-total-container">
    <div class="total-inner">
      <h1>CART TOTAL</h1>
      <div class="cart-line">
        <span>Subtotal</span>
        <span id="cart-total">${{cartTotal}}</span>
      </div>
      <hr>
      <div class="cart-line">
        <span>Shipping</span>
        <span id="shipping-calc">${{calcShipping()}}</span>
      </div>
      <div class="cart-line">
        <span>Tax Estimate</span>
        <span id="tax-calc">${{calcTax()}}</span>
      </div>
      <hr>
      <div class="cart-line">
        <span>Total</span>
        <span id="final-total">${{calcFinalTotal()}}</span>
      </div>
      <div class="checkout-btn-wrap">
        <div class="btn primary-btn">CHECKOUT</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["cart"],
  computed: {
    ...mapGetters({
      //TODO Get shipping, tax, and subtotal
      cartTotal: "getCartTotalFromStore",
      salesTaxPercent: "getSalesTaxPercentFromStore",
      shippingCost: "getShippingCostFromStore"
    })
  },
  methods: {
    calcTax() {
      var tax = this.cartTotal * (this.salesTaxPercent / 100);
      var rounded = Math.round(tax * 100) / 100;
      return rounded;
    },
    calcShipping() {
      var shipping = Math.round(this.cartTotal * this.shippingCost * 100) / 100;
      return shipping;
    },
    calcFinalTotal() {
      var total = this.calcTax() + this.calcShipping() + this.cartTotal;
      return Math.round(total * 100) / 100;
    },
    ...mapActions({
      //TODO
      getCartTotal: "getCartTotal",
      getShipping: "getShipping"
    })
  },
  mounted() {
    this.getCartTotal();
  }
};
</script>

<style scoped lang="scss">
</style>
