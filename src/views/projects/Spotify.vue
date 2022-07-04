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
        title: 'My Spotify Features',
        description: 'A full-stack application to showcase a conceptual design of the Spotify dashboard that allows user to look at the analysis of their playlists using Spotify\'s API.',
        role: 'Software developer (solo)',
        tools: 'Vite, Vue 3, Tailwind, NodeJS, Firebase',
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
      :background-img="img.web.spotify.hero1"
      :data="projectInfo"
    />
    <ProjectContent id="project-next">
      <Section>
        <Title>Overview</Title>
        <div>
          We have observed time and time again where
          <a
            href="https://uxdesign.cc/form-is-function-9a58e9f8bb75"
            target="_blank"
          >
            designs converge in the contemporary market
          </a>
          with businesses produce similar-looking products because it appeals to the masses. What vintage designs will give us, in contrast, is the big, the bold and the bizarre. We can see its presence in film productions (Wes Anderson), speaker designs (Marshall) and fashion trends (rise of vintage fashion). Many are drawn toward the nostalgic sentiment it offers, including myself.
        </div>
        <div>
          The goal of this project is to create a web dashboard using vintage color palettes and animation. Functionally, it allow users to sign in to via their Spotify account and see the audio features of their playlists.
        </div>
        <ProjectLinks
          demo="https://my-spotify-features.web.app/"
          source="https://github.com/Vic-ong/my-spotify-features"
        />
      </Section>

      <Section>
        <Title>Features</Title>
        <div>
          This app has a few basic functionalities of a music player and shows fun insights using Spotify API.
        </div>
        <List
          :items="[
            'Authenticate by prompting users to log in to their Spotify',
            'Animations depicting the actions of taking a vinyl disc from an album cover',
            'Audio feature analysis of users\' playlist',
            'A music player to play track samples',
            'Show the user\'s top tracks and artists he/she listens to',
          ]"
        />
      </Section>
      
      <Section>
        <Title>Details</Title>
        <div>
          <span class="font-semibold">Frontend:</span> Vite, Vue 3, Typescript, Tailwind
        </div>
        <div>
          <span class="font-semibold">Backend:</span> Google Functions, NodeJS
        </div>
        <div>
          <span class="font-semibold">Infrastructure:</span> Firebase, Google Cloud Platform
        </div>

        <Title2>Colors</Title2>
        <div>
          I decided to use a retro color palette with a Wes Anderson's Grand Budapest Hotel twist—pastel colors! I painted it on the background of the application.
        </div>
        <div class="flex items-center justify-center">
          <img
            :src="img.web.spotify.colorScheme"
            style="height: 21rem"
          >
          <div class="flex flex-col items-center justify-center lg-above:space-y-7">
            <div
              class="w-12 h-12 rounded-sm"
              style="background-color: #53B5BB"
            />
            <div
              class="w-12 h-12 rounded-sm"
              style="background-color: #EEBB2E"
            />
            <div
              class="w-12 h-12 rounded-sm"
              style="background-color: #E7F0F0"
            />
            <div
              class="w-12 h-12 rounded-sm"
              style="background-color: #F9E4F0"
            />
          </div>
          <img
            :src="img.web.spotify.homepage"
            style="height: 20rem"
            class="pl-3"
          >
        </div>

        <Title2>Animation</Title2>
        <div>
          For animations, I wanted to mimic the action of taking a vinyl disc from an album cover. I think it would create a cool effect and nostalgic sentiments so I decided to recreate the animation based on the gif below, in CSS.
        </div>
        <div class="flex flex-col items-center">
          <iframe
            src="https://giphy.com/embed/4N1wKKFopon8EWCvKh"
            frameBorder="0"
            class="h-44 giphy-embed"
            allowFullScreen
          />
          <a
            href="https://giphy.com/gifs/vinylmeplease-vinyl-sorcerer-miles-davis-4N1wKKFopon8EWCvKh"
            target="_blank"
            class="text-sm text-gray-darken"
          >
            Source: Giphy
          </a>
        </div>
        
        <div>
          There are 2 components: an album cover and a vinyl disc that slides out from the cover. The
          <a
            href="https://developer.spotify.com/documentation/web-api/reference/#/"
            target="_blank"
          >
            tracks and albums data from Spotify contains thumbnail images
          </a>
          which I will use as the album cover. As for the vinyl disc, I just created a simple-looking disc in svg format.
        </div>
        <div class="flex justify-center">
          <iframe
            height="323"
            scrolling="no"
            title="eYvoWzZ"
            src="https://codepen.io/vic-ong/embed/eYvoWzZ?height=323&theme-id=dark&default-tab=html,result-box"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
            class="lg-above:w-96"
          >
            See the Pen <a href='https://codepen.io/vic-ong/pen/eYvoWzZ'>eYvoWzZ</a> by Vic
            (<a href='https://codepen.io/vic-ong'>@vic-ong</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        </div>

        <Title2>Authentication</Title2>
        <div>
          According to the Spotify API documentation, I can create a pop-up to prompt users to log in to their Spotify and return the access token to be used for future API calls. Using the authentication code flow guide, I created a NodeJS backend service to handle authentication requests.
        </div>
        <ImageCanvas
          :src="img.web.spotify.authFlow"
          height="30rem"
        />

        <Title2>Audio features analysis</Title2>
        <div>
          Spotify focuses a lot on data analytics when it comes to exploring why people listen to certain music and music trends. Analysis I'm interested in are the top tracks, top artists and
          <a
            href="https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features"
            target="_blank"
          >
            audio features contained in tracks.
          </a>
          For the feature analysis, I calculated the mean of each feature score in a playlist and used Chart.js to display the result. As observed below, it tells me that my playlist "Rainbow Kitten Surprise" is generally high-energy and danceable. Check out the playlist
          <a
            href="https://open.spotify.com/playlist/6tgTYU8rKaKP93T7k4dHVb"
            target="_blank"
          >
            here!
          </a>
        </div>
        <ImageCanvas :src="img.web.spotify.audioFeatures" />
      </Section>
    </ProjectContent>
  </PageContainer>
</template>
