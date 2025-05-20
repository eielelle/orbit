<script setup lang="ts">
interface Station {
  _id: string;
  _source: {
    code: string;
    stream: string;
    title: string;
    subtitle: string;
    type: string;
  };
}

const searchStore = useSearchStore();

// Reactive data for fetched search results
const fetchData = ref<{ hits: Station[] } | null>(null);
const controller = ref<AbortController | null>(null);

// Run once immediately with current state
async function fetchDataWithState(query: string) {
  // Cancel previous request if any
  if (controller.value) {
    controller.value.abort();
  }

  controller.value = new AbortController();

  const { data } = await useFetch("/api/v1/search", {
    query: { search: query },
    signal: controller.value.signal,
  });

  fetchData.value = data.value;
}

// Then subscribe to subsequent changes
searchStore.$subscribe(
  async (_, state) => {
    await fetchDataWithState(state.query);
  },
  { immediate: true }
);
</script>

<template>
  <main>
    <header class="flex gap-4">
      <UButton class="rounded-full">All</UButton>
      <UButton variant="outline" class="rounded-full">Stations</UButton>
      <UButton variant="outline" class="rounded-full">Places</UButton>
    </header>

    <WidgetsPlacesWidget />

    <WidgetsStationsWidget :data="fetchData" />
  </main>
</template>
