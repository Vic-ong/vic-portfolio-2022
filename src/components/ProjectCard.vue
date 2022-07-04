<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue';
  import { scrollTo } from '@/composables/utils';
  import IconUser from '@/components/Icons/IconUser.vue';
  import IconTools from '@/components/Icons/IconTools.vue';
  import IconClock from '@/components/Icons/IconClock.vue';
  import IconArrowDown from '@/components/Icons/IconArrowDown.vue';

  type ProjectInfo = {
    title: string;
    description: string;
    role: string;
    tools: string;
    duration: string;
  };

  export default defineComponent({
    name: 'ProjectCard',
    components: {
      IconArrowDown,
    },
    props: {
      data: {
        type: Object as PropType<ProjectInfo>,
        default: () => ({
          title: undefined,
          description: undefined,
          role: undefined,
          tools: undefined,
          duration: undefined,
        }),
      },
      backgroundImg: {
        type: String,
        default: undefined,
      },
      scrollDownTo: {
        type: String,
        default: undefined,
      },
    },
    setup(props) {
      const items = computed(() => [
        {
          title: 'Role',
          icon: IconUser,
          text: props.data.role,
        },
        {
          title: 'Tools',
          icon: IconTools,
          text: props.data.tools,
        },
        {
          title: 'Duration',
          icon: IconClock,
          text: props.data.duration,
        },
      ]);

      const scrollToHandler = () => {
        if (props.scrollDownTo) {
          scrollTo(props.scrollDownTo);
        }
      };

      return {
        items,
        scrollToHandler,
      };
    },
  });
</script>

<template>
  <div
    :style="{
      backgroundImage: backgroundImg ? `url(${backgroundImg})` : '',
      backgroundPosition: 'center center',
    }"
    class="relative grid items-center h-screen grid-cols-2 px-10 py-10 md-above:px-20"
  >
    <div class="space-y-10">
      <div class="heading">
        {{ data.title }}
      </div>
      <div class="text-xl">
        {{ data.description }}
      </div>
      <div class="grid items-start grid-cols-3 pt-5 gap-7">
        <div
          v-for="item in items"
          :key="item.text"
          class="space-y-3 text-gray-darken"
        >
          <div class="flex items-center space-x-3">
            <component
              :is="item.icon"
              class="w-4 h-4 fill-gray-darken"
            />
            <div class="text-lg font-semibold text-gray-darken">
              {{ item.title }}
            </div>
          </div>
          <div>
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="scrollDownTo"
      class="absolute p-2 cursor-pointer bottom-10 left-1/2"
      @click="scrollToHandler"
    >
      <IconArrowDown class="h-7 w-7 fill-white-darker animate-bounce" />
    </div>
  </div>
</template>
