<script lang="ts">
  import { defineComponent } from 'vue';
  import { scrollTo } from '@/composables/utils';
  import IconArrowUp from '@/components/Icons/IconArrowUp.vue';
  import TopPanel from '@/components/TopPanel.vue';

  export default defineComponent({
    name: 'ProjectContainer',
    components: {
      TopPanel,
      IconArrowUp,
    },
    setup() {
      return {
        scrollTo,
      };
    },
  });
</script>

<template>
  <div
    id="top"
    class="pb-20"
  >
    <TopPanel />
    <div class="fixed bottom-0 right-0">
      <div
        class="text-base transition-all duration-300 ease-in-out scale-100 cursor-pointer p-7 hover:scale-110 hover:text-primary hover:fill-primary fill-gray-darken"
        @click="scrollTo('top')"
      >
        <div class="flex flex-col items-center">
          <div>
            <IconArrowUp class="h-7 w-7" />
          </div>
          <span>
            Scroll to top
          </span>
        </div>
      </div>
    </div>
    <PageContainer>
      <slot />
    </PageContainer>
  </div>
</template>
