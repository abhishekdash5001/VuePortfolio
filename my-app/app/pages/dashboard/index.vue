<script setup lang="ts">
import { useHello } from '~/composables/useHello'


const { message, loading, error } = useHello();
</script>

<template>
  <div>
  {{ message }}
  </div>
</template>