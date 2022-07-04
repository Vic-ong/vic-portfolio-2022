<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFixedTopPanel } from '@/composables/utils';

  export default defineComponent({
    name: 'PageContainer',
    props: {
      backgroundImg: {
        type: String,
        default: undefined,
      },
      offsetTop: {
        type: Boolean,
        default: false,
      },
      noPadding: {
        type: Boolean,
        default: false,
      },
      copyright: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const route = useRoute();
      const fixedTopPanel = useFixedTopPanel(route);

      return {
        route,
        fixedTopPanel,
      };
    },
  });
</script>

<template>
  <div
    :style="backgroundImg ? {
      backgroundImage: `url(${backgroundImg})`,
    } : ''"
    :class="[
      noPadding ? 'p-0' : offsetTop ? 'pt-28 px-10 py-10 md-above:px-14' : 'px-10 py-10 md-above:px-14',
      fixedTopPanel ? 'h-screen w-screen overflow-y-scroll hide-scrollbar' : 'h-screen-adjusted',
    ]"
    v-bind="$attrs"
  >
    <slot />
    <div
      v-if="copyright"
      class="absolute text-sm bottom-2 text-gray-darken"
    >
      Vic Ong © 2022
    </div>
  </div>
</template>
