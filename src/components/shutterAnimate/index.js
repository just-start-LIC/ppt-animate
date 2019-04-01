import shutterAnimate from './shutterAnimate.vue';
let shutter = {};
shutter.install = Vue => Vue.component(shutterAnimate.name, shutterAnimate);
if (typeof window == 'undefined' && window.vue) {
  install(window.vue);
}
export default shutter;
