<script setup lang="ts">
import PrimaryNavigation from "~/features/dashboard/components/PrimaryNavigation.vue";
import HeroSection from "~/features/dashboard/components/HeroSection.vue";

import { useProfile } from "~/features/dashboard/composables/useProfile";

const profile = useProfile();

onMounted(async () => {
  await profile.execute();
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
            :profile="profile.state"
          />
        </template>
        <div
          data-orientation="horizontal"
          data-slot="root"
          class="group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] before:absolute before:pointer-events-none before:content-[&quot;&quot;] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[&quot;&quot;] after:z-2 after:from-default after:to-transparent flex-row before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]"
        >
          <!--[-->
          <div
            data-slot="content"
            class="flex items-center shrink-0 justify-around gap-(--gap) min-w-max w-full group-hover:[animation-play-state:paused] flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
          >
            <!--[--><!--[-->
            <div
              style="opacity: 1; filter: blur(0px); transform: none"
              data-ap=""
            >
         
            </div>
            <div
              style="opacity: 1; filter: blur(0px); transform: none"
              data-ap=""
            >
             
           
        
          <!--]-->
        </div>
        </div>
      </div>
      </div>
    </main>
  </UContainer>
</template>
