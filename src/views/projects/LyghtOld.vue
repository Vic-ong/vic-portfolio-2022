<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { scrollTo } from '@/composables/utils';
  import { img } from '@/constants/assets';
  import ProjectCard from '@/components/ProjectCard.vue';
  import ProjectContent from '@/components/ProjectContent.vue';
  import YoutubeVideo from '@/components/YoutubeVideo.vue';
  import ImageCanvas from '@/components/ImageCanvas.vue';

  export default defineComponent({
    name: 'Lyght',
    components: {
      ProjectCard,
      ProjectContent,
      YoutubeVideo,
      ImageCanvas,
    },
    setup() {
      onMounted(() => {
        scrollTo('project-details');
      });
      
      const projectInfo = {
        title: 'Lyght',
        description: 'A web-based application that connects retail buyers with solar energy producers to participate in tangible environmental projects whilst earning recurring income at competitive rates.',
        role: 'Software developer, product manager',
        tools: 'Vue 2, Vuetify, NodeJS, Firebase',
        duration: '8 months',
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
      :background-img="img.web.lyght.hero1"
      :data="projectInfo"
    />
    <ProjectContent id="project-next">
      <Section>
        <Title>Overview</Title>
        <div>
          <a
            href="https://www.lyght.com.tw/"
            target="_blank"
          >
            Lyght Co.
          </a> is a startup based in Taipei, Taiwan with the objective to create an impact investing platform to accelerate the growth in the renewable energy sector. I joined the team in 2019 to design the system and develop the applications for the platform.
        </div>
        <div>
          The goal of this project is to create a simple flow for customers to order solar assets on the platform and for the sales team to manage their leads.
        </div>
        <YoutubeVideo id="ma1QqqFRr5g" />
      </Section>

      <Section>
        <Title>Team</Title>
        <div>
          I'm the software engineer responsible for designing the system architecture and develop all the applications.
        </div>
        <List
          :items="[
            'Darren Chua: Business strategies and partnerships',
            'Harry Kuo: Legal compliance and partnerships',
            'Jestyn Khoo: Branding, UI and UX design',
          ]"
        />
      </Section>
      
      <Section>
        <Title>My Contributions</Title>
        <div>
          The Lyght platform consists of 3 main applications: a customer-facing platform, an administration portal, and the backend API.
        </div>

        <Title2>Determining the stack</Title2>
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
        <ImageCanvas :src="img.web.lyght.architecture" />
        

        <Title2>User onboarding</Title2>
        <div>
          User authentications are implemented using Firebase's authentication system including email and password, mobile verification, and social media logins. Upon registration, new users will be directed to a simple onboarding flow to fill up their profile.
        </div>
        <YoutubeVideo id="aOzl2taj9DQ" />

        <Title2>Browsing and ordering</Title2>
        <div>
          Users can browse through available solar projects and see each project's details. Users can then place orders for the project that they're interested in through the platform.
        </div>
        <YoutubeVideo id="gr_ThxtayHU?start=5" />
        <ImageCanvas
          :src="img.web.lyght.order"
          shadow
        />

        <Title2>Fund disbursement</Title2>
        <div>
          After the users have invested in a project, they will begin earning a recurring income secured through Lyght's trust and escrow structure with a partnering bank. On the administration panel, I created a fund management system to support fund administrators managing the fund payment and disbursement processes.
        </div>
        <ImageCanvas :src="img.web.lyght.fundDisbursement" />
        <YoutubeVideo id="iuY74_5-R4g?start=5" />
      </Section>
    </ProjectContent>
  </PageContainer>
</template>
