<script setup lang="ts">
import PrimaryNavigation from "~/features/dashboard/components/PrimaryNavigation.vue";

import HeroSection from "~/features/dashboard/components/HeroSection.vue";
import Ecosystem from "~/features/dashboard/components/Ecosystem.vue";

import { useProfile } from "~/features/dashboard/composables/useProfile";
import { useTechStacks } from "~/features/dashboard/composables/useTechStacks";

const profile = useProfile();
const techStack = useTechStacks();

onMounted(async () => {
  await profile.execute();
  await techStack.execute();
});
</script>

<template>
  <UContainer class="sm:border-x border-default pt-10 px-4 sm:px-6 lg:px-" max>
    <PrimaryNavigation />
    <main class="min-h-[calc(100vh-var(--ui-header-height))] relative">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
        <template v-if="profile.state">
          <HeroSection
            :is-loading="profile.loading.value"
            :is-completed="profile.completed.value"
            :profile="profile.state"
          />
        </template>

        <template>
          <div class="lg:col-span-10">
            <template v-if="techStack.state.stacks">
              <Ecosystem  :is-loading="techStack.loading.value" :stacks="techStack.state.stacks"/>
            </template>
          
          </div>
        </template>
      </div>
    </main>
  </UContainer>
</template>
