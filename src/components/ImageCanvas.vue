<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';

  export default defineComponent({
    name: 'ImageCanvas',
    props: {
      src: {
        type: String,
        required: true,
      },
      height: {
        type: Number,
        default: 20,
      },
      shadow: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const bp = useBreakpoints();

      return {
        imgStyle: computed(() => ({
          height: bp.value.mdAndAbove ? `${props.height}rem` : 'auto',
        })),
      };
    },
  });
</script>

<template>
  <div class="flex justify-center">
    <img
      :src="src"
      :style="imgStyle"
      :class="shadow ? 'shadow-md' : ''"
      class="object-cover"
    >
  </div>
</template>
