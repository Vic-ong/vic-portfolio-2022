<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';
  import dayjs from 'dayjs';
  import { img } from '@/constants/assets';
  import IconCaretRight from '@/components/Icons/IconCaretRight.vue';

  export default defineComponent({
    name: 'About',
    components: {
      IconCaretRight,
    },
    setup() {
      const bp = useBreakpoints();

      const yearsOfExp = computed(() => {
        try {
          return dayjs().diff(dayjs('01-01-2017'), 'year', true).toFixed(1);
        } catch (err) {
          console.error(err);
          const d = new Date();
          return d.getFullYear() - 2017;
        }
      });

      const tools = [
        [
          'Unreal Engine 4 & 5',
          'Python',
          'MAYA',
          'Substance Painter',
        ],
        [
          'Vue & React',
          'NodeJS',
          'Firebase',
          'AWS',
        ],
      ];

      return {
        bp,
        img,
        yearsOfExp,
        tools,
      };
    },
  });
</script>

<template>
  <div>
    <div class="space-y-5">
      <Title>
        Hi there, I'm Vic!
      </Title>

      <div class="lg-above:grid lg-above:grid-cols-3 lg-above:gap-10">
        <div class="col-span-2 space-y-5">
          <div>
            I develop
            <span class="font-semibold">cinematic and interactive experiences i.e. animations, games, and virtual tours.</span>
            I really enjoy collaborating with artists, designers, and writers to materialize creative visions.
          </div>

          <div>
            In addition, I have
            <span class="font-semibold">
              {{ yearsOfExp }} years
            </span>
            of fullstack development work experience in web and microservices architecture.
          </div>

          <div class="space-y-1">
            <div class="underline">
              Tech & tools I actively work with:
            </div>
            <div class="flex space-x-10 text-base">
              <div
                v-for="n in [0, 1]"
                :key="n"
                class="space-y-2"
              >
                <AnimateScrollIntoView
                  v-for="item in tools[n]"
                  :key="item"
                  animation-type="siv-fade-b"
                >
                  <div class="flex items-center space-x-2">
                    <div>
                      <IconCaretRight class="w-4 h-4 fill-primary" />
                    </div>
                    <div>
                      {{ item }}
                    </div>
                  </div>
                </AnimateScrollIntoView>
              </div>
            </div>
          </div>

          <div class="text-base font-semibold">
            <router-link :to="{ name: 'about' }">
              Read full bio
            </router-link>
          </div>
        </div>
          
        <div
          v-if="bp.lgAndAbove"
          class="col-span-1"
        >
          <img
            :src="img.profilePic"
            class="w-full rounded shadow-md"
          >
        </div>
      </div>
    </div>
  </div>
</template>
