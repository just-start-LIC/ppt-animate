import ladderShapedAnimation from './ladderShapedAnimation.vue'
const ladderShapedobject={};
ladderShapedobject.install=(Vue)=>Vue.component(ladderShapedAnimation.name,ladderShapedAnimation);
if (typeof window == 'undefined' && window.vue) {
    install(window.vue);
  }
  export default ladderShapedobject;