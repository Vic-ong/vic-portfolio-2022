<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';

  export default defineComponent({
    name: 'PageContainer',
    props: {
      menuRightOffset: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const bp = useBreakpoints();

      const containerWidth = computed(() => {
        let width = '20rem';
        if (bp.value['2xl']) {
          width = '60rem';
        } else if (bp.value.xl) {
          width = '50rem';
        } else if (bp.value.lgAndAbove) {
          width = '40rem';
        } else if (bp.value.mdAndAbove) {
          width = '30rem';
        }
        return { width };
      });

      return {
        bp,
        containerWidth,
      };
    },
  });
</script>

<template>
  <div
    class="flex justify-center p-7"
    :class="[
      menuRightOffset ? 'md-above:pt-12 md-above:pl-12 md-above:pr-52' : 'md-above:p-12',
    ]"
  >
    <div :style="containerWidth">
      <slot />
    </div>
  </div>
</template>
