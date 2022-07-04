<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { scrollTo } from '@/composables/utils';
  import { img } from '@/constants/assets';
  import ProjectCard from '@/components/ProjectCard.vue';
  import ProjectLinks from '@/components/ProjectLinks.vue';
  import ProjectContent from '@/components/ProjectContent.vue';
  import YoutubeVideo from '@/components/YoutubeVideo.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';

  export default defineComponent({
    name: 'Spotify',
    components: {
      ProjectCard,
      ProjectLinks,
      ProjectContent,
      YoutubeVideo,
      ImageCanvas,
    },
    setup() {
      onMounted(() => {
        scrollTo('project-details');
      });

      const projectInfo = {
        title: 'Kingpin.gg',
        description: 'A skill-based platform for Call of Duty gamers to place bets on personalized challenges by estimating user\'s skill level and providing challenging bets.',
        role: 'Software developer',
        tools: 'Python, Vue 2, Vuetify, NodeJS, Firebase',
        duration: '4 months',
      };

      return {
        scrollTo,
        img,
        projectInfo,
      };
    },
  });
</script>

<template>
  <PageContainer
    id="project-details"
    no-padding
  >
    <ProjectCard
      class="grid items-center grid-cols-2 text-white-darker"
      scroll-down-to="project-next"
      :background-img="img.web.kingpin.hero1"
      :data="projectInfo"
    />
    <ProjectContent id="project-next">
      <Section>
        <Title>Overview</Title>
        <div>
          This is a side project that a friend of mine and I worked on, in our free time, for about a year (roughly added up to about 4 months worth of work). The idea stems from our childhood memories where oftentimes when we play a mission-based game, we would jokingly (sometimes seriously) declare monetary bets with our siblings or friends claiming that we can defeat the boss levels. So, we figured why can't we still do it today?
        </div>
        <div>
          The goal of this project is to create a web-based betting platform and explore how to estimate a user's skill level by utilizing the
          <a
            href="https://documenter.getpostman.com/view/5519582/SzzgAefq#intro"
            target="_blank"
          >
            Call of Duty API.
          </a>
        </div>
        <ProjectLinks
          source="https://github.com/Vic-ong/kingping-gg"
        />
      </Section>

      <Section>
        <Title>Features</Title>
        <div>
          This project is composed of 2 components: a betting platform and the backend services.
        </div>
        <Title2>Betting platform</Title2>
        <List
          :items="[
            'User authentication',
            'Select a challenge and place a bet amount',
            'FAQ',
          ]"
        />
        <Title2>Backend services</Title2>
        <List
          :items="[
            'Determine the probability of winning',
            'Personalized challenge options',
            'Resolve bet outcomes',
          ]"
        />
      </Section>
      
      <Section>
        <Title>Details</Title>
        <div>
          <span class="font-semibold">Frontend:</span> Webpack, Vue 2, Vuetify
        </div>
        <div>
          <span class="font-semibold">Backend:</span> Google Functions, Python, NodeJS
        </div>
        <div>
          <span class="font-semibold">Infrastructure:</span> Firebase, Google Cloud Platform
        </div>

        <ImageCanvas
          :src="img.web.kingpin.homepage"
          height="25rem"
          shadow
        />
        <ImageCanvas
          :src="img.web.kingpin.selectWager"
          height="25rem"
          shadow
        />

        <Title2>Personalized challenges</Title2>
        <div>
          For a challenge to be personalized, I would have to determine users' skill level based on their past performance. These data are available on the
          <a
            href="https://documenter.getpostman.com/view/5519582/SzzgAefq#8a24430f-f7d7-489e-b325-cb6bfad60b63"
            target="_blank"
          >
            Warzone Matches route.
          </a>
          Following the guide, I implemented a NodeJS Google function to manage data requests to the Call of Duty API.
        </div>
        <div>
          Now that I have a set of match data, I can begin doing some data exploration and basic statistical analysis. My assumption is that we can estimate of the users' skill level based on the number of kills they have in each match.
          <span class="font-semibold">We can hypothesize that a user with higher average kill count per match equates to a user being more skilled or generally better.</span>
          Given each match usually lasts around 30 minutes and assuming that a user plays 5 games on average per day, I sampled 60 records of an anonymous user's most recent matches which roughly equates to 2 weeks worth of his/her gaming data.
        </div>

        <ImageCanvas :src="img.web.kingpin.histogram" />

        <div>
          Based on the sampling, we can observe that this user's most frequent kill count ranges from 6 to 12 with a mean of 11 and a median of 10. Given that we want to provide personalized bets that are challenging enough, the benchmark has to be higher than the mean and the median. For instance, a challenge to achieve 15 kills could be a good starting point!
        </div>

        <div>
          Ultimately, I added weights to account for other factors that are deemed important. See the source code
          <a
            href="https://github.com/Vic-ong/kingping-gg/blob/2ef20233138fedd5bb310967a4dfe5de5f99ace6/kingpin-callofduty-functions/src/services/callofduty/CallOfDuty.py#L76"
            target="_blank"
          >
            here
          </a>
          for more details.
        </div>
        <List
          :items="[
            'Win rate',
            'Kill-to-death ratio',
            'Match ranking',
            'Game mode',
          ]"
        />

        <Title2>
          Betting on challenges
        </Title2>
        <div>
          I created a simple 3-step process for users to select their challenges.
        </div>
        <List
          :items="[
            'Step 1: Select the game mode',
            'Step 2: Select your teammates. This is skipped if the user plays solo',
            'Step 3: Select a challenge and the amount to bet on',
          ]"
        />
        <div>
          After selecting the challenge, the user will have 5 minutes to start their game on Call of Duty.
        </div>
        <div>
          I also created an outcome resolver service that runs every 15 minutes to find unresolved outcomes and request for the corresponding match data from Call Of Duty.
        </div>
        <YoutubeVideo id="epI2pqy1bXk" />
      </Section>
    </ProjectContent>
  </PageContainer>
</template>
