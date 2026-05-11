<script setup lang="ts">
import { type ExperienceValue } from "../types";

const props = defineProps<{
  experience: ExperienceValue["experience"][number];
  index: number;
}>();

const isVisible = ref(false);
const el = ref<HTMLElement | null>(null);

const startMothAndYear = computed<string>(() => {
  const startDate = new Date(props.experience.startDate);
  return (
    `${startDate.getMonth() + 1}`.padStart(2, "0") +
    "/" +
    startDate.getFullYear()
  );
});

const endMothAndYear = computed<string>(() => {
  if (!props.experience.endDate) {
    return "Present";
  }
  const endDate = new Date(props.experience.endDate);
  return (
    `${endDate.getMonth() + 1}`.padStart(2, "0") + "/" + endDate.getFullYear()
  );
});

const scrollWatcher = () => {
  console.log(window.scrollY);
};

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true; 
        observer.disconnect(); 
      }
    },
    {
      threshold: 0.2, // 20% visible triggers
    },
  );

  if (el.value) observer.observe(el.value);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollWatcher);
});
</script>

<template>
  <section
    ref="el"
    class="about_experience"
    :class="{ inView: isVisible }"
    :style="{ '--delay': `${index * 0.25}s` }"
  >
    <h5
      class="about_experience-duration text-pretty tracking-tight text-highlighted"
    >
      {{ startMothAndYear }} - {{ endMothAndYear }}
    </h5>

    <p class="about_experience-details">
      {{ experience.designation }} at
      <span :style="{ color: experience.color.hex }">
        {{ experience.companyName }}
      </span>
    </p>
  </section>
</template>

<style scoped>
.about_experience {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  opacity: 0;
  transition:
    opacity 0.5s,
    transform 0.5s;
  transform: translateY(20px);
  transition-delay: var(--delay);
}
.about_experience-duration {
  flex: 0 0 150px;
}
.about_experience-gap {
  border: 1px solid black;
  flex: 1 0 50px;
}
.about_experience-details {
  flex: 0 0 300px;
}
.inView {
  opacity: 1;
  transform: translateY(0);
}
</style>
