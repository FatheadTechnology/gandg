<template>
  <div class="cart-items" id="cart-items">
    <div v-if="!cart.length">
      <div class="title" id="empty-cart-text">Your Cart Is Empty :(</div>
      <router-link class="big button" to="/wallpaper" id="wallpaper-link-btn">Start Shopping!</router-link>
    </div>
    <div v-for="item in cart" class="cart-item" :id="item.DisplayName">
      <router-link class="cart-image-wrap" :to="`/product/${item.ProductUrl}`"><img :src="`${item.Images.Thumbnail}`" :alt="`${item.DisplayName}`" class="cart-image"></router-link>
      <router-link class="no-style" :to="`/product/${item.ProductUrl}`">
        <div class="pattern-name title">{{item.DisplayName}}</div>
        <span>{{item.MaterialDisplayName}} - {{item.ColorWay.ColorWayDisplayName}} - {{item.SizeDisplayName}}</span>
      </router-link>
      <span class="cart-item-price">${{Math.round(item.ListPrice*item.quantity*100)/100}}<br>
        <span class="subtext">({{item.quantity}}&nbsp;@&nbsp;{{item.ListPrice}})</span>
      </span>
      <div class="button-wrap">
        <cart-quantity-selector :product="item"></cart-quantity-selector>
        <div class="tiny plain red button" @click="removeFromCart(item)">Remove</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WallpaperPattern from "@/components/global/WallpaperPattern";
import CartQuantitySelector from "@/components/pdp/CartQuantitySelector";

export default {
  components: {
    WallpaperPattern,
    CartQuantitySelector
  },
  props: ["cart"],
  methods: {
    ...mapActions({
      removeFromCart: "removeFromCart",
      getCartTotal: "getCartTotal",
      getSalesTax: "getSalesTax",
      getShippingCost: "getShippingCost"
    })
  },
  mounted() {},
  updated() {
    this.getCartTotal();
    this.getSalesTax();
    this.getShippingCost();
  }
};
</script>

