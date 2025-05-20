<script setup lang="ts">
const { data } = await useFetch("/api/v1/search", {
    query: {
        search: "japan"
    }
});

console.log(toRaw(data.value));
</script>

<template>
  <main>
    <header>
      <UButton>All</UButton>
      <UButton>Channels</UButton>
      <UButton>Places</UButton>
    </header>

    <!-- places -->
    <section></section>

    <!-- channels -->
    <section></section>
  </main>
</template>
