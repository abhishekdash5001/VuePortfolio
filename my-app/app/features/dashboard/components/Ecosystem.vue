<script setup lang="ts">
import type { TechStack } from "../types";

defineProps<{
  isLoading: boolean;
  stacks: TechStack[];
}>();
</script>

<template>
  <UMarquee pause-on-hover class="[--duration:40s]">
    <template v-for="(stack, index) in stacks" :key="stack.name + index">
      <img
        :src="stack.url"
        :alt="stack.name"
        height="100"
        width="200"
        class="w-[200px] h-[100px] object-contain shrink-0 techStack-animation"
        :style="{ '--delay': `${index * 1}s` }"
      />
    </template>
  </UMarquee>
</template>

<style scoped>
.techStack-animation {
  opacity: 0;
  animation: fade-in;
  animation-duration: 2s;
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    /* transform: scale(1.2); */
  }
  100% {
    opacity: 1;
    /* transform: scale(1); */
  }
}
</style>
