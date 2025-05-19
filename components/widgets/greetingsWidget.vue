<script setup lang="ts">
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning, space cadet ☀️";
  } else if (hour < 18) {
    return "Good afternoon, explorer 🌎";
  } else {
    return "Good evening, stargazer 🌙";
  }
}
</script>

<template>
  <h1 class="text-3xl font-semibold">{{ getGreeting() }}</h1>
</template>
