<script setup lang="ts">
import IconChevronLeft from '@/components/Icons/IconChevronLeft.vue';
import { portraits } from '@/constants/photography';

const items = portraits.map((x) => {
  return x.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?export=view&id=').replace('/view?usp=sharing', '');
});
</script>

<template>
  <div class="relative flex items-center justify-center py-20">
    <div class="absolute top-0 left-0">
      <router-link
        to="/"
        class="flex items-center p-2 space-x-2 text-base text-gray-darken"
      >
        <div>
          <IconChevronLeft class="w-4 h-4 fill-gray-darken" />
        </div>
        <div>
          Back to portfolio
        </div>
      </router-link>
    </div>
    <div class="w-3/5">
      <div class="grid grid-cols-2 pointer-events-none gap-x-1 gap-y-10">
        <div
          v-for="src in items"
          :key="src"
        >
          <img
            :src="src"
            class="object-cover"
            oncontextmenu="return false;"
          >
        </div>
      </div>
    </div>
  </div>
</template>
