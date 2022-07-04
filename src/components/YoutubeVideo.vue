<script lang="ts">
  import { defineComponent } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';

  export default defineComponent({
    name: 'YoutubeVideo',
    props: {
      id: {
        type: String,
        required: true,
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
  <div class="flex justify-center">
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${id}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding;"
      :style="bp.lgAndAbove ? 'height: 30rem; width: 100%;' : 'height: 15rem; width: 100%'"
      allowfullscreen
    />
  </div>
</template>
