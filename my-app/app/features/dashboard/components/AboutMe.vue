<script setup lang="ts">
import { type ExperienceValue } from "../types";
import Experience from "./Experience.vue";

defineProps<{
  isLoading: boolean;
  experiences: ExperienceValue["experience"];
  bio: string | undefined;
  carrierStartDate:Date
}>();
</script>

<template>
  <div class="about_section flex flex-col md:flex-row">
    <section class="aboutMe">
      <template v-if="bio">
        <h2
          class="text-pretty tracking-tight text-highlighted text-left text-xl sm:text-xl lg:text-2xl font-medium"
        >
          About Me
        </h2>

        <p
          class="text-sm text-pretty tracking-tight text-highlighted mx-auto max-w-2xl text-muted text-balance mt-[12px]"
        >
          {{ bio }}
        </p>
      </template>
    </section>

    <section class="experience">
      <Experience :experiences="experiences"   :carrier-start-date="carrierStartDate"/>
    </section>
  </div>
</template>

<style scoped>
.about_section {
  display: flex;
  opacity: 1;
  padding-top: 128px;
  gap: 10px;
  flex-wrap: nowrap;
  /* animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards; */
}

.aboutMe {
  flex: 0 0 calc(50% - 5px);
}

.experience {
  flex: 0 0 calc(50% - 5px);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
