<script setup lang="ts">
import PrimaryNavigation from "~/features/dashboard/components/PrimaryNavigation.vue";
import HeroSection from "~/features/dashboard/components/HeroSection.vue";

import { useProfile } from "~/features/dashboard/composables/useProfile";

const profile = useProfile();

onMounted(async () => {
  await profile.execute();
});
</script>

<template>
  <UContainer class="sm:border-x border-default pt-10 px-4 sm:px-6 lg:px-" max>
    <PrimaryNavigation />
    <main class="min-h-[calc(100vh-var(--ui-header-height))] relative">
      <div  class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
      <template v-if="profile.state">
        <HeroSection
          :is-loading="profile.loading.value"
          :profile="profile.state"
        />
      </template>
      </div>
    </main>
  </UContainer>
</template>
