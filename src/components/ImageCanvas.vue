<script lang="ts">
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    name: 'ImageCanvas',
    props: {
      src: {
        type: String,
        required: true,
      },
      height: {
        type: String,
        default: '20rem',
      },
      shadow: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      return {
        imgStyle: computed(() => ({
          height: props.height,
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
