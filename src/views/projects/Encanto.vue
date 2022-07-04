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
        img: img.encanto.hero,
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
        img: img.encanto,
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
          A WebGL project attempting to implement Matthias Müller's 2006 paper on
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
        <div>
          I manage to produce the following simulation as a result of using PBD algorithm and an original equation, the partition ratio, which I proposed to use (see below to read the full report).
        </div>
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
              class="text-base"
            >
              Source: YouTube, uploaded by DisneyMusicVEVO
            </a>
          </div>
        </div>
      </Section>

      <Section title="Features">
        <List :items="contributions" />
      </Section>

      <Section title="Overview">
        <SubSection title="Introduction">
          The primary objective of this project is to simulate the roof animation shown in Encanto, a Disney animation movie, specifically the scene shown in the
          <a
            href="https://youtu.be/Yp5nPGWWMh4?t=72"
            target="_blank"
          >
            movie trailer from minute 1:12 to 1:15 (“Stephanie Beatriz, Olga Merediz, Encanto - Cast - The Family Madrigal (From 'Encanto').”),
          </a>
          by utilizing the position based dynamic (PBD) algorithm originally proposed by Matthias Müller in 2006 (Müller et al.). The secondary objective
          is to create a useful tool for animators and artists by providing creative freedom through the abstraction of the implementation into simple and
          useful parameters that would be meaningful for them. The abstraction for enabling procedural generation is deemed necessary and pivotal to film studios
          as they often work with tight deadlines (“Walt Disney Animation Studios on Linkedin: #FMX2022 #Encanto.”).
        </SubSection>

        <SubSection title="Related work">
          The proposed algorithm usage, PBD, is chosen as it reduces the complexity of solving integrations and achieves a stable system.
          It is also capable to overcome overshooting issues that arise from the force, velocity, and position-based updates by having better
          controllability (Müller et al. and Bender et al.). The project's code of the PBD main loop is written following the implementation outline via
          <a
            href="https://www.youtube.com/watch?v=fH3VW9SaQ_c"
            target="_blank"
          >
            Ladislav Kavan's online tutorial (“CIS563, 2015, Position Based Dynamics.”)
          </a>
          and
          <a
            href="https://matthias-research.github.io/pages/publications/PBDTutorial2017-CourseNotes.pdf"
            target="_blank"
          >
            a tutorial guideline written by Jan Bender, Matthias Muller, and Miles Macklin for EUROGRAPHICS 2017 (Bender et al.).
          </a>
        </SubSection>
      </Section>
        
      <Section title="Algorithm/method">
        <SubSection title="PBD loop">
          <div>
            The main loop of PBD, as outlined in Matthias Müller's paper, is implemented as illustrated below where the PBD solver is evaluated to
            update the positions and velocities for each frame.
          </div>
          <div class="space-y-2 text-base font-semibold text-center">
            <ImageCanvas
              :src="img.mainLoop"
              :height="27"
              shadow
            />
            <div>
              Diagram 1: PBD main loop
            </div>
          </div>
        </SubSection>

        <SubSection title="Applying external force">
          <div class="space-y-2 text-center">
            <ImageCanvas :src="img.wdasRoofSimualtionTool" />
            <div>
              <a
                href="https://www.linkedin.com/posts/walt-disney-animation-studios_fmx2022-encanto-activity-6922962584941842432-ih4_/"
                target="_blank"
                class="text-base"
              >
                Source: LinkedIn, uploaded by Walt Disney Animation Studios
              </a>
            </div>
          </div>
          <div>
            Disney's in-house roof simulation tool as shown above creates a smooth arc on the desired sections of the roof panels. I try to emulate this behavior
            applying external upward force on the roof opening followed by projecting a moving point constraint adjacent to the roof openings, as illustrated below.
          </div>
          <div class="space-y-2 text-base font-semibold text-center">
            <ImageCanvas :src="img.projectConstraints" />
            <div>
              Diagram 2: Emulating roof simulation by applying external forces
            </div>
          </div>
          
          <div>
            I propose an original equation, as shown in Equation 1 below, to describe the force vectors that shapes the roof. R is the partition ratio of the force applied to a particle. The partition, p,
            is determined based on how far a particle is from the center of the opening. For example, given 4 divisions from the start to the center of the
            opening, the values of p are determined as shown in Diagram 3. The σ term is the horizontal shift of the curve and the τ term is the vertical scaling
            of the curve. After several tuning, using σ = 2/3 and τ = 1.418 results in the most suitable curve for animating the roof, as shown in Diagram 4.
            Using the proposed equation, the force value increases from the center to both ends of the roof opening, describing the shape of the roof.
          </div>
          <div class="space-y-2 text-base font-semibold text-center">
            <ImageCanvas
              :src="img.partitionRatioEquation"
              :height="7"
              class="border rounded-md"
            />
            <div>
              Equation 1: Roof partition ratio
            </div>
            <div class="italic">
              Proposal of an original equation of force vectors that describes the shape of a curved roof shape
            </div>
          </div>
          <div class="space-y-2 text-base font-semibold text-center">
            <ImageCanvas :src="img.partitionRatio" />
            <div>
              Diagram 3: Determining values of p and f for Equation 1
            </div>
          </div>
          <div class="space-y-2 text-base font-semibold text-center">
            <ImageCanvas :src="img.partitionRatioGraph" />
            <div>
              Diagram 4: Curve of proposed partition ratio
            </div>
          </div>
        </SubSection>

        <SubSection title="Propose updated positions">
          <div>
            Using the force calculated from the previous step and a damping value of 0.99 (as recommended by Ladislav Kavan (“CIS563, 2015, Position Based Dynamics.”)),
            the proposed velocity is calculated. Next, the proposed position assuming that there are no internal forces is calculated by using the proposed velocity calculated.
          </div>
          <ImageCanvas
            :src="img.proposedVAndP"
            :height="6"
          />
        </SubSection>

        <SubSection title="Projecting constraints">
          <div>
            Distance and point constraints are used to compute the roof movement so that it looks more natural and realistic. The distance constraints between 2 particles, i and j,
            is calculated based on the proposed positions and the rest position. If the constraint is approximating 0, the constraint is considered to be satisfied.
            As described in the position based dynamics paper (Müller et al. and Bender et al.), the change in position, Δp of i and j are calculated by multiplying the inverse mass (w), normal (n), and scale factor (s).
          </div>
          <ImageCanvas
            :src="img.constraintCalc"
            :height="13"
          />
          <div>
            In the Encanto scene, the roof opening animation moves from one side to the other over time. To emulate that, point constraints are also placed and moved with timestep.
            Diagram 5 shows the point constraints over 3 frames.
          </div>
          <div class="space-y-2 text-base font-semibold text-center">
            <ImageCanvas
              :src="img.constraintMoving"
              :height="25"
            />
            <div>Diagram 5: Moving point constraints over timestep</div>
          </div>
        </SubSection>

        <SubSection title="Exposing useful parameters">
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
          <ImageCanvas
            :src="img.parameters"
            :height="5"
          />
        </SubSection>
      </Section>

      <Section title="Discussion">
        <div>
          In the pursuit of learning PBD algorithm and implementing the roof animation from Encanto, smaller and easier implementations were done as well:
        </div>
        <div class="space-y-2 text-base font-semibold text-center">
          <ImageCanvas :src="img.ropeAndWind" />
          <div>Ropes of varying gravity forces constrainted on two ends with wind forces applied</div>
        </div>
        <div class="space-y-2 text-base font-semibold text-center">
          <ImageCanvas :src="img.inflatableAirTube" />
          <div>An inflatable air tube with gravity force and wind applied</div>
        </div>

        <div>
          For future improvements, I would use the clock provided by WebGL to compute delays and post delays because the delays
          in the current roof implementation use JavaScript's internal clock which would differ based on the speed of the computer it is running
          on. I would also propose to continue tuning the partition ratio for more robust-looking roof shapes and proposing more ratio equations
          to provide different roof shapes. In terms of the PBD solver, I would update it to use a more advanced implementation such as XPBD and
          account for collisions and k values (Miles et al.).
        </div>
      </Section>

      <Section title="References">
        <div>
          Bender, Jan, Müller, Matthias, and Macklin, Miles. "A Survey on Position Based Dynamics." EUROGRAPHICS 2017/ A. Bousseau and D. Gutierrez (2017).
        </div>
        <div>
          “CIS563, 2015, Position Based Dynamics.” YouTube, uploaded by Ladislav Kavan, 23 Feb 2015, https://www.youtube.com/watch?v=fH3VW9SaQ_c.
        </div>
        <div>
          Miles, Macklin, Müller, Matthias, and Chentanez, Nuttapong. “XPBD: Position-Based Simulation of Compliant Constrained Dynamics.” NVIDIA (2016).
        </div>
        <div>
          Müller, Matthias, Heidelberger, Bruno, Hennix, Marcus, and Ratcliff, John. "Position Based Dynamics." 3rd Workshop in Virtual Reality Interactions and Physical Simulation "VRIPHYS" (2006).
        </div>
        <div>
          “Stephanie Beatriz, Olga Merediz, Encanto - Cast - The Family Madrigal (From 'Encanto').” YouTube, uploaded by Disney Music VEVO, 2 Dec 2021, https://www.youtube.com/watch?v=Yp5nPGWWMh4.
        </div>
        <div>
          “Walt Disney Animation Studios on Linkedin: #FMX2022 #Encanto.” Walt Disney Animation Studios FMX2022, Walt Disney Animation Studios, 21 Apr. 2022, https://www.linkedin.com/posts/walt-disney-animation-studios_fmx2022-encanto-activity-6922962584941842432-ih4_. 
        </div>
      </Section>
    </div>
  </ProjectContainer>
</template>
