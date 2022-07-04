<script lang="ts">
  import { defineComponent } from 'vue';
  import { img, footage } from '@/constants/assets';
  import ProjectContainer from '@/components/ProjectContainer.vue';
  import ProjectOverview from '@/components/ProjectOverview.vue';
  import MediaPlayer from '@/components/MediaPlayer.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';

  export default defineComponent({
    name: 'DepartureLounge',
    components: {
      ProjectContainer,
      ProjectOverview,
      MediaPlayer,
      ImageCanvas,
    },
    setup() {
      const projectInfo = {
        title: 'Catch Of The Night',
        desc: 'Catch Of The Night is an interactive animated short of a battle between a chef and a cat, for the last fish in the restaurant.',
        objective: 'The goal is to produce a realtime animated short with interactive elements and customizable characters. The short must be ready to be published on the client\'s platform by the end of the project.',
        img: img.cotn.hero,
        role: 'Unreal Engine developer, Co-producer',
        tools: 'Unreal Engine 5, MAYA, Substance Painter, Trello',
        duration: '3 months',
        wip: true,
      };

      const contributions = [
        'Create and manage the production roadmap to ensure that we\'re hitting the key milestones',
        'Maintain Gitlab code repository to ensure we have structured development flow and clean pipelines',
        'Implement the pre-visualization (previs) for the film',
        'Develop a scene manager service that maintains and play the sequences',
        'Develop a mini-game interactive sequence that smoothly transitions between sequences',
        'Develop the shader and post-processing setup for the film\'s real-time rendering',
      ];

      const milestones1 = [
        'Produce a team charter',
        'Premise brainstorming and selection',
        'Create concept art',
        'Develop the storyboard',
        'Develop realtime sequences playback system',
      ];
      const milestones2 = [
        'Create animatic from storyboard',
        'Develop the mini-game for the interactive sequence',
        'Conduct user test',
        'Create key 3D models (kitchen room, furniture, characters)',
        'Block characters and camera in the sequences',
        'Rig characters and do MOCAP',
      ];
      const milestones3 = [
        'Develop character customization system',
        'Conduct user test',
        'Add lighting, animation, and props to sequences',
        'Final polishing on camera and animation',
      ];

      return {
        scrollTo,
        img: img.cotn,
        footage: footage.cotn,
        projectInfo,
        contributions,
        milestones1,
        milestones2,
        milestones3,
      };
    },
  });
</script>

