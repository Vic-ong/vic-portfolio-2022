<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: undefined,
      },
    },
  });
</script>

<template>
  <div class="py-5">
    <div class="space-y-3">
      <slot />
    </div>
  </div>
</template>
