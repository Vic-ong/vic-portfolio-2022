<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Section',
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
    <Title>{{ title }}</Title>
    <div class="pt-5 space-y-7">
      <slot />
    </div>
  </div>
</template>
