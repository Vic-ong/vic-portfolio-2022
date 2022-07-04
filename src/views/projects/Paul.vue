<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { scrollTo } from '@/composables/utils';
  import { img } from '@/constants/assets';
  import ProjectCard from '@/components/ProjectCard.vue';
  import ProjectLinks from '@/components/ProjectLinks.vue';
  import ProjectContent from '@/components/ProjectContent.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';

  export default defineComponent({
    name: 'Spotify',
    components: {
      ProjectCard,
      ProjectLinks,
      ProjectContent,
      ImageCanvas,
    },
    setup() {
      onMounted(() => {
        scrollTo('project-details');
      });

      const projectInfo = {
        title: 'Paul the Octopus',
        description: 'A web app that calculates your virtual character\'s compatibility and recommends the top 3 team pairings to maximize your chances of completing certain missions.',
        role: 'Software developer (solo)',
        tools: 'Vite, Vue 3, Tailwind',
        duration: '1 week',
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
      :background-img="img.web.paul.hero1"
      :data="projectInfo"
    />
    <ProjectContent id="project-next">
      <Section>
        <Title>Overview</Title>
        <div>
          Similarity analysis is used in many applications today such as auto-correcting texts, searching similar restaurants and looking for partners with similar interests. It is commonly done by representing data in a vector of measurable features.
        </div>
        <div>
          The goal of this project is to explore how
          <a
            href="https://en.wikipedia.org/wiki/Lp_space#Statistics"
            target="_blank"
          >
            Lp space
          </a>
          and
          <a
            href="https://en.wikipedia.org/wiki/Cosine_similarity"
            target="_blank"
          >
            cosine similarity
          </a>
          can be applied in game developments.
        </div>
        <div>
          Fun fact: the name "Paul The Octopus" is a tribute to a
          <a
            href="https://en.wikipedia.org/wiki/Paul_the_Octopus"
            target="_blank"
          >
            well-known octopus
          </a>
          🐙 who has correctly predicted 4 out of 6 outcomes of UEFA Euro 2008 and all of the outcomes of FIFA World Cup 2010!
        </div>
        <ProjectLinks
          demo="https://paul-the-octopus-v2.web.app/"
          source="https://github.com/Vic-ong/paul-the-octopus-v2"
        />
      </Section>

      <Section>
        <Title>Features</Title>
        <div>
          The app contains interactivity that engages the users in exploring how different skill sets change the recommendations.
        </div>
        <List
          :items="[
            'Character creation system where users can personalized their character\'s skill set and skill levels',
            'Compatibility score calculations using the proposed algorithms',
            'Result display and character pairings recommendations',
            'The raw data listing all of the players\' skill set',
          ]"
        />
      </Section>
      
      <Section>
        <Title>Details</Title>
        <div>
          <span class="font-semibold">Frontend:</span> Vite, Vue 3, Typescript, Tailwind
        </div>

        <div>
          There are 3 objectives that the compatibility calculations need to adapt to so, the computations should adapt based on the mission. I used the base formula of Lp space and cosine similary to calculate the compatibilities.
        </div>
        <ImageCanvas
          :src="img.web.paul.formula"
          height="6rem"
        />

        <Title2>Result</Title2>
        <div>
          I will be using the sample character desribed in the image below as a point of reference for the rest of the discussions. As you can see, Jackson is a skilled magician with good creative capacity and people skills. However, he has little to no knowledge in hunting, engineering and medicine.
        </div>
        <ImageCanvas
          :src="img.web.paul.profile"
          height="12rem"
        />

        <Title2>
          Objective 1: Finding partner(s) on similar skill levels
        </Title2>
        <div>
          Since we're interested in figuring characters that have the most similar skill set and skill levels to Jackson, Lp space is a good starting point as it calculates the distance between 2 vector spaces. Initially, I calculated the Euclidean distance (L-2 norm, p=2) and found that the scoring heavily penalizes characters that have different skill sets of similar level. After some iterations, I ended up using p=1.5 to relax the aforementioned penalty so characters in those cases can be considered.
        </div>
        <div>
          We can observe below that Juniper and Benyj both scores the highest relative to Jackson's character as they all have a very similar skill set and skill level. Although it isn't perfect and there's some discrepancy (hence the 76% score), it is the best outcome the algorithm could find within the list of characters.
        </div>
        <ImageCanvas :src="img.web.paul.result1" />
        
        <Title2>
          Objective 2: Best chance at surviving in the wilderness
        </Title2>
        <div>
          This pairing should have the right skill set and create a relationship where they can learn from or teach each other to improve the group's survivability. The primary skills that should be taken into consideration for this scenario are hunting, engineering, creativity and medicine. I proposed using cosine similarity as it measures the directional similarity of 2 vector spaces from the origin. This would tell us that both of the characters have similar skill sets disregarding the skill levels.
        </div>
        <div>
          We can see that Sophia Marker is the best pairing because she is highly skilled in hunting and engineering which is what Jackson lacks. They are both, however, less proficient in medicine. Kiera would fulfill that gap but the lack of hunting and engineering skills does not seem like a good trade.
        </div>
        <ImageCanvas :src="img.web.paul.result2" />

        <Title2>
          Objective 3: Helping Harry Potter to defeat Voldemort
        </Title2>
        <div>
          Given that the nature of the objective is likely the same as surviving in the wilderness, cosine similarity is also used for this compatibility calculation. I did, however, modify the primary skills considered to be magic, creativity and medicine since this is a battle of magicians.
        </div>
        <div>
          Eveline is recommended here because she makes up for Jackson's lower proficiency in creativity and medicine. Depending on the context, Marta would be a good fit if people skills are beneficial and Leon would be a good fit if engineering skills are beneficial.
        </div>
        <ImageCanvas :src="img.web.paul.result1" />
      </Section>
    </ProjectContent>
  </PageContainer>
</template>
