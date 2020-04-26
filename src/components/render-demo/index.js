import RenderDemo from './src/render-demo.js';

/* istanbul ignore next */
RenderDemo.install = function(Vue) {
  Vue.component(RenderDemo.name, RenderDemo);
};

export default RenderDemo;