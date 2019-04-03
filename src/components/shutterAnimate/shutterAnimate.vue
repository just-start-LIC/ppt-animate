<template lang='pug'>
  div
    div.shutterAnimate(ref="shutterAnimate")
        div.leafList
            div(v-for="(i) in array" :key="i" :style="{height:leafHeight,width:leafWidth,float:'left'}")
                div(:class="shutterAnimateType")
        slot(name="shutterAnimate")
</template>
<script>
export default {
  name: "shutterAnimate",
  props: {
    shutterAnimateType: {
      type: String,
      default: "horizontalLeafMoveIn"
    }
  },
  data() {
    return {
      leafHeight: "",
      leafWidth: "",
      array: new Array(6)
    };
  },
  watch: {
    shutterAnimateType(newval, oldval) {
      let shutter = this.$refs.shutterAnimate;
      if (newval.indexOf("horizontal") > -1) {
        this.leafHeight = shutter.offsetHeight / 6 + "px";
        this.leafWidth = "100%";
      } else {
        this.leafWidth = shutter.offsetWidth / 6 + "px";
        this.leafHeight = "100%";
      }
    }
  }
};
</script>
<style lang='stylus'>
animation(argument)
  -moz-animation:argument 1s
  -webkit-animation:argument 1s
  -o-animation:argument 1s
  animation:argument 1s
  background:white

.shutterAnimate 
  position: relative
  overflow: hidden
  
.leafList
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  transform: rotate(180deg)

.horizontalLeafMoveIn 
  width: 100%
  height: 0%
  animation('horizontalLeafMoveIn')

.horizontalLeafMoveOut 
  width: 100%
  height: 100%
  animation('horizontalLeafMoveOut')

@keyframes horizontalLeafMoveIn 
  0% 
    height: 100%
  100% 
    height: 0%
@keyframes horizontalLeafMoveOut 
  0% 
    height: 0%
  100%
    height: 100%

.verticalLeafMoveIn 
  width: 0%
  height: 100%
  animation('verticalLeafMoveIn');

.verticalLeafMoveOut 
  width: 100%
  height: 100%
  animation('verticalLeafMoveOut');

@keyframes verticalLeafMoveIn 
  0%
    width: 100%
  100%
    width: 0%
@keyframes verticalLeafMoveOut 
  0% 
    width: 0%
  100%
    width: 100%
</style>
