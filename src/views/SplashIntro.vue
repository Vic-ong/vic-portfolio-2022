<script lang="ts">
  import { defineComponent } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';

  export default defineComponent({
    name: 'SplashIntro',
    setup() {
      const bp = useBreakpoints();
      return {
        bp,
      };
    },
  });
</script>

<template>
  <div class="h-96 lg-above:h-screen lg-above:p-12">
    <div class="flex items-center justify-center h-full bg-black">
      <div class="flex flex-col items-center md-above:pt-10 space-y-7 md-above:space-y-10">
        <div class="relative px-8 pt-4 text-white border-8 md-above:border-8 pb-7">
          <div
            class="absolute left-0 w-full text-4xl text-center capitalize text-primary md-above:text-6xl -top-9 md-above:-top-12"
            style="font-family: 'Ms Madi', cursive;"
          >
            vic ong
          </div>
          <div class="text-5xl font-bold md-above:text-9xl">
            portfolio
          </div>
          <div
            v-if="bp.mdAndAbove"
            class="absolute right-9 bottom-3"
          >
            Selected work from 2019-2022
          </div>
        </div>
        <div>
          <div class="font-bold tracking-wider uppercase text-primary text-md md-above:text-2xl typewriter">
            unreal engine & full stack dev
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .2em solid white; /* The typwriter cursor */
  padding-right: 3px;
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation:
    typing 2.5s steps(30, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white; }
}
</style>
