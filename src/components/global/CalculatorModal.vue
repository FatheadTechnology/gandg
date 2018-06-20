<template>
  <modal name="calculator" width="650px" height="auto" :scrollable="true" class="calculator modal" id="calculator-modal">
    <div class="modal-inner top-bar">
      <div class="title">Wallpaper Calculator</div>
      <div @click="hideModal" class="modal-close" id="calculator-close">&times;</div>
    </div>
    <div class="modal-wrap">
      <div class="modal-half">
        <div class="modal-inner">
          <div class="more-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit amet architecto laudantium cum saepe minima. Obcaecati est, magni doloremque velit, quia esse tempore necessitatibus illum tempora sint veniam nisi?</div>
          <p class="green emphasized">Please enter units in Feet</p>
          <div class="modal-input-group">
            <div class="input-wrap">
              <div class="modal-title">Tallest Wall Height:</div>
              <input id="calculator-height-input" type="number" name="wall-size-tallest" class="modal-number-input" placeholder="Height" v-model="height" :class="{'red-border': showError}"> Ft
            </div>
            <div class="input-wrap">
              <div class="modal-title">Wall Width:</div>
              <input type="number" id="calculator-width-input" name="wall-size-height" class="modal-number-input" placeholder="Width" v-model="widths[0]" :class="{'red-border': showError}"> Ft
            </div>
            <!--
            MAKE THIS A v-for, improve logic
            -->
            <div class="input-wrap" v-show="wallsShown > 1">
              <div class="modal-title">2nd Wall Width:</div>
              <input type="number" name="wall-size-height" class="modal-number-input" placeholder="Width" v-model="widths[1]"> Ft
            </div>
            <div class="input-wrap" v-show="wallsShown > 2">
              <div class="modal-title">3rd Wall Width:</div>
              <input type="number" name="wall-size-height" class="modal-number-input" placeholder="Width" v-model="widths[2]"> Ft
            </div>
            <div class="input-wrap" v-show="wallsShown > 3">
              <div class="modal-title">4th Wall Width:</div>
              <input type="number" name="wall-size-height" class="modal-number-input" placeholder="Width" v-model="widths[3]"> Ft
            </div>
            <div class="remove-wall" @click="removeWall" v-show="wallsShown > 1">&minus; Remove a wall</div>
            <div class="add-wall" @click="addWall" v-show="wallsShown < 4">&plus; Add a wall</div>
          </div>
          <div class="btn primary-btn" @click="calculate">Calculate</div>
          <div class="total" v-if="!showError && total">You need {{total}} sq.ft. of wallpaper!</div>
          <div class="error" v-if="showError">Please enter a width and height</div>
        </div>
      </div>
      <div class="modal-half">
        <div class="modal-inner">
          <img src="https://assets.fathead.com/evolution/calculator_img.jpg" alt="Height and Width">
          <div class="right-side-info">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, beatae?</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      height: null,
      widths: [],
      total: 0,
      showError: false,
      wallsShown: 1
    };
  },
  methods: {
    showModal() {
      this.$modal.show("calculator");
    },
    hideModal() {
      this.$modal.hide("calculator");
    },
    calculate() {
      this.total = 0;
      this.showError = false;
      for (var i = 0; i < this.wallsShown; i++) {
        if (this.widths[i] != null) {
          this.total += this.height * this.widths[i];
        }
      }
      if (!this.height || !this.widths[0]) {
        this.showError = true;
      }
    },
    addWall() {
      this.wallsShown += 1;
    },
    removeWall() {
      this.wallsShown -= 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
