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
  },
};
</script>
<style lang='stylus'>
.shutterAnimate {
  position: relative;
  overflow: hidden;
}
.leafList
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(180deg);
  
.horizontalLeafMoveIn {
  width: 100%;
  height: 0%;
  -moz-animation: horizontalLeafMoveIn 1s; /* Firefox */
  -webkit-animation: horizontalLeafMoveIn 1s; /* Safari and Chrome */
  -o-animation: horizontalLeafMoveIn 1s; /* Opera */
  animation: horizontalLeafMoveIn 1s; /* Opera */
  background: white;
}
.horizontalLeafMoveOut {
  width: 100%;
  height: 100%;
  -moz-animation: horizontalLeafMoveOut 1s; /* Firefox */
  -webkit-animation: horizontalLeafMoveOut 1s; /* Safari and Chrome */
  -o-animation: horizontalLeafMoveOut 1s; /* Opera */
  animation: horizontalLeafMoveOut 1s; /* Opera */
  background: white;
}
@keyframes horizontalLeafMoveIn {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
@keyframes horizontalLeafMoveOut {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
.verticalLeafMoveIn {
  width: 0%;
  height: 100%;
  -moz-animation: verticalLeafMoveIn 1s; /* Firefox */
  -webkit-animation: verticalLeafMoveIn 1s; /* Safari and Chrome */
  -o-animation: verticalLeafMoveIn 1s; /* Opera */
  animation: verticalLeafMoveIn 1s; /* Opera */
  background: white;
}
.verticalLeafMoveOut {
  width: 100%;
  height: 100%;
  -moz-animation: verticalLeafMoveOut 1s; /* Firefox */
  -webkit-animation: verticalLeafMoveOut 1s; /* Safari and Chrome */
  -o-animation: verticalLeafMoveOut 1s; /* Opera */
  animation: verticalLeafMoveOut 1s; /* Opera */
  background: white;
}
@keyframes verticalLeafMoveIn {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
@keyframes verticalLeafMoveOut {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
