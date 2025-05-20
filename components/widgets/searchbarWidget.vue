<script setup lang="ts">
const searchStore = useSearchStore()

const query = ref(searchStore.query);

function onEnter() {
    searchStore.update(query.value)
}

watch(query, (newValue) => {
  if (newValue.length <= 0) {
    searchStore.update(query.value)
  }
})
</script>

<template>
  <UInput
    v-model="query"
    
    class="flex-1 rounded-full"
    icon="i-lucide-search"
    size="xl"
    variant="outline"
    placeholder="Which station do you want to play?"

    @keydown.enter="onEnter"
  />
</template>
