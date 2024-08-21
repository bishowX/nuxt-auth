<script lang="ts" setup>
const { data } = await useFetch("/api/hi");

const users = data.value.data || [];

console.log("data: ", users);
</script>

<template>
  <h1>Stuff page</h1>
  <div v-for="user in users" class="user-profile">
    <h2>{{ user.name }}</h2>
    <p><strong>Language:</strong> {{ user.language }}</p>
    <p><strong>ID:</strong> {{ user.id }}</p>
    <p><strong>Bio:</strong> {{ user.bio }}</p>
    <p><strong>Version:</strong> {{ user.version }}</p>
  </div>
</template>

<style scoped>
h1 {
  position: sticky;
  top: 20px;
}

.user-profile {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  margin-bottom: 16px;
}

.user-profile h2 {
  margin-top: 0;
}

.user-profile p {
  margin: 8px 0;
}
</style>
