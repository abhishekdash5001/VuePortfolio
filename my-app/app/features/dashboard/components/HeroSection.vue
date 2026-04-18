<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
import type { Profile } from "../types";

defineProps<{
  isLoading: boolean;
  profile: Profile;
}>();

const imageLoaded = ref<boolean>(false);
const colorMode = useColorMode();
const isMounted = ref(false);

const contentVisible = ref(false);

const handleImageLoad = () => {
  requestAnimationFrame(() => {
    imageLoaded.value = true;
    promiseTimeout(200)
    contentVisible.value = true;
  
  });
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="lg:col-span-10">
    <div class="relative isolate">
      <UContainer
        class="flex flex-col lg:grid gap-16 sm:gap-y-24 py-9"
      >
        <div class="text-center" >
          <div class="header">
            <div class="mb-4 flex items-center justify-center">
              <div class="profile_image_wrapper">
                <span
                   :class="{ imageLoaded }"
                  class="inline-flex items-center justify-center shrink-0 select-none profile-image rounded-full align-middle bg-elevated text-base size-18 ring ring-default ring-offset-3 ring-offset-bg dark:block "
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
              class="tracking-tight font-bold text-highlighted text-pretty text-3xl sm:text-4xl lg:text-5xl text-shadow-md max-w-lg mx-auto profile-name profile-content"
              :class="{ imageLoaded :contentVisible }"
              style="--delay: 0.5s"
            >
              <div>Hey, I'm {{ profile.name }} {{ profile.title }}</div>
            </h1>

            <div
              class="text-md mx-auto max-w-2xl sm:text-md text-muted text-balance mt-6 profile-bio profile-content"
               style="--delay: 0.75s"
              :class="{ imageLoaded :contentVisible}"
            >
              <div data-ap="">
                {{ profile.bio }}
              </div>
            </div>
          </div>
          <div
            id="footer"
            class="mt-10 profile-social profile-content"
             style="--delay: 1s"
            :class="{ imageLoaded :contentVisible}"
          >
            <div
              id="links"
              class="flex flex-wrap gap-x-6 gap-y-3 mt-4 flex-col justify-center items-center"
            >
              <div id="social" class="gap-x-4 inline-flex mt-4">
                <template v-if="profile.social.github">
                  <ULink :href="profile.social.github">
                    <Icon name="uil:github"  size="20" />
                  </ULink>
                </template>

                <ULink :href="profile.social.linkedin">
                 
                  <Icon name="uil:linkedin"  size="20" />
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



.hero-ready {
  opacity: 1;
}
.profile-image {
  filter: blur(20px);
  opacity: 0;
  transform: scale(1.05);
  transition:
    filter 1s ease-in-out 1s,
    opacity 1s ease-in-out 1s,
    transform 1s ease-in-out 1s;
}

.profile-content{
  filter: blur(20px);
  opacity: 0;
  transform: scale(1.05);
  transition:
    filter 1s ease var(--delay),
    opacity 1s ease var(--delay),
    transform 1s ease var(--delay);
}


.imageLoaded {
  filter: blur(0);
  opacity: 1;
  transform: scale(1);
}
</style>
