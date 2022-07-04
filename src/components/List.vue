<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'List',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  });
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="flex pl-5 space-x-5">
        <div class="pt-3">
          <div class="w-2 h-2 bg-black rounded-full" />
        </div>
        <div class="flex-1">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
