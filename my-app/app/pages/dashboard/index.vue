<script setup lang="ts">

import PrimaryNavigation from '~/features/dashboard/components/PrimaryNavigation.vue'
import { useHello } from "~/composables/useHello";

const { error, execute, profile, loading } = useHello();

onMounted(() => {
  execute();
});
</script>

<template>
  <UContainer class="sm:border-x border-default pt-10">
   <PrimaryNavigation/>
  </UContainer>
</template>
