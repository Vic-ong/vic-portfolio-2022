<script lang="ts">
  import { defineComponent } from 'vue';
  import Socials from '@/views/Socials.vue';

  export default defineComponent({
    name: 'Contact',
    components: {
      Socials,
    },
  });
</script>

<template>
  <div class="space-y-5">
    <Title>
      Contact
    </Title>
    <div class="space-y-20">
      <div class="space-y-3">
        <div>
          I'm based in Vancouver, Canada, and am open for potential opportunities related to Unreal Engine and/or fullstack development projects!
        </div>
        <div>
          Please email me at
          <a
            href="mailto:vickyocc53@gmail.com"
            target="_blank"
          >
            vickyocc53@gmail.com
          </a>
          for all communications.
        </div>
        <div>
          Feel free to check out my up-to-date
          <a
            href="https://drive.google.com/file/d/161cbQa_guJdmQe3Oy3JCplWtEm18VQpR/view?usp=sharing"
            target="_blank"
          >
            résumé.
          </a>
        </div>
      </div>
      
      <AnimateScrollIntoView
        animation-type="siv-fade-b"
        :threshold="0.3"
      >
        <Socials />
      </AnimateScrollIntoView>
    </div>
  </div>
</template>
