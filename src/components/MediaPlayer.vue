<script lang="ts">
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
    },
  });
</script>

<template>
  <div>
    <video
      height="30rem"
      :autoplay="autoplay"
      :controls="showControls"
      :muted="muted"
      :loop="loop"
    >
      <source
        :src="src"
        type="video/mp4"
      >
    </video>
  </div>
</template>
