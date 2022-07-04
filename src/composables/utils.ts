import { computed } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

export const scrollTo = (navId: string) => {
  const el = document.querySelector(`#${navId}`);
  if (el === null) {
    console.error('scroll to element is null');
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export const useFixedTopPanel = (route: RouteLocationNormalizedLoaded) => computed(() => {
  return ['home', 'about', 'unreal', 'animation', 'web'].includes(route.name as string);
});
