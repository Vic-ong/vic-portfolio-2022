<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { initBreakpoints, useBreakpoints } from '@/composables/breakpoints';
  import { useFixedTopPanel } from '@/composables/utils';
  import { img } from '@/constants/assets';
  import TopPanel from '@/components/TopPanel.vue';

  export default defineComponent({
    name: 'App',
    components: {
      TopPanel,
    },
    setup() {
      initBreakpoints();
      const breakpoints = useBreakpoints();
      const currentRoute = useRoute();
      const fixedTopPanel = useFixedTopPanel(currentRoute);

      return {
        breakpoints,
        currentRoute,
        img,
        fixedTopPanel,
      };
    },
  });
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition
      name="fade"
      mode="out-in"
    >
      <component
        :is="Component"
        :key="route.path"
      />
    </transition>
  </router-view>
</template>

<style>
  /* Fade transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Bounce transition */
  .bounce-enter-active {
    animation: bounce-in .35s;
  }
  .bounce-leave-active {
    animation: bounce-in .2s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Scroll into view animations */
  .animated-component.siv-fade-l-enter-from,
  .animated-component.siv-fade-r-enter-from,
  .animated-component.siv-fade-t-enter-from,
  .animated-component.siv-fade-b-enter-from,
  .animated-component.siv-zoom-enter-from {
    transition: none;
  }
  /* Fade animation */
  .siv-fade-l-enter-active,
  .siv-fade-r-enter-active,
  .siv-fade-t-enter-active,
  .siv-fade-b-enter-active,
  .siv-fade-l-leave-active,
  .siv-fade-r-leave-active,
  .siv-fade-t-leave-active,
  .siv-fade-b-leave-active {
    transition: all 500ms ease;
  }
  .siv-fade-l-enter-from,
  .siv-fade-l-leave-to {
    opacity: 0;
    transform: translate(-2rem, 0);
  }
  .siv-fade-r-enter-from,
  .siv-fade-r-leave-to {
    opacity: 0;
    transform: translate(2rem, 0);
  }
  .siv-fade-t-enter-from,
  .siv-fade-t-leave-to {
    opacity: 0;
    transform: translate(0, 2rem);
  }
  .siv-fade-b-enter-from,
  .siv-fade-b-leave-to {
    opacity: 0;
    transform: translate(0, 2rem);
  }
  /* Zoom animation */
  .siv-zoom-enter-active,
  .siv-zoom-leave-active {
    transition: transform 500ms ease;
  }
  .siv-zoom-enter-from,
  .siv-zoom-leave-to {
    transform: scale(0.9);
  }
</style>
