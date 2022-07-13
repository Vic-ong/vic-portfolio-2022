<script lang="ts">
  import { useBreakpoints } from '@/composables/breakpoints';
  import { defineComponent } from 'vue';
  import { footage } from '@/constants/assets';

  export default defineComponent({
    setup() {
      const bp = useBreakpoints();

      return {
        bp,
        footage,
      };
    },
  });
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-black-darker">
    <video
      autoplay
      controls
      style="height: 50rem;"
    >
      <source
        :src="footage.reels.v2"
        type="video/mp4"
      >
    </video>
    <!-- <video
      :height="bp.mdAndAbove ? `50rem` : `${30 * 2 / 3}rem`"
      autoplay
      controls
    >
      <source
        :src="footage.reel"
        type="video/mp4"
      >
    </video> -->
  </div>
</template>
