<script setup lang="ts">
import { useHello } from '~/composables/useHello'


const {error,execute,profile,loading} = useHello();

onMounted(()=>{
  execute();
})
</script>

<template>
  <div>
  {{ profile }}
  </div>
</template>