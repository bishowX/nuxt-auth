<script setup lang="ts">
const { data } = useFetch("/api/hello");
</script>

<template>
  <h1>Index page!</h1>
  {{ data }}
</template>
