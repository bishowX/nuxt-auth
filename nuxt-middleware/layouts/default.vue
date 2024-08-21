<template>
  <div class="container">
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/stuff">Stuff</NuxtLink>
    </header>
    <slot />
  </div>
</template>

<style scoped>
.container {
  position: relative;
}
header {
  top: 0;
  position: sticky;
}
</style>
