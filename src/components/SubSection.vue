<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SubSection',
    props: {
      title: {
        type: String,
        default: '',
      },
    },
  });
</script>

<template>
  <div v-bind="$attrs">
    <Title2 class="text-black-lighter">
      {{ title }}
    </Title2>
    <div class="pt-3 space-y-5">
      <slot />
    </div>
  </div>
</template>
