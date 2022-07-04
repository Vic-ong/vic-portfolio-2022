<script lang="ts">
  import { defineComponent } from 'vue';
  import { img, footage } from '@/constants/assets';
  import ProjectContainer from '@/components/ProjectContainer.vue';
  import ProjectOverview from '@/components/ProjectOverview.vue';
  import MediaPlayer from '@/components/MediaPlayer.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';

  export default defineComponent({
    name: 'Terrarium',
    components: {
      ProjectContainer,
      ProjectOverview,
      MediaPlayer,
      ImageCanvas,
    },
    setup() {
      const projectInfo = {
        title: 'Terrarium',
        desc: 'Terrarium is a mobile-based city simulation game for players to develop and manage a floating city sustainably.',
        objective: 'The goal is to build a proof of concept for a city simulation game to educate people on sustainable city planning through immersive gameplay and guided elements.',
        img: img.unreal.terrarium.hero,
        role: 'Unreal Engine developer',
        tools: 'Unreal Engine 4 (Recently upgraded to UE5), Figma, Vue 3, Tailwind, Firebase',
        duration: '3 months',
        wip: false,
      };

      const contributions = [
        'Designed the data structure for storing all the buildings and upgrades data',
        'Implement the building and upgrade system in Unreal Engine',
        'Implement a quest system and triggers based on quest progress',
        'Create a metric that dictates how the game is balanced and progressed',
        'Design and develop a website for documentation',
      ];

      return {
        scrollTo,
        img: img.unreal.terrarium,
        footage: footage.terrarium,
        projectInfo,
        contributions,
      };
    },
  });
</script>

<template>
  <ProjectContainer>
    <ProjectOverview :data="projectInfo" />
    <div class="pt-12 space-y-12">
      <div class="space-y-5">
        <MediaPlayer :src="footage.overview" />
      </div>

      <Section title="Team Composition">
        <div>
          Our team consists of 5 team members with interdisciplinary backgrounds. Myself (developer), Marshall McCann (project manager and narrative writer), Hua Chee (2D artist), Yi Chen (3D artist) and Simran (UX designer).
        </div>
      </Section>

      <Section title="Key Contributions">
        <List :items="contributions" />
      </Section>
        
      <Section title="Details">
        <SubSection title="Buildings and upgrades">
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
          <MediaPlayer :src="footage.buildingAndUpgrades" />
        </SubSection>

        <SubSection title="Quest system and weather changing">
          <div>
            We'd like to convey the idea that the player's actions can have tangible impact on the city. For instance bad decisions could lead to acid rain and good decisions lead to bright and shiny weather. Quests are introduced to players to navigate them toward understanding this game mechanics.
          </div>
          <div>
            I implemented the weather system by manipulating the light direction and fog in the World. I created the quest and dialog system by using widget blueprints and event dispatchers.
          </div>
          <MediaPlayer :src="footage.questAndWeather" />
        </SubSection>

        <SubSection title="Metrics for balancing city growth">
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
          <div>
            <a
              href="https://terrarium-game.web.app/whitepaper/technical-notes"
              target="_blank"
            >
              See technical notes for more details
            </a>
          </div>
          <iframe
            src="https://terrarium-game.web.app/buildables"
            style="height: 50rem; width: 65rem"
            class="scaled-frame"
          />
        </SubSection>

        <SubSection title="Website and documentation">
          <div>
            With my background as a fullstack developer, I proposed taking a cool approach to documentation, that is to create a game website containing all of information on the making of the game and its technical details. The stack is Vite, Vue 3, Tailwind, and Firebase hosting.
          </div>
          <div class="space-y-5">
            <div>
              <a
                href="https://terrarium-game.web.app/"
                target="_blank"
              >
                Terrarium website (https://terrarium-game.web.app/)
              </a>
            </div>
            <div>
              <a
                href="https://terrarium-game.web.app/"
                target="_blank"
              >
                <ImageCanvas
                  :src="img.website"
                  height="25rem"
                />
              </a>
            </div>
          </div>
        </SubSection>
      </Section>
    </div>
  </ProjectContainer>
</template>
