<script lang="ts">
  import { defineComponent } from 'vue';
  import IconLinkedIn from '@/components/Icons/IconLinkedIn.vue';
  import IconGithub from '@/components/Icons/IconGithub.vue';
  import IconInstagram from '@/components/Icons/IconInstagram.vue';

  export default defineComponent({
    name: 'Socials',
    components: {
      IconLinkedIn,
      IconGithub,
      IconInstagram,
    },
    setup() {
      const links = [
        {
          icon: IconLinkedIn,
          text: 'linkedin.com/in/vickong',
          link: 'https://www.linkedin.com/in/vickong/',
        },
        {
          icon: IconGithub,
          text: 'github.com/vic-ong',
          link: 'https://github.com/vic-ong',
        },
        {
          icon: IconInstagram,
          text: 'instagram.com/vic_ong',
          link: 'https://www.instagram.com/vic_ong/',
        },
      ];
      return {
        links,
      };
    },
  });
</script>

<template>
  <div class="flex items-center justify-center space-x-12">
    <a
      v-for="item in links"
      :key="item.link"
      :href="item.link"
      target="_blank"
      class="group"
    >
      <div
              
        class="p-4 transition-transform duration-300 ease-in-out bg-black rounded-full cursor-pointer w-14 h-14 group-hover:scale-125"
      >
        <component
          :is="item.icon"
          class="fill-white-pure"
        />
      </div>
    </a>
  </div>
</template>
