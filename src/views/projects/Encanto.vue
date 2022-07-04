<script lang="ts">
  import { defineComponent } from 'vue';
  import { img } from '@/constants/assets';
  import ProjectContainer from '@/components/ProjectContainer.vue';
  import ProjectOverview from '@/components/ProjectOverview.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';

  export default defineComponent({
    name: 'Encanto',
    components: {
      ProjectContainer,
      ProjectOverview,
      ImageCanvas,
    },
    setup() {
      const projectInfo = {
        title: 'Encanto Roof Simulation',
        desc: 'A WebGL project attempting to implement Matthias Müller\'s 2006 paper on Position Based Dynamics to recreate the roof animation in Disney\'s Encanto movie.',
        objective: 'The goal is to create a useful tool for animators and artists by providing creative freedom through the abstraction of the implementation into simple and useful parameters that would be meaningful for them. The abstraction for enabling procedural generation is deemed necessary and pivotal to film studios as they often work with tight deadlines.',
        img: img.animation.encanto.hero1,
        role: 'Software developer',
        tools: 'WebGL, Javascript',
        duration: '1 month',
        wip: false,
      };

      const contributions = [
        'Expose useful parameters for artists to customize the look and feel',
        'WebGL rendering service',
        'Position based dynamics solver',
      ];

      return {
        scrollTo,
        img: img.animation.encanto,
        projectInfo,
        contributions,
      };
    },
  });
</script>

<template>
  <ProjectContainer>
    <ProjectOverview :data="projectInfo">
      <template #desc>
        <div>
          A WebGL project attempting to implement Matthias Müller\'s 2006 paper on
          <a
            href="https://matthias-research.github.io/pages/publications/posBasedDyn.pdf"
            target="_blank"
          >
            Position Based Dynamics (PBD)
          </a>
          to recreate the roof animation in Disney's Encanto movie.
        </div>
      </template>
    </ProjectOverview>
    <div class="pt-12 space-y-12">
      <Section title="Result">
        <div>I manage to produce the following simulation as a result of using PBD algorithm with the partition ratio formula I proposed (read more on it in the 'Details' section below).</div>
        <ImageCanvas :src="img.encantoResult" />
        <div class="text-center">
          Comparing to the animation in Disney's Encanto movie:
        </div>
        <div class="space-y-2 text-center">
          <ImageCanvas :src="img.encantoScene" />
          <div>
            <a
              href="https://youtu.be/Yp5nPGWWMh4?t=72"
              target="_blank"
              class="text-sm"
            >
              Source: YouTube, uploaded by DisneyMusicVEVO
            </a>
          </div>
        </div>
      </Section>

      <Section title="Features">
        <List :items="contributions" />
      </Section>
        
      <Section title="Details">
        <SubSection title="Background">
          <div>
            The proposed algorithm, PBD, is chosen because it reduces the complexity of solving
            integrations and achieves a stable system. It is also capable to overcome overshooting issues
            that arise from the force, velocity, and position-based updates by having better controllability.
          </div>

          <div>
            The project's code of the PBD main loop is written following the implementation outline via
            <a
              href="https://www.youtube.com/watch?v=fH3VW9SaQ_c"
              target="_blank"
            >
              Ladislav Kavan's online tutorial
            </a>
            and
            <a
              href="https://matthias-research.github.io/pages/publications/PBDTutorial2017-CourseNotes.pdf"
              target="_blank"
            >
              a tutorial guideline written by Jan Bender, Matthias Muller, and Miles Macklin
            </a>
            for EUROGRAPHICS 2017.
          </div>
        </SubSection>

        <SubSection title="PBD algorithm">
          <div>
            The main loop of PBD, as outlined in Matthias Müller's paper, is implemented as illustrated below where the PBD solver is evaluated to update the positions and velocities for the each frame.
          </div>
          <ImageCanvas
            :src="img.mainLoop"
            height="27rem"
            shadow
          />
        </SubSection>

        <SubSection title="Simulating roof arc">
          <div>
            This can simulated by applying external upward force on the roof opening followed by projecting a moving point constraint adjacent to the roof openings, as illustrated below.
          </div>
          <ImageCanvas :src="img.projectConstraints" />
        
          <div>
            The following equation, roof partition ratio R(p), is proposed to describe the force that shapes the
            roof. R is the partition ratio of the force applied to a particle. The partition, p, is determined
            based on how far a particle is from the center of the opening. For example, given 4 divisions
            from the start to the center of the opening, the values of p (as shown in the following diagram).
            The σ term is the horizontal shift of the curve and the τ term is the vertical scaling of the
            curve. After several tuning, I find that using σ = 2/3 and τ = 1.418 results in the most suitable curve for
            animating the roof.
          </div>
          <ImageCanvas
            :src="img.partitionRatioEquation"
            height="7rem"
          />
          <ImageCanvas :src="img.partitionRatio" />
        </SubSection>

        <SubSection title="Parameters to expose">
          <div>
            It would be nice if the artists can adjust useful parameters to tweak the look and feel such as the height and the width of the roof opening, amount of force applied on the roof opening, and speed of the flow.
          </div>
          <div>
            In this project, I've managed to expose the height and width of the roof opening. These parameters would then in turn, calculate the number of divisions to be used and the optimal upward force to be applied on the roof opening. See the source code
            <a
              href="https://github.com/Vic-ong/cmpt766-position-based-dynamics/blob/4e5b94677d0c08770e5a5be48cca662fb24a5bd9/src/encanto.js#L17"
              target="_blank"
            >
              here
            </a>
            for more details.
          </div>
        </SubSection>
      </Section>
    </div>
  </ProjectContainer>
</template>
