<script lang="ts">
  import { useBreakpoints } from '@/composables/breakpoints';
import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MediaPlayer',
    props: {
      src: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'video/mp4',
      },
      autoplay: {
        type: Boolean,
        default: true,
      },
      showControls: {
        type: Boolean,
        default: false,
      },
      muted: {
        type: Boolean,
        default: true,
      },
      loop: {
        type: Boolean,
        default: true,
      },
      height: {
        type: Number,
        default: 30,
      },
    },
    setup() {
      const bp = useBreakpoints();

      return {
        bp,
      };
    },
  });
</script>

<template>
  <div>
    <video
      :height="bp.mdAndAbove ? `${height}rem` : `${height * 2 / 3}rem`"
      :autoplay="autoplay"
      :controls="showControls"
      :muted="muted"
      :loop="loop"
    >
      <source
        :src="src"
        :type="type"
      >
    </video>
  </div>
</template>
