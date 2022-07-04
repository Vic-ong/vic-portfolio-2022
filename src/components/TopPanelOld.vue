<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFixedTopPanel } from '@/composables/utils';
  import { routeList } from '@/constants/routes';

  export default defineComponent({
    name: 'TopPanel',
    setup() {
      const currentRoute = useRoute();
      const fixedTopPanel = useFixedTopPanel(currentRoute);

      return {
        currentRoute,
        fixedTopPanel,
        routeList,
      };
    },
  });
</script>

<template>
  <div
    id="top-panel"
    class="bg-white"
    :class="fixedTopPanel ? 'w-screen shadow-sm' : 'shadow-xl'"
    v-bind="$attrs"
  >
    <div class="flex items-center justify-between h-20 px-10 space-x-10 md-above:px-14">
      <div class="flex space-x-12">
        <router-link
          v-for="route in routeList"
          :key="route.name"
          :to="{ name: route.name }"
          class="text-black"
          :class="currentRoute.name === route.name ? 'font-semibold cursor-default' : 'duration-150 ease-in-out transform highlight hover:text-black-darker'"
        >
          <div>{{ route.text }}</div>
        </router-link>
        <a
          href="https://drive.google.com/file/d/161cbQa_guJdmQe3Oy3JCplWtEm18VQpR/view?usp=sharing"
          target="_blank"
          class="text-black duration-150 ease-in-out transform highlight hover:text-black-darker"
        >
          Résumé
        </a>
      </div>
      
      <router-link
        :to="{ name: 'home' }"
        class="text-2xl font-bold text-black"
        style="font-family: 'Ms Madi', cursive;"
      >
        <div>Vic Ong</div>
      </router-link>
    </div>
  </div>
</template>
