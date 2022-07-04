<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue';
  import IconUser from '@/components/Icons/IconUser.vue';
  import IconTools from '@/components/Icons/IconTools.vue';
  import IconClock from '@/components/Icons/IconClock.vue';

  type ProjectInfo = {
    title: string;
    desc: string;
    objective: string;
    img: string;
    role: string;
    tools: string;
    duration: string;
    wip: boolean;
  };

  export default defineComponent({
    name: 'ProjectOverview',
    props: {
      data: {
        type: Object as PropType<ProjectInfo>,
        default: () => ({
          title: undefined,
          description: undefined,
          role: undefined,
          tools: undefined,
          duration: undefined,
          wip: false,
        }),
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

      return {
        items,
      };
    },
  });
</script>

<template>
  <div>
    <div>
      <img
        :src="data.img"
        class="shadow-md"
      >
    </div>

    <div class="pt-7">
      <div class="text-4xl font-bold text-center">
        {{ data.title }}
      </div>
      <div
        v-if="data.wip"
        class="font-semibold text-center text-primary"
      >
        (Ongoing project)
      </div>

      <div class="pt-10">
        <slot name="desc">
          {{ data.desc }}
        </slot>
      </div>

      <Section
        class="pt-5"
        title="Objective"
      >
        <slot name="objective">
          {{ data.objective }}
        </slot>
      </Section>
      

      <div class="grid gap-8 pt-12 md-below:grid-rows-3 lg-above:grid-cols-3">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col border-2 rounded-md"
        >
          <div class="flex py-5 space-x-5 bg-black rounded-t px-7">
            <component
              :is="item.icon"
              class="w-6 h-6 fill-white"
            />
            <div class="font-semibold text-white">
              {{ item.title }}
            </div>
          </div>
          <div class="flex-1 py-5 px-7">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