<template>
  <ProjectContainer>
    <ProjectOverview :data="projectInfo" />
    <div class="pt-12 space-y-12">
      <Section title="Team Composition">
        <div>
          Our team consists of 5 team members with interdisciplinary backgrounds. From left to right: Hua Chee (2D artist), Zhun Zhang (3D artist), Marshall MacCann (narrative writer), Myself (developer), the client, Larysa (narrative writer), and Simran (UX designer).
        </div>
        <div class="flex justify-center">
          <img :src="img.team">
        </div>
      </Section>

      <Section title="Key Contributions">
        <List :items="contributions" />
      </Section>
        
      <Section title="Details">
        <SubSection title="Production milestones">
          <div>
            We have an extremely tight deadline to work with, given the scope of our project i.e. a short film, an interactive mini-game, and a character customization system. So, we need to have a good grasp on the production milestones.
          </div>
          <div>
            I took charge of the managing the production roadmap and update it as needed to reflect the current state of project.
          </div>
          <div class="font-bold">
            Month 1
          </div>
          <div>
            <List :items="milestones1" />
          </div>
          <div class="font-bold">
            Month 2
          </div>
          <div>
            <List :items="milestones2" />
          </div>
          <div class="font-bold">
            Month 3
          </div>
          <div>
            <List :items="milestones3" />
          </div>
        </SubSection>

        <SubSection title="Pre-visualization (previs)">
          <div>
            I developed the previs for the film while our artists are developing the final character 3D models, textures, rigging, and animations.
          </div>
          <div>
            <List
              :items="[
                'Setup the camera and lens settings in Unreal Engine',
                'Block characters, draft animations by using Mixamo',
                'Block and animate relevant props in the shots',
                'Initial lighting',
              ]"
            />
          </div>
          <MediaPlayer
            :src="footage.previs"
            :autoplay="false"
            :loop="false"
            show-controls
          />
          <MediaPlayer
            :src="footage.btsKnifeThrow"
            :autoplay="false"
            :loop="false"
            show-controls
          />
        </SubSection>

        <SubSection title="Game system setup">
          <ImageCanvas :src="img.gameManagement" />
          <div>
            Following Unreal Engine's recommended hierarchical game system, I have a game mode set up for handling things that are not in-game related. The player controller handles common controls, screen resolutions, and coordinates the manager possessions.
          </div>
          <div class="font-bold">
            Scene management
          </div>
          <div>
            The film is composed of 11 sequences and each containing a variety number of shots. In Unreal Engine, this is set up using master level sequencers and level sequencers. The scene manager handles the order of the sequences and creates the sequence player.
          </div>
          <div class="font-bold">
            Interactive sequence manager
          </div>
          <div>
            After sequence 6 finishes, the scene manager will dispatch an event to indicate that it is time to start the interactive sequence. The interactive sequence manager listens to this event and proceeds to activate the game setup and manage the game states. Upon exiting the game, it will dispatch an event to communicate back to the scene manager to resume the sequences.
          </div>
        </SubSection>

        <SubSection title="Interactive sequence">
          <div>
            Most of the interactive sequences we can see in the market are choice based. For example, Bandersnatch prompts users to make a choice on how they could affect the outcome of the movie.
            We're using Unreal Engine to make this film so we wanted to do something more unique given the engine's capability.
          </div>
          <div>
            We decided to go with a mini-game with varying outcomes. If the user wins the game (manage to hit the cat's paw 10 times), the user will see the cat receives an ultimate spatula hit
            whereas if the user loses the game (timer runs out), the user will see kettle whistling and the steam burns the chef's hand.
          </div>
          <div>
            I implemented the outcome sequence triggers based on the win-lose condition by adding listeners in the scene manager and the interactive sequence manager.
          </div>
          <MediaPlayer
            :src="footage.i1OutcomeComparison"
            show-controls
          />
          <div>
            Since this is a film, I kept the film's 23.5 aspect ratio and made a smooth camera transition from "cinematic mode" to "game mode" without changing any of the rendering quality. This is done by lerping the camera's location and rotation from the side view of the cat's paw to the top view, followed by possesing the game manager blueprint (that contains all logic for the mini-game e.g: game objects initialization, timer handler, widget blueprint triggers, and game mechanics).
          </div>
          <div>
            I implemented the UI, animations, game mechanics, and camera transitions.
          </div>
          <MediaPlayer
            :src="footage.i1CameraTransition"
            show-controls
          />
        </SubSection>

        <SubSection title="Shader and post-processing setup">
          <div>
            I developed a shader that draws the outline of an object in the scene to create the anime-like look. I added outlines around the object as well as adding internal lines following the normal map of the object. The diagram below shows the implementation to draw online on one side of an object.
            The vectors containing information for the outlines from each side are summed and multiplied with a base color to achieve the outlines.           
          </div>
          <div class="space-y-3">
            <ImageCanvas
              :src="img.shaderOutlinerLeft"
              :height="25"
            />
            <div class="text-center">
              Draw left outline around an object
            </div>
          </div>
          <div class="space-y-3">
            <ImageCanvas
              :src="img.shaderOutlinerLeftNormal"
              :height="25"
            />
            <div class="text-center">
              Draw left outline along the normal map
            </div>
          </div>
          <div>
            In many animated shows, you can typically see that there's outlines on near or important objects and the rest are removed. To achieve a similar result, I determine whether to draw the outline based on the distance from the camera. It will be removed after a certain distance.
          </div>
          <div>
            I also added a custom depth pass to provide the freedom for artists to exclude the outlines on any objects that are deemed unimportant.
          </div>
          <ImageCanvas
            :src="img.shaderOutlinerCullingExclude"
            :height="25"
          />
          <div>
            I then configure the post-processing material for exposure adjustment and color grading to achieve the film-like visual. Motion blur is also added to remove the sharp animation that would've been be jarring to see in a film.
          </div>
          <MediaPlayer :src="footage.shaderTimeline" />
          <div class="font-bold">
            Result overview
          </div>
          <ImageCanvas
            :src="img.shaderResult"
            :height="45"
          />
          <ImageCanvas
            :src="img.shaderResult2"
            :height="45"
          />
        </SubSection>
      </Section>
    </div>
  </ProjectContainer>
</template>
