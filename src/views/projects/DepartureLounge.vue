<script lang="ts">
  import { defineComponent } from 'vue';
  import { img, footage } from '@/constants/assets';
  import ProjectContainer from '@/components/ProjectContainer.vue';
  import ProjectOverview from '@/components/ProjectOverview.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';
  import MediaPlayer from '@/components/MediaPlayer.vue';

  export default defineComponent({
    name: 'DepartureLounge',
    components: {
      ProjectContainer,
      ProjectOverview,
      ImageCanvas,
      MediaPlayer,
    },
    setup() {
      const projectInfo = {
        title: 'Virtual Departure Lounge',
        desc: 'Virtual Departure Lounge is a guided immersive virtual tour to showcase their volumetric capture technologies and the services Departure Lounge offer.',
        objective: 'The goal is to build a fully-functional virtual tour for senior product managers in entertainment industries who are seeking to improve efficiency and reduce the cost of virtual productions while creating true-to-life models.',
        img: img.departurelounge.hero,
        role: 'Unreal Engine developer, Product manager',
        tools: 'Unreal Engine 4, MAYA, Figma, Trello',
        duration: '3 months',
        wip: false,
      };

      const contributions = [
        'Create and manage the product roadmap to ensure that we\'re building a useful product',
        'Maintain Gitlab code repository to ensure we have structured development flow and clean pipelines',
        'Develop a leads tracker API for the client to follow up on potential leads',
        'Implement the main user flows of the virtual tour in Unreal Engine',
        'Develop a dialog system and expose useful methods to other developers',
        'Create an interactive control panel for players to switch between performances',
        'Model some small interior props to reduce the burden on our 3D artist',
      ];

      return {
        scrollTo,
        img: img.departurelounge,
        footage: footage.departurelounge,
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
      <MediaPlayer
        :src="footage.trailer"
        :autoplay="false"
        :muted="false"
        :loop="false"
        show-controls
      />

      <Section title="Team Composition">
        <div>
          Our team consists of 5 team members with interdisciplinary backgrounds. From left to right: Myself (lead developer), Satori Kitamori (developer), Wing Tsui (project manager), Hua Chee (2D artist), and Behnoosh Ashtari (3D modeler).
        </div>
        <div class="flex justify-center">
          <img :src="img.team">
        </div>
      </Section>

      <Section title="Key Contributions">
        <List :items="contributions" />
      </Section>
        
      <Section title="Details">
        <SubSection title="Product roadmap">
          <div>
            We need to ensure that we're designing a purposeful and useful product for the users. To achieve that, I helped the project manager to conduct some important sessions such as brainstorming sessions, sprint plannings, feature selections, and journey mapping.
          </div>
          <div class="space-y-3 text-center">
            <ImageCanvas
              :src="img.pmTrello"
              :height="28"
              shadow
            />
            <div>
              Managing sprints with Trello
            </div>
          </div>
          <div class="space-y-3 text-center">
            <ImageCanvas
              :src="img.pmBullseye"
              :height="27"
              shadow
            />
            <div>
              Prioritizing features with client
            </div>
          </div>
          <div class="space-y-3 text-center">
            <ImageCanvas
              :src="img.pmPriority"
              :height="30"
              shadow
            />
            <div>
              Refining feature selections internally
            </div>
          </div>
        </SubSection>

        <SubSection title="Interactive control panel">
          <div>
            I created an interactive control panel for players to switch between different performances in the volumetric capture stage. I modeled the control panel, created the panel hovering animation, and developed the interaction logic for switching performers.
          </div>
          <ImageCanvas
            :src="img.controlPanelModel"
            :height="25"
          />
          <MediaPlayer
            :src="footage.controlPanel"
            :autoplay="false"
            :muted="false"
            :loop="false"
            show-controls
          />
        </SubSection>

        <SubSection title="Dialog system">
          <div>
            One of the main features to developing the tour is the dialog system. It is used throughout the virtual tour for us to communicate info about the volumetric capture technology and what to do in the tour. The dialog service, as described in the diagram below, is implemented as a Blueprint Actor Component in Unreal Engine so that it is reusable throughout the project.
          </div>
          <ImageCanvas
            :src="img.dialogFlow"
            :height="27"
            shadow
          />
          <ImageCanvas
            :src="img.dialogImplementation"
          />
          <MediaPlayer
            :src="footage.dialog"
            :autoplay="false"
            :muted="false"
            :loop="false"
            show-controls
          />
          <div>
            Since my team member is in charge of writing the script and unfamiliar with Unreal Engine, I decided to set up a Google Sheet where she will write the script on and I would just import it into Unreal as a DataTable.
          </div>
          <ImageCanvas
            :src="img.dialogScript"
            :height="37"
          />
        </SubSection>

        <SubSection title="Leads tracker">
          <div>
            Since the Virtual DL acts a sales interface, we need a good way to follow up with potential customers. A simple approach to start with is to collect the customer's contact information and we can utilize this pipeline to funnel all the leads into a centralized database.
          </div>
          <div>
            I created a simple NodeJS API and deployed it as a Google Function and created an HTTP service in Unreal Engine to POST data when users put in their contact information. I believe that this design will ensure that ecosystem is scalable in the future, as illustrated below.
          </div>
          <ImageCanvas :src="img.leadsTracking" />
        </SubSection>

        <SubSection title="3D modeling">
          <div>
            In addition, I also helped the team to do some simple 3D modeling including UV mapping and texturing.
          </div>
          <div class="grid justify-center grid-cols-2 gap-4">
            <div class="space-y-3 text-center">
              <ImageCanvas :src="img.modelCeilingLight" />
              <div>Ceiling light</div>
            </div>
            <div class="space-y-3 text-center">
              <ImageCanvas :src="img.modelChair" />
              <div>Coffee table</div>
            </div>
            <div class="space-y-3 text-center">
              <ImageCanvas :src="img.modelSpeaker" />
              <div>Concert speaker</div>
            </div>
            <div class="space-y-3 text-center">
              <ImageCanvas :src="img.modelArtCanvas" />
              <div>Art canvas</div>
            </div>
          </div>
        </SubSection>
      </Section>
    </div>
  </ProjectContainer>
</template>
