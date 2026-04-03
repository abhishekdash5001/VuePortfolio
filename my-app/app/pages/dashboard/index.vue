<script setup lang="ts">
const { message, loading, error } = useHello();
</script>

<template>
  <div>
  {{ message }}
  </div>
</template>