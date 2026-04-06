<script setup lang="ts">
import { NAVIGATION_LIST } from "../constants";
import NavigationItem from "./NavigationItem.vue";
</script>

<template>
  <div
    class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10"
  >
    <nav
      data-collapsed="false"
      data-slot="root"
      class="relative flex gap-1.5 [&amp;&gt;div]:min-w-0 items-center justify-between bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      data-orientation="horizontal"
      dir="ltr"
      data-reka-navigation-menu=""
    >
      <div class="relative">
        <ul class="isolate flex item-center min-w-0">
          <template v-for="(item, index) in NAVIGATION_LIST" :key="item.label+index">
            <NavigationItem  :navigation-item="item"/>
          </template>

          <li class="min-w-0 py-2  flex items-center">
            <UColorModeButton />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
