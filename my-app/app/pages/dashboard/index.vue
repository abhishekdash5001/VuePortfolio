<script setup lang="ts">
import PrimaryNavigation from "~/features/dashboard/components/PrimaryNavigation.vue";

import HeroSection from "~/features/dashboard/components/HeroSection.vue";
import Ecosystem from "~/features/dashboard/components/Ecosystem.vue";
import AboutMe from "~/features/dashboard/components/AboutMe.vue";
import FAQ from "~/features/dashboard/components/FAQ.vue";

import { useProfile } from "~/features/dashboard/composables/useProfile";
import { useTechStacks } from "~/features/dashboard/composables/useTechStacks";
import { useExperienceAboutMe } from "~/features/dashboard/composables/useExperienceAboutMe";
import { useFAQs } from "~/features/dashboard/composables/useFAQs";

const profile = useProfile();
const techStack = useTechStacks();
const experienceAboutMe = useExperienceAboutMe();
const faqs = useFAQs();

const showAboutMe = computed(() =>
  Boolean(
    profile.state &&
    profile.state.bio !== "" &&
    experienceAboutMe.state.experience.length > 0,
  ),
);

const isAboutMeLoading = computed(
  () => experienceAboutMe.loading.value || profile.loading.value,
);

onMounted(async () => {
  await profile.execute();
  await techStack.execute();
  await experienceAboutMe.execute();
  await faqs.execute();
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
              <Ecosystem
                :is-loading="techStack.loading.value"
                :stacks="techStack.state.stacks"
              />
            </template>
          </div>
        </template>
      </div>

      <template v-if="showAboutMe">
        <AboutMe
          :bio="profile.state?.bio"
          :carrier-start-date="profile.state?.careerStartDate"
          :experiences="experienceAboutMe.state.experience"
          :isLoading="isAboutMeLoading"
        />
      </template>

      <template v-if="faqs.state.faqs.length > 0">
        <FAQ :faqs="faqs.state.faqs" />
      </template>
    </main>
  </UContainer>
</template>
