<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'TopPanel',
    setup() {
      const route = useRoute();

      return { route };
    },
  });
</script>

<template>
  <div class="flex items-center justify-between h-20 border-b-2 border-gray px-14">
    <router-link
      :to="{ name: 'home', params: { scrollToId: route.name === 'about' ? 'about' : 'projects' } }"
      class="text-black"
    >
      <div
        class="text-3xl capitalize"
        style="font-family: 'Ms Madi', cursive;"
      >
        vic ong
      </div>
    </router-link>
    <div class="flex items-center space-x-10">
      <router-link
        v-if="route.name === 'about'"
        :to="{ name: 'home', params: { scrollToId: 'projects' } }"
        class="text-black"
      >
        <div>Projects</div>
      </router-link>
      <router-link
        v-else
        :to="{ name: 'home', params: { scrollToId: 'projects' } }"
        class="text-black"
      >
        <div>Projects</div>
      </router-link>
    </div>
  </div>
</template>
