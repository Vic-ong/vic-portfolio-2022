<script lang="ts">
  import { defineComponent } from 'vue';
  import { routeList } from '@/constants/routes';
  import { img } from '@/constants/assets';

  export default defineComponent({
    name: 'LandingPage',
    components: {
    },
    setup() {
      return {
        routeList,
        img,
      };
    },
  });
</script>

<template>
  <PageContainer
    class="flex flex-col items-center justify-center"
    :background-img="img.bgHomepage"
    copyright
  >
    <div
      class="relative text-center"
      style="
        font-family: 'Ms Madi', cursive;
        font-size: 300px;
        line-height: 300px;
      "
    >
      Vic Ong
      
      <div class="absolute font-bold tracking-wider opacity-40 bottom-10 left-24 font-default">
        FULLSTACK & UNREAL DEVELOPER
      </div>
    </div>

    <div class="flex items-center justify-center pt-20 space-x-7">
      <div
        v-for="(route, i) in routeList"
        :key="route.name"
      >
        <router-link
          :to="{ name: route.name}"
          class="text-lg text-black duration-150 ease-in-out transform highlight hover:text-black-darker"
        >
          {{ route.text }}
        </router-link>
        <span
          v-if="i < routeList.length - 1"
          class="pl-7"
        >|</span>
      </div>
    </div>
  </PageContainer>
</template>
