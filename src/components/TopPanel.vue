<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { getNextProject } from '@/composables/utils';
  import IconCaretRight from '@/components/Icons/IconCaretRight.vue';

  export default defineComponent({
    name: 'TopPanel',
    components: {
      IconCaretRight,
    },
    setup() {
      const route = useRoute();
      const nextProject = computed(() => getNextProject(route.name as string || ''));

      return {
        route,
        nextProject,
      };
    },
  });
</script>

<template>
  <div class="flex items-center justify-between h-20 border-b-2 border-gray px-7 md-above:px-14">
    <router-link
      :to="{ name: 'home', params: { scrollToId: route.name === 'about' ? 'about' : 'projects' } }"
      class="text-black"
    >
      <div
        class="text-2xl capitalize md-above:text-3xl"
        style="font-family: 'Ms Madi', cursive;"
      >
        vic ong
      </div>
    </router-link>
    <div class="flex items-center space-x-10">
      <router-link
        v-if="route.name === 'about'"
        :to="{ name: 'home', params: { scrollToId: 'projects' } }"
        class="font-bold text-black"
      >
        <div>Projects</div>
      </router-link>
      <router-link
        v-else
        :to="{ name: nextProject.routeName }"
        class="font-bold text-black"
      >
        <div class="flex items-center space-x-2 text-base transition-transform duration-300 ease-in-out md-above:text-lg hover:translate-x-4">
          <div>Next project</div>
          <div>
            <IconCaretRight class="w-6 h-6" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
