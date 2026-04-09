<script setup lang="ts">
import type { Profile } from "../types";

defineProps<{
  isLoading: boolean;
  profile: Profile;
}>();

const imageLoaded = ref<boolean>(false);
  const colorMode = useColorMode();

  console.log(colorMode.value)
  
const handleImageLoad = (): void => {
  requestAnimationFrame(() => {
    imageLoaded.value = true;
  });
};
</script>

<template>
  <div class="lg:col-span-10">
    <div class="relative isolate">
      <UContainer
        class="flex flex-col lg:grid gap-16 sm:gap-y-24 py-18 sm:py-24 lg:py-32"
      >
        <div class="text-center">
          <div class="header">
            <div class="mb-4 flex items-center justify-center">
              <div class="profile_image_wrapper">
                <span
                :class="{ imageLoaded }"
                  class="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated text-base size-18 ring ring-default ring-offset-3 ring-offset-bg dark:block profile-image"
                >
                  <img
                    :src="profile.image.url"
                    :alt="profile.image.alt"
                    class="h-full w-full rounded-[inherit] object-cover "
                    @load="handleImageLoad"
                    
                  />
                </span>
              </div>
            </div>

            <h1
             
              class="tracking-tight font-bold text-highlighted text-pretty text-3xl sm:text-4xl lg:text-5xl text-shadow-md max-w-lg mx-auto profile-name"
              :class="{ imageLoaded }"
            >
              <div
               
               
              >
                Hey, I'm {{ profile.name }} {{ profile.title }}
              </div>
            </h1>

            <div
              class="text-md mx-auto max-w-2xl sm:text-md text-muted text-balance mt-6 profile-bio"
               :class="{ imageLoaded }"
            >
              <div data-ap="">
                {{ profile.bio }}
              </div>
            </div>
          </div>
          <div id="footer" class="mt-10 profile-social"  :class="{ imageLoaded }">
            <div
              id="links"
              class="flex flex-wrap gap-x-6 gap-y-3 mt-4 flex-col justify-center items-center"
            >
              <div id="social" class="gap-x-4 inline-flex mt-4">
                <template v-if="profile.social.github">
                  <ULink :href="profile.social.github">
                    <Icon name="uil:github" style="color: black" size="20" />
                  </ULink>
                </template>

                <ULink :href="profile.social.linkedin">
                  {{ dark }}
                  <Icon name="uil:linkedin" style="color: black" size="20" />
                </ULink>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<style scoped>
.profile-image {
  filter: blur(20px);
  opacity: 0.2;
  transform: scale(1.05);
  transition:
    filter 0.5s ease,
    opacity 0.5s ease,
    transform 0.5s ease;
}

.profile-name {
  filter: blur(20px);
  opacity: 0;
  transform: scale(1.05);
  transition:
    filter 0.5s ease-in-out 0.5s,
    opacity 0.5s ease-in-out  0.5s,
    transform 0.5s ease-in-out  0.5s;
}

.profile-bio{
  filter: blur(20px);
  opacity: 0;
  transform: scale(1.05);
  transition:
    filter 1s ease 1s,
    opacity 1s ease 1s,
    transform 1s ease 1s;
}

.profile-social{
  filter: blur(20px);
  opacity: 0;
  transform: scale(1.05);
  transition:
    filter 0.5s ease 1.5s,
    opacity 0.5s ease 1.5s,
    transform 0.5s ease 1.5s;
}

.imageLoaded {
  filter: blur(0);
  opacity: 1;
  transform: scale(1);
}
</style>
