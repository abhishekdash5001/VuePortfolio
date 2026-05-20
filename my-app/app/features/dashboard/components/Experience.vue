<script setup lang="ts">
import { type ExperienceValue } from "../types";
import ExperienceItem from "./ExperienceItem.vue";

const props = defineProps<{
  experiences: ExperienceValue["experience"];
  carrierStartDate: Date;
}>();

const totalExperience = computed<string>(() => {
  const carriedStartDate = new Date(props.carrierStartDate);
  const today = new Date();

  let years = today.getFullYear() - carriedStartDate.getFullYear();
  let months = today.getMonth() - carriedStartDate.getMonth();

 
  if (
    months < 0 ||
    (months === 0 && today.getDate() < carriedStartDate.getDate())
  ) {
    years--;
    months += 12;
  }

  return `${years} years ${months} months`;
});
</script>

<template>
  <section>
    <h2
      class="text-pretty tracking-tight text-highlighted text-left text-xl sm:text-xl lg:text-2xl font-medium"
    >
      Work Experience ({{ totalExperience }})
    </h2>
    <div class="flex flex-col gap-[10px] mt-[12px]">
      <template
        v-for="(experience, index) of experiences"
        :key="experience.companyName + index"
      >
        <ExperienceItem :experience="experience" :index="index" />
      </template>
    </div>
  </section>
</template>
