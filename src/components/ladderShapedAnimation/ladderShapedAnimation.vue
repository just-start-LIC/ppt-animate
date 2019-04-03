<template lang="pug">
    div
        div.adderShapedAnimate(ref="adderShapedAnimate")
            div(:class="['ladderShapedAnimationShade',adderShapedAnimationType]" v-for="(item,index) in ShadeArr" :style="{animationDelay:(index/50) + 's',top:(index*28)+'px'}")

            slot(name="ladderAnimation")
</template>
<script>
export default {
    name:"ladderShapedAnimation",
    data() {
        return {
            ShadeArr:new Array(),
            test:1,
        }
    },
    props: {
    adderShapedType: {
      type: String,
      default: ""
    },
    adderShapedDirection: {
      type: String,
      default: ""
    }
  },
    watch: {
        adderShapedAnimationType(newVal,oldVal){
            this.ShadeArr.length=this.$refs.adderShapedAnimate.offsetHeight/28; 
        }
    },
    computed: {
        adderShapedAnimationType(){
            return "adderShapedAnimation" + this.adderShapedType + this.adderShapedDirection;
        }
    },
}
</script>
<style lang="stylus">
adderShapedAnimation(argument) 
    -moz-animation argument 2s forwards 
    -webkit-animation argument 2s forwards
    -o-animation argument 2s forwards
    animation argument 2s forwards

.adderShapedAnimate 
    position relative
    overflow hidden

.ladderShapedAnimationShade 
    position absolute
.adderShapedAnimationInLeftButtom
    width 0%
    height 28px
    background white
    adderShapedAnimation(adderShapedAnimationInLeftButtom)
@keyframes adderShapedAnimationInLeftButtom
    0%
        width 100%
    100%
        width 0%
</style>
