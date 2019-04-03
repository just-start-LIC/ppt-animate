<template lang="pug">
    div
        div.eraseAnimate
            div(:class="['eraseAnimationShade',eraseAnimationType]") 
            slot(name="eraseAnimation")
</template>
<script>
export default {
    name:"earseAnimation",
    props:{
        eraseType:{
            type:String,
            default:""
        },
        eraseDirection:{
            type:String,
            default:""
        }
    },
    computed: {
        eraseAnimationType(){
            return "eraseAnimation"+this.eraseDirection+this.eraseType
        }
    },
}
</script>
<style lang="stylus">
eraseAnimation(argument)
  -moz-animation argument 1s
  -webkit-animation argument 1s
  -o-animation argument 1s
  animation argument 1s
.eraseAnimate
    position relative
    overflow hidden
.eraseAnimationShade
    position absolute
    background white
.eraseAnimationTopIn
    width 100%
    height 0%
    eraseAnimation(eraseAnimationTopIn)
@keyframes eraseAnimationTopIn
    0%
        top 0%
        height 100%
    100%
        top 100%
.eraseAnimationButtomIn
    width 100%
    height 0%
    eraseAnimation(eraseAnimationButtomIn)
@keyframes eraseAnimationButtomIn
    0%
        height 100%
    100%
        height 0%
.eraseAnimationLeftIn
    width 0%
    height 100%
    eraseAnimation(eraseAnimationLeftIn)
@keyframes eraseAnimationLeftIn
    0%
        left 0%
        width 100%
    100%
        left 100%
        width 0%
.eraseAnimationRightIn
    width 0%
    height 100%
    eraseAnimation(eraseAnimationRightIn)
@keyframes eraseAnimationRightIn
    0%
        width 100%
    100%
        width 0%
.eraseAnimationTopOut
    width 100%
    height 100%
    eraseAnimation(eraseAnimationTopOut)
@keyframes eraseAnimationTopOut
    0%
        height 0%
    100%
        height 100%
.eraseAnimationButtomOut
    width 100%
    height 100%
    eraseAnimation(eraseAnimationButtomOut)
@keyframes eraseAnimationButtomOut
    0%
        height 0%
        top 100%
    100%
        height 100%
        top 0%
.eraseAnimationLeftOut
    width 100%
    height 100%
    transform rotateY(180deg)
    eraseAnimation(eraseAnimationLeftOut)
@keyframes eraseAnimationLeftOut
    0%
        width 0%
    100%
        width 100%
.eraseAnimationRightOut
    width 100%
    height 100%
    eraseAnimation(eraseAnimationRightOut)
@keyframes eraseAnimationRightOut
    0%
        width 0%
        left 100%
    100%
        left 0%
        width 100%       
</style>

