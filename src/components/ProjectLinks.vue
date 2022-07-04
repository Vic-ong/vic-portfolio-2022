<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ProjectLinks',
    props: {
      presentation: {
        type: String,
        default: undefined,
      },
      demo: {
        type: String,
        default: undefined,
      },
      source: {
        type: String,
        default: undefined,
      },
    },
  });
</script>

<template>
  <div class="pl-5">
    <div
      v-if="presentation"
      class="flex"
    >
      🖥️
      <a
        :href="presentation"
        target="_blank"
        class="pl-2"
      >
        Presentation
      </a>
    </div>
    <div
      v-if="demo"
      class="flex"
    >
      🚀
      <a
        :href="demo"
        target="_blank"
        class="pl-2"
      >
        Live demo
      </a>
    </div>
    <div
      v-if="source"
      class="flex"
    >
      📦
      <a
        :href="source"
        target="_blank"
        class="pl-2"
      >
        Source code
      </a>
    </div>
  </div>
</template>
