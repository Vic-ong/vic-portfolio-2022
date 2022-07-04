<script lang="ts">
  import { defineComponent } from 'vue';
  import { img } from '@/constants/assets';
  import ProjectContainer from '@/components/ProjectContainer.vue';
  import ProjectOverview from '@/components/ProjectOverview.vue';
  import YoutubeVideo from '@/components/YoutubeVideo.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';

  export default defineComponent({
    name: 'DepartureLounge',
    components: {
      ProjectContainer,
      ProjectOverview,
      YoutubeVideo,
      ImageCanvas,
    },
    setup() {
      const projectInfo = {
        title: 'Lyght',
        desc: 'The Lyght app is an impact investing platform to connect retail buyers with solar energy producers and for administrators to manage their business operations.',
        objective: 'The goal of this project is to create a simple flow for customers to order solar assets on the platform and for the sales team to manage their leads.',
        img: img.lyght.hero,
        role: 'Software developer, Product manager',
        tools: 'Vue 2, Vuetify, NodeJS, Firebase',
        duration: '8 months',
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
        img: img.lyght,
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
        <YoutubeVideo id="ma1QqqFRr5g" />
      </div>

      <Section title="Team Composition">
        <div>
          Lyght Co. is a startup based in Taipei, Taiwan with the objective to create an impact investing platform to accelerate the growth in the renewable energy sector. I joined the team in 2019 to design the system and develop the applications for the platform.
        </div>
        <List
          :items="[
            'Myself: System design and application development',
            'Darren Chua: Business strategies and partnerships',
            'Harry Kuo: Legal compliance and partnerships',
            'Jestyn Khoo: Branding, UI and UX design',
          ]"
        />
      </Section>

      <Section title="Key Contributions">
        <List :items="contributions" />
      </Section>
        
      <Section title="Details">
        <SubSection title="Tech stack">
          <div>
            The Lyght platform consists of 3 main applications: a customer-facing platform, an administration portal, and the backend API.
          </div>
          <div>
            I actively met with the team to learn about their roadmap and business model and realized that I need to do rapid prototyping. So, I chose to use the Firebase cloud infrastructure because it offers a reasonable pricing structure, a flexible NoSQL database and great prototyping tools. I went with Vue for frontend and NodeJS for backend due to familiarity.
          </div>
          <div>
            I'm very likely to push updates and releases frequently so I added CI/CD pipelines to build and deploy to designated environments when Gitlab receives the commit.
          </div>
          <div>
            <span class="font-semibold">Frontend:</span> Vue 2, Vuetify
          </div>
          <div>
            <span class="font-semibold">Backend:</span> Google Functions, NodeJS
          </div>
          <div>
            <span class="font-semibold">Infrastructure:</span> Firebase, Google Cloud Platform
          </div>
          <ImageCanvas :src="img.architecture" />
        </SubSection>

        <SubSection title="User onboarding">
          <div>
            User authentications are implemented using Firebase's authentication system including email and password, mobile verification, and social media logins. Upon registration, new users will be directed to a simple onboarding flow to fill up their profile.
          </div>
          <YoutubeVideo id="aOzl2taj9DQ" />
        </SubSection>

        <SubSection title="Browsing and ordering">
          <div>
            Users can browse through available solar projects and see each project's details. Users can then place orders for the project that they're interested in through the platform.
          </div>
          <YoutubeVideo id="gr_ThxtayHU?start=5" />
          <ImageCanvas
            :src="img.order"
            shadow
          />
        </SubSection>

        <SubSection title="Fund disbursement">
          <div>
            After the users have invested in a project, they will begin earning a recurring income secured through Lyght's trust and escrow structure with a partnering bank. On the administration panel, I created a fund management system to support fund administrators managing the fund payment and disbursement processes.
          </div>
          <ImageCanvas :src="img.fundDisbursement" />
          <YoutubeVideo id="iuY74_5-R4g?start=5" />
        </SubSection>
      </Section>
    </div>
  </ProjectContainer>
</template>
