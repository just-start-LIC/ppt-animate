import boxworkAnimation from './boxworkAnimation.vue'
let boxworkbject = {};
boxworkbject.install = (Vue) => Vue.component(boxworkAnimation.name, boxworkAnimation);
if (typeof window == 'undefined' && window.vue) {
  install(window.vue);
}
export default boxworkbject;