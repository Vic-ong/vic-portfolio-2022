<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    name: 'AnimateScrollIntoView',
    props: {
      animationType: {
        type: String,
        default: 'siv-fade-l',
      },
      threshold: {
        type: Number,
        default: 0.5,
      },
      persist: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const target = ref();
      const animate = ref(false);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (props.persist && !animate.value) {
            animate.value = entry.isIntersecting;
          } else if (!props.persist) {
            animate.value = entry.isIntersecting;
          }
        },
        {
          threshold: props.threshold,
        },
      );
      onMounted(() => {
        observer.observe(target.value);
      });
      return {
        animate,
        target,
      };
    },
  });
</script>

<template>
  <div ref="target">
    <transition :name="animationType">
      <div
        v-appear="animate"
        class="animated-component"
        v-bind="$attrs"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
