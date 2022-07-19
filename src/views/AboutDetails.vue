<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';
  import dayjs from 'dayjs';
  import { img } from '@/constants/assets';
  import TopPanel from '@/components/TopPanel.vue';
  import Contact from '@/views/Contact.vue';

  export default defineComponent({
    name: 'About',
    components: {
      TopPanel,
      Contact,
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
          desc: 'Kicked start my career as a Sustaining Engineering intern at Walt Disney World doing data modeling for failure prediction and develop an operational intelligence platform.',
          skills: [
            'Python',
            'SQL',
            'JavaScript',
            'Splunk',
          ],
        },
        {
          year: '2018',
          desc: 'Moved to Hawaii to work for DataHouse Consulting Inc. as a data scientist (1) to develop ML models for education scholarship programs and (2) to create internal tools for streamlining business operations.',
          skills: [
            'Python',
            'Vue',
            'AWS',
            'R',
            'Machine Learning',
          ],
        },
        {
          year: '',
          desc: 'Left the US and flew to Malaysia to work for Shopline, an e-commerce startup based in Hong Kong, to help grow the business and the engineering team in Malaysia.',
          skills: [
            'Vue',
            'NodeJS',
            'Terraform',
            'AWS',
          ],
        },
        {
          year: '2020',
          desc: 'Acquired a promotion and offered a relocation to Shopline Taiwan to work on a data analytics project and develop the business intelligence dashboard.',
          skills: [
            'Python',
            'React',
            'D3',
          ],
        },
        {
          year: '',
          desc: 'Ventured into a fintech startup to build a solar energy impact investing platform that connects retail buyers to solar panel producers. Our startup got acquired by a solar energy corporation in late 2021.',
          skills: [
            'Vue',
            'TypeScript',
            'NodeJS',
            'Firebase',
          ],
        },
        {
          year: '2022',
          desc: 'Decided to move to Canada to pursue a Master\'s degree at the Centre for Digital Media with the goal to shift my career to the film/game industry focusing on developing tools for production studios.',
          skills: [
            'Unreal Engine',
            'MAYA',
            'Python',
            'C++',
            'NodeJS',
          ],
        },
      ]);

      return {
        bp,
        img,
        yearsOfExp,
        journey,
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
              Born in a small, quaint town called Port Dickson located in the south of Malaysia, where the beach is just a 5-minute walk away from my parent's house.
              I moved to the US in 2013 to pursue my bachelor's in Mechanical Engineering but I became very interested in computer science during my first job at
              Disney World. I was, fortunately, able to get an app development project from my manager to develop an attraction reliability tool for the theme parks.
              Eventually, I made the switch to software development through online resources and learning from the seniors in the company—I've been a software developer ever since!
            </div>

            <div>
              Currently, I'm pursuing my Master's in Digital Media, focusing on developing tools for and creating content using Unreal Engine and MAYA.
              <span class="font-bold">I strive to develop useful tools for Digital Content Creation (DCC) applications and creating interactive experiences</span>
              by collaborating with artists, designers, and writers to materialize creative visions in the animation/film/VFX industry.
            </div>

            <div>
              In the past, I've built web applications and APIs for companies in various industries (entertainment, consulting, fintech, and e-commerce) using tools such as
              Vue, React, Node, Python, AWS, Firebase, and Terraform. Outside of work, you'd mostly likely find me winding down with outdoorsy stuff such as team sports, café hopping or
              <router-link
                to="/portraits"
                class="items-center space-x-1 text-black"
              >
                photography!
              </router-link>
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
                      class="border-l-2 h-36 border-l-gray"
                    />
                  </div>
                  <div class="flex-1 pt-2 space-y-2">
                    <div>
                      {{ item.desc }}
                    </div>
                    <div
                      v-if="item.skills"
                      class="flex space-x-2 text-base text-white"
                    >
                      <div
                        v-for="skill in item.skills"
                        :key="skill"
                        class="flex-wrap px-3 py-1 bg-black rounded-md"
                      >
                        {{ skill }}
                      </div>                  
                    </div>
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
            <div class="space-y-3 font-semibold text-center pt-7">
              <div class="transition-transform duration-300 ease-in-out hover:scale-125">
                <a
                  href="https://drive.google.com/file/d/161cbQa_guJdmQe3Oy3JCplWtEm18VQpR/view?usp=sharing"
                  target="_blank"
                >
                  🗒️ Résumé
                </a>
              </div>
              <div class="transition-transform duration-300 ease-in-out hover:scale-125">
                <a
                  href="mailto:vickyocc53@gmail.com"
                  target="_blank"
                >
                  📧 Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-20">
          <Contact />
        </div>
      </div>
    </PageContainer>
  </div>
</template>
