<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { img } from '@/constants/assets';
  import { useBreakpoints } from '@/composables/breakpoints';

  export default defineComponent({
    name: 'FeaturedWork',
    setup() {
      const bp = useBreakpoints();

      const items = computed(() => [
        {
          title: 'Catch Of The Night (Ongoing)',
          caption: 'An interactive animated short of a battle between a chef and a cat, for the last fish in the restaurant',
          img: img.unreal.cotn.thumbnail,
          routeName: 'projects/cotn',
        },
        {
          title: 'Encanto Roof Simulation',
          caption: 'Reimplement the roof animations from Disney\'s Encanto scene with Position Based Dynamics',
          img: img.animation.encanto.thumbnail2,
          routeName: 'projects/encanto',
        },
        {
          title: 'Virtual Departure Lounge',
          caption: 'A guided immersive virtual tour to showcase volumetric capture technologies',
          img: img.unreal.departurelounge.thumbnail2,
          routeName: 'projects/departurelounge',
        },
        {
          title: 'Terrarium',
          caption: 'Mobile-based city simulation sandbox for players to develop and manage a floating city sustainably',
          img: img.unreal.terrarium.thumbnail,
          routeName: 'projects/terrarium',
        },
        {
          title: 'Wildwood',
          caption: 'Vertical slice of an action RPG game of a skunk\'s adventure forming alliances to rise against a gruelling pack of coyotes',
          img: img.unreal.wildwood.thumbnail,
          routeName: 'projects/wildwood',
        },
        {
          title: 'Lyght Co.',
          caption: 'An impact investing platform to connect retail buyers with solar energy producers',
          img: img.web.lyght.thumbnail2,
          routeName: 'projects/lyght',
        },
      ]);
      return {
        bp,
        items,
      };
    },
  });
</script>

<template>
  <div>
    <Title>
      Projects
    </Title>
    <AnimateScrollIntoView
      animation-type="siv-fade-b"
      persist
      :threshold="0.15"
    >
      <div class="grid grid-flow-row gap-10 pt-10 lg-above:grid-cols-2">
        <div
          v-for="item in items"
          :key="item.title"
        >
          <router-link :to="{ name: item.routeName }">
            <div class="relative cursor-pointer group">
              <div class="py-3 font-semibold text-center text-black transition-opacity duration-300 opacity-100 lg-above:group-hover:opacity-0">
                {{ item.title }}
              </div>
              <div class="h-60 md-above:h-72 lg-above:h-80">
                <img
                  :src="item.img"
                  class="object-cover w-full transition-all duration-300 rounded shadow-md opacity-100 h-60 md-above:h-72 lg-above:h-80 lg-above:group-hover:rounded-lg lg-above:group-hover:opacity-25 lg-above:group-hover:-translate-y-4"
                >
              </div>
              <div
                v-if="bp.lgAndAbove"
                class="absolute w-full px-5 space-y-3 text-center text-black top-1/3"
              >
                <div class="transition-opacity duration-700 opacity-0 lg-above:group-hover:opacity-100 heading">
                  {{ item.title }}
                </div>
                <div class="font-semibold transition-opacity duration-1000 opacity-0 lg-above:group-hover:opacity-100">
                  {{ item.caption }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </AnimateScrollIntoView>
  </div>
</template>

<style scoped>
.featured-project {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#E7EBEB, #E7EBEB);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: all .4s ease-in-out;
  }

  .featured-project:hover {
    background-size: 100% 3px;
    background-position: 0 100%
  }
</style>
