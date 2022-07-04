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
    name: 'DepartureLounge',
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
        title: 'Terrarium',
        description: 'Mobile-based city simulation game where players can develop and manage a floating city in a sustainably.',
        role: 'Unreal Engine developer',
        tools: 'Unreal Engine 4, Figma, Vue 3, Tailwind, Firebase',
        duration: '3 months',
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
      class="text-white-darker"
      scroll-down-to="project-next"
      :background-img="img.unreal.terrarium.hero1"
      :data="projectInfo"
    />
    <ProjectContent id="project-next">
      <Section>
        <Title>Overview</Title>
        <div>
          Departure Lounge Inc. is a diversified and nimble holding company that takes advantage of synergistic Metaverse trends while seeking autonomous ownership of the key-value creation points in the ecosystem. To support their Metaverse-related technology and content initiatives, our team built a digital replica of the Vancouver Departure Lounge Metastage Facility with a PC-based immersive virtual tour of the Metastage, a volumetric capture studio, housed inside the digital Departure Lounge studio.
        </div>
        <div>
          The goal is to build a fully-functional virtual tour for senior product managers in entertainment industries who are seeking to improve efficiency and reduce the cost of virtual productions while creating true-to-life models.
        </div>
        <ProjectLinks
          presentation="https://docs.google.com/presentation/d/1B36se-5Q896NTuyGCcrfEcUAc0JrmcweXUP8HKzXl3E"
          demo="https://drive.google.com/file/d/1LBLcYr8gdH8V2qYoOF4TIC-UhpM3CWOM/view?usp=sharing"
        />
        <YoutubeVideo id="pgIW02C2JOg" />
      </Section>

      <Section>
        <Title>Team</Title>
        <div>
          In the team, I'm the developer responsible to develop a functional and robust Unreal Engine prototype.
        </div>
        <List
          :items="[
            'Marshall: Project manager and narrative writer',
            'Hua: 2D artist and UI designer',
            'Yi Chen: 3D modeler',
            'Simran: UX designer',
          ]"
        />
      </Section>
      
      <Section>
        <Title>My Contributions</Title>
        <Title2>
          Buildings and upgrades
        </Title2>
        <div>
          I implemented a building and upgrading system in Unreal Engine using Blueprints. I created a
          <a href="https://docs.google.com/spreadsheets/d/1cuajIAgYqAH2AyRA01IyooBFPzAWw1kDsOErh5HY-GU/">Google sheet</a>
          for storing every building and upgrade data which can then be imported into Unreal Engine as DataTable.
        </div>
        <List
          :items="[
            'Sectors table',
            'Building Types table',
            'Buildings table',
            'BuildingTypes to Buildings mapping',
            'Sectors to BuildingTypes mapping',
          ]"
        />
        <div>
          From there whenever a player selects a building to build or to upgrade, it maps the building ID or sector ID to the desired data such as title, description, metrics, and thumbnail.
        </div>
        <YoutubeVideo id="dEUcMSeWKvs" />
        <YoutubeVideo id="q7lCoEAX8Gw" />

        <Title2>
          Quest system and weather changing
        </Title2>
        <div>
          We'd like to convey the idea that the player's actions can have tangible impact on the city. For instance bad decisions could lead to acid rain and good decisions lead to bright and shiny weather. Quests are introduced to players to navigate them toward understanding this game mechanics. For my role, I implemented the weather changing system and the quest system in Unreal Engine.
        </div>
        <ImageCanvas
          :src="img.unreal.terrarium.environment"
          height="30rem"
        />

        <Title2>
          Metrics for balancing city growth
        </Title2>
        <div>
          We developed a set of metrics to ensure there is a balance to the game as that the player can see progression. The concept is that the players will have to spend green coins building and upgrading the city to balance the air quality and power supply. This will in turn to gain citizen happiness. When the city is getting bigger and citizens are happy, more people would naturally want to move into the city. When population thresholds are achieved, players will rewarded and indicates game progression.
        </div>
        <div class="font-semibold">
          Low-level metrics
        </div>
        <List
          :items="[
            'Air quality: amount of pollution in the city',
            'Power supply: energy supply to energy demand ratio',
            'Citizen wellness: overall city health and happiness',
          ]"
        />
        <div class="font-semibold">
          High-level metrics
        </div>
        <List
          :items="[
            'Population: implying game progression',
            'Green coins: in-game credits for purchasing',
          ]"
        />
        <a
          href="https://terrarium-game.web.app/whitepaper/technical-notes"
          target="_blank"
        >
          See technical notes for more details
        </a>
        <ImageCanvas
          :src="img.unreal.terrarium.metrics"
          height="35rem"
        />

        <Title2>
          Website and documentation
        </Title2>
        <div>
          With my background as a fullstack developer, I proposed taking a cool approach to documentation, that is to create a game website containing all of information on the making of the game and its technical details. The stack is Vite, Vue 3, Tailwind, and Firebase hosting.
        </div>
        <div>
          <a
            href="https://terrarium-game.web.app/"
            target="_blank"
          >
            Visit the website (https://terrarium-game.web.app/)
          </a>
          <a
            href="https://terrarium-game.web.app/"
            target="_blank"
          >
            <ImageCanvas
              :src="img.unreal.terrarium.website"
              height="25rem"
            />
          </a>
        </div>
      </Section>
    </ProjectContent>
  </PageContainer>
</template>
