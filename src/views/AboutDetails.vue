<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';
  import dayjs from 'dayjs';
  import { img } from '@/constants/assets';
  import TopPanel from '@/components/TopPanel.vue';
  // import IconCaretRight from '@/components/Icons/IconCaretRight.vue';
import PageContainer from '@/components/PageContainer.vue';

  export default defineComponent({
    name: 'About',
    components: {
    // IconCaretRight,
    TopPanel,
    PageContainer,
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

      const journey = computed(() => [
        {
          year: '2016',
          desc: 'Graduated from University of Minnesota with a B.E. in Mechanical Engineering and a minor in Product Design.',
        },
        {
          year: '',
          desc: 'Kicked start my career as a Sustaining Engineering intern at Walt Disney World to do data modeling for failure prediction and develop an operational intelligence platform.',
        },
        {
          year: '2018',
          desc: 'Moved to Hawaii to work for DataHouse Consulting Inc. as a data scientist (1) to develop ML models for education scholarship programs and (2) to create internal tools for streamlining business operations.',
        },
        {
          year: '',
          desc: 'Left the US and flew to Malaysia to work for Shopline, an e-commerce startup based in Hong Kong, to help grow the business and the engineering team in Malaysia.',
        },
        {
          year: '2020',
          desc: 'Acquired a promotion and offered a relocation to Shopline Taiwan to work on a data analytics project and develop the business intelligence dashboard.',
        },
        {
          year: '',
          desc: 'Ventured into a fintech startup to build a solar energy impact investing platform that connects retail buyers to solar panel producers. Our startup got acquired by a solar energy corporation in late 2021.',
        },
        {
          year: '2022',
          desc: 'Decided to move to Canada to pursue a Master\'s degree at the Centre for Digital Media with the goal to shift my career to the film/game industry focusing on developing tools for production studios.',
        },
      ]);

      const tools = [
        [
          'Unreal Engine',
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
        journey,
        tools,
      };
    },
  });
</script>

<template>
  <div>
    <TopPanel />
    <PageContainer>
      <div class="col-span-3 text-black">
        <Title>
          About Me
        </Title>

        <div class="pt-5 lg-above:grid lg-above:grid-cols-3 lg-above:gap-10">
          <div class="col-span-2 space-y-5">
            <div>
              Born in a small town called Port Dickson, in Malaysia, and moved to the US for my bachelor's degree in Mechanical Engineering.
              On my first job, I discovered my passion in computer science and decided to switch over to the software side in 2016. I've been a developer ever since then!
            </div>

            <div>
              Currently, I'm pursuing my Master's in Digital Media, focusing on development in the 3D space with Unreal Engine. I develop
              <span class="font-semibold">cinematic and interactive experiences i.e. animations, games, and virtual tours</span>
              by collaborating with artists, designers, and writers to materialize creative visions.
            </div>

            <div>
              In the past, I've also built web applications and APIs for companies of various industries ranging from the entertainment to consulting and fintech. Outside of work, I like to wind down with outdoor activities such as photography, team sports, and café hopping!
            </div>

            <div>
              <Title>My Journey</Title>
              <div class="md-above:pl-5 pt-7">
                <AnimateScrollIntoView
                  v-for="(item, index) in journey"
                  :key="item.year"
                  class="flex space-x-3 md-above:space-x-5"
                  :threshold="0.3"
                  animation-type="siv-fade-t"
                  persist
                >
                  <div class="pt-2 text-base font-semibold md-above:text-xl basis-10 md-above:basis-12 text-gray-darken">
                    {{ item.year }}
                  </div>
                  <div class="flex flex-col items-center pt-4 space-y-4 basis-8">
                    <div class="w-4 h-4 rounded-full bg-primary" />
                    <div
                      v-if="index < journey.length - 1"
                      class="h-32 border-l-2 border-l-gray"
                    />
                  </div>
                  <div class="flex-1 pt-2">
                    {{ item.desc }}
                  </div>
                </AnimateScrollIntoView>
              </div>
            </div>
          </div>
          
          <div
            v-if="bp.lgAndAbove"
            class="col-span-1"
          >
            <div>
              <img
                :src="img.profilePic"
                class="w-full rounded shadow-md"
              >
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>
