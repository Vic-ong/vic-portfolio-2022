<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useBreakpoints } from '@/composables/breakpoints';
  import { scrollTo } from '@/composables/utils';
  import { footage } from '@/constants/assets';
  import SplashIntro from '@/views/SplashIntro.vue';
  import About from '@/views/About.vue';
  import Projects from '@/views/Projects.vue';
  import Contact from './Contact.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      SplashIntro,
      About,
      Projects,
      Contact,
    },
    setup() {
      const bp = useBreakpoints();
      const route = useRoute();

      onMounted(() => {
        if (route.params?.scrollToId) {
          scrollTo(route.params.scrollToId as string);
        }
      });

      const navs = [
        {
          text: 'About',
          id: 'about',
        },
        {
          text: 'Projects',
          id: 'projects',
        },
        {
          text: 'Contact',
          id: 'contact',
        },
      ];

      return {
        scrollTo,
        bp,
        navs,
        footage,
      };
    },
  });
</script>

<template>
  <div class="relative p-0 pb-20 m-0">
    <div
      v-if="bp.mdAndAbove"
      class="fixed text-right text-white bg-black p-7 bottom-12 right-12 z-100"
    >
      <div class="space-y-2">
        <div
          v-for="nav in navs"
          :key="nav.id"
        >
          <span
            class="pb-1 cursor-pointer highlight"
            @click="scrollTo(nav.id)"
          >
            {{ nav.text }}
          </span>
        </div>
      </div>
    </div>
    
    <div>
      <SplashIntro />
    </div>

    <div id="about">
      <PageContainer>
        <div class="w-16 mb-5 border-b-4 border-primary" />
        <About />
      </PageContainer>
    </div>

    <!-- <div id="reel">
      <PageContainer>
        <div class="w-16 my-5 border-b-4 border-primary" />
        <div class="space-y-6">
          <Title>Demo reel</Title>
          <MediaPlayer
            :src="footage.reel"
            :muted="false"
            :autoplay="false"
            :loop="false"
            show-controls
          />
        </div>
      </PageContainer>
    </div> -->

    <div id="projects">
      <PageContainer>
        <div class="w-16 my-5 border-b-4 border-primary" />
        <Projects />
      </PageContainer>
    </div>
    
    <div id="contact">
      <PageContainer>
        <div class="w-16 my-5 border-b-4 border-primary" />
        <Contact />
      </PageContainer>
    </div>

    <div id="stack">
      <PageContainer>
        <div class="w-16 my-5 border-b-4 border-primary" />
        <div class="space-y-6">
          <Title>Application stack</Title>
          <div>
            This portfolio web app is built using Vite, Vue 3, Typescript, and Tailwind on the frontend.
            I use Firebase for storage management and deployment.
          </div>
        </div>
      </PageContainer>
    </div>
  </div>
</template>
