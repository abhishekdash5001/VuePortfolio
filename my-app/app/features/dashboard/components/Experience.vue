<script setup lang="ts">
import { type ExperienceValue } from "../types";
import ExperienceItem from "./ExperienceItem.vue";

defineProps<{
  experiences: ExperienceValue["experience"];
}>();
</script>

<template>
  <section>
    <h2
      class="text-pretty tracking-tight text-highlighted text-left text-xl sm:text-xl lg:text-2xl font-medium"
    >
      Work Experience
    </h2>
    <div class="flex flex-col gap-[10px] mt-[12px]">
      <template v-for="(experience, index) of experiences" :key="experience.companyName+index">
       
          <ExperienceItem :experience="experience"  :index="index"/>
        
      </template>
    </div>
  </section>
</template>
