<template>
  <modal name="calculator" width="650px" height="auto" :scrollable="true" class="calculator modal"
         id="calculator-modal">
    <div class="modal-inner top-bar">
      <div class="title">Wallpaper Calculator</div>
      <div @click="hideModal" class="modal-close" id="calculator-close">&times;</div>
    </div>
    <div class="modal-wrap">
      <div class="modal-half">
        <div class="modal-inner">
          <div class="more-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit amet architecto laudantium cum saepe minima. Obcaecati est, magni doloremque velit, quia esse tempore necessitatibus illum tempora sint veniam nisi?
          </div>
          <p class="green emphasized">Please enter units in Feet</p>
          <div class="modal-input-group">
            <div class="input-wrap">
              <div class="modal-title">Tallest Wall Height:</div>
              <input id="calculator-height-ft-input" type="number" name="wall-size-tallest" class="modal-number-input"
                     placeholder="Feet" v-model="heightFt" :class="{'red-border': showError}">
              <input id="calculator-height-in-input" type="number" name="wall-size-tallest" class="modal-number-input"
                     placeholder="Inches" v-model="heightIn" :class="{'red-border': showError}">
            </div>
            <div class="input-wrap">
              <div class="modal-title">Wall Width:</div>
              <input type="number" id="calculator-width-ft-input" name="wall-size-height" class="modal-number-input"
                     placeholder="Feet" v-model="widthsFt[0]" :class="{'red-border': showError}">
              <input type="number" id="calculator-width-in-input" name="wall-size-height" class="modal-number-input"
                     placeholder="Inches" v-model="widthsIn[0]" :class="{'red-border': showError}">
            </div>
            <!--
            MAKE THIS A v-for, improve logic
            -->
            <div class="input-wrap" v-show="wallsShown > 1">
              <div class="modal-title">2nd Wall Width:</div>
              <input type="number" name="wall-size-height" class="modal-number-input" placeholder="Feet"
                     v-model="widthsFt[0]" :class="{'red-border': showError}"> Ft
              <input type="number" name="wall-size-height" class="modal-number-input" placeholder="Inches"
                     v-model="widthsIn[0]" :class="{'red-border': showError}"> Ft
            </div>
            <div class="input-wrap" v-show="wallsShown > 2">
              <div class="modal-title">3rd Wall Width:</div>
              <input type="number" name="wall-size-height" class="modal-number-input" placeholder="Width"
                     v-model="widths[2]"> Ft
            </div>
            <div class="input-wrap" v-show="wallsShown > 3">
              <div class="modal-title">4th Wall Width:</div>
              <input type="number" name="wall-size-height" class="modal-number-input" placeholder="Width"
                     v-model="widths[3]"> Ft
            </div>
            <div class="remove-wall" @click="removeWall" v-show="wallsShown > 1">&minus; Remove a wall</div>
            <div class="add-wall" @click="addWall" v-show="wallsShown < 4">&plus; Add a wall</div>
          </div>
          <div class="btn primary-btn" @click="calculate">Calculate</div>

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
              <div class="total" v-if="!showError && total">You need <i>{{rollCount}}</i>, {{rollHeight}} Foot Rolls</div>
              <div class="error" v-if="showError">Please enter a width and height</div>
              <div class="btn primary-btn" @click="" v-if="!showError && total">Add To Cart</div>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    data() {
      return {
        height: null,
        heightFt: null,
        heightIn: null,
        widths: [],
        widthsFt: [],
        widthsIn: [],
        total: 0,
        showError: false,
        wallsShown: 1,
        rollHeight: null,
        rollCount: 0,
        totalHeight: 0,
      };
    },
    methods: {
      ...mapActions({
        selectSize: "selectSize",
        changeQuantity: "changeQuantityToInt"
      }),
      showModal() {
        this.$modal.show("calculator");
      },
      hideModal() {
        this.$modal.hide("calculator");
      },
      calculate() {
        this.total = 0;
        this.showError = false;
        if (this.heightFt) {
          if (this.heightIn) {
            // Get total height of wall in Inches
            let verticalPadding = 0;
            this.totalHeight = parseInt(this.heightFt * 12) + parseInt(this.heightIn + verticalPadding);
            // if we want to pad the height input by half in inch do it above here at the end of the line
          } else {
            this.totalHeight = this.heightFt * 12;
          }

          if (this.totalHeight < 48) {
            // take those inches and find the right height for the roll
            this.rollHeight = 4;
            this.selectSize(this.rollHeight)
          } else if (this.totalHeight > 48 && this.totalHeight < 126) {
            this.rollHeight = 10.5;
            this.selectSize(this.rollHeight)
          } else if (this.totalHeight > 126 && this.totalHeight < 150) {
            this.rollHeight = 12.5;
            this.selectSize(this.rollHeight)
          } else if (this.totalHeight > 150 && this.totalHeight < 198) {
            this.rollHeight = 16.5;
            this.selectSize(this.rollHeight)
          } else if (this.totalHeight > 198) {
            this.rollHeight = 'Ask marketing &/|| robby for what to do here';
          }

        }
        for (var i = 0; i < this.wallsShown; i++) {
          if (this.widthsFt[i] != null) {
            if (this.widthsIn[i]) {
              // get total wall width
              this.total += parseInt(this.widthsFt[i] * 12) + parseInt(this.widthsIn[i]);
            } else {
              this.total += parseInt(this.widthsFt[i] * 12);
            }

            if (i == (this.widthsFt.length - 1)) {
              this.rollCount = Math.ceil(this.total / 23.5);
              console.log('rollCount total',  this.rollCount)
              this.changeQuantity(this.rollCount);

              //make sure they're getting the right amount by always rounding up
            }
          }
        }


        if (!this.heightFt || !this.widthsFt[0]) {
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
