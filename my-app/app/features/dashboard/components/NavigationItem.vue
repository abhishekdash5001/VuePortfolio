<script setup lang="ts">
import { type NavigationItem } from "~/features/dashboard/types";

defineProps<{
  navigationItem: NavigationItem;
}>();
</script>

<template>
  <li class="min-w-0 py-2 flex items-center">
    <ULink class="text-[14px] py-[4px] px-[8px]" :to="navigationItem.to">
      {{ navigationItem.label }}
    </ULink>
  </li>
</template>
