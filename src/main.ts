import { createApp, Directive, DirectiveBinding, VNode } from 'vue';
import App from './App.vue';
import './index.css';

export const appear: Directive = {
  beforeMount(element: HTMLElement) {
    element.style.visibility = 'hidden';
  },
  updated(element: HTMLElement, 
          binding: DirectiveBinding<boolean>, 
          node: VNode) {
    if (!binding.value === !binding.oldValue 
        || null === node.transition) {
      return;
    }
    if (!binding.value) {
      node.transition.leave(element, () => {
        element.style.visibility = 'hidden';
      });
      return;
    }
    node.transition.beforeEnter(element);
    element.style.visibility = '';
    node.transition.enter(element);
  },
};

// composables
import { registerRouter } from '@/composables/router';
import { registerComponents } from '@/composables/globalComponents';

const app = createApp(App);
registerRouter(app);
registerComponents(app);
app.directive('appear', appear);
app.mount('#app');
