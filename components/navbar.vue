<template>
  <div class="flex gap-4">
    <NuxtLink
      class="text-white text-2xl hover:text-sky-500 hover:scale-110 transition-all"
      v-for="item in routes"
      :key="item"
      :to="item.path"
    >
      {{ item.title }}</NuxtLink
    >
  </div>
</template>

<script setup>
const routes = [
  {
    title: "About page",
    path: "/about",
  },
  {
    title: "Index page",
    path: "/",
  },
  {
    title: "Help page",
    path: "/help",
  },
];
</script>
