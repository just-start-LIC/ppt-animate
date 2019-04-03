<template lang="pug">
    div
        div.boxworkAnimate
            div(:class="['boxworkAnimationShade',boxworkAnimationType]")
            slot(name="boxworkAnimationShade")
</template>
<script>
export default {
  name: "boxworkAnimation",
  props: {
    boxworkType: {
      type: String,
      default: "Inside"
    },
    boxworkDirection: {
      type: String,
      default: "In"
    }
  },
  computed: {
    boxworkAnimationType() {
      return "boxworkAnimation" + this.boxworkType + this.boxworkDirection;
    }
  }
};
</script>
<style lang="stylus">
boxworkAnimation(argument) 
    -moz-animation argument 2s
    -webkit-animation argument 2s
    -o-animation argument 2s
    animation argument 2s

.boxworkAnimate 
    position relative
    overflow hidden

.boxworkAnimationShade 
    position absolute

.boxworkAnimationInsideIn 
    width 100%
    height 100%
    background white
    transform scale(0)
    boxworkAnimation(boxworkAnimationInsideIn)

@keyframes boxworkAnimationInsideIn 
    0% 
        transform scale(1)
    100% 
        transform scale(0)
        
.boxworkAnimationInsideOut
    width 100%
    height 100%
    top 50%
    left 50%
    transform translate(-50%,-50%)
    border 9999999px solid white
    boxworkAnimation(boxworkAnimationInsideOut)

@keyframes boxworkAnimationInsideOut 
    0%
        width 0%
        height 0%
    100%
        width 100%
        height  100%

.boxworkAnimationOutsideOut 
    width 100%
    height 100%
    transform scale(1)
    background white
    boxworkAnimation(boxworkAnimationOutsideOut)

@keyframes boxworkAnimationOutsideOut 
    0% 
        transform scale(0)
    100% 
        transform scale(1)

.boxworkAnimationOutsideIn
    width 0%
    height 0%
    top 50%
    left 50%
    transform translate(-50%,-50%)
    border 9999999px solid white
    boxworkAnimation(boxworkAnimationOutsideIn)
    
@keyframes boxworkAnimationOutsideIn 
    0%
        width 100%
        height 100%
    100%
        width 0%
        height  0%
</style>