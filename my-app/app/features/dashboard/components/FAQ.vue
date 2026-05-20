<script setup lang="ts">
import { type FaqValue } from "../types";
import FaqTabs from "./FaqTabs.vue";

defineProps<{
  faqs: FaqValue['faqs']
}>();
</script>

<template>
  <section class="pt-[128px]">
    <h2
      class="text-pretty tracking-tight text-highlighted text-left text-xl sm:text-xl lg:text-2xl font-medium"
    >
      Frequently Asked Questions
    </h2>

    <div
      class="text-sm text-pretty tracking-tight text-highlighted text-muted text-balance mt-[12px]"
    >
      Answers to common questions about my process and services.
    </div>

    <FaqTabs :faqs="faqs" />
  </section>
</template>
