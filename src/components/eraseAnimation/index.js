import earseAnimation from './eraseAnimation.vue'
let eraseobject = {};
eraseobject.install = (Vue) => Vue.component(earseAnimation.name, earseAnimation);
if (typeof window == 'undefined' && window.vue) {
  install(window.vue);
}
export default eraseobject;
