<script setup lang="ts">
const playerStore = usePlayerStore();
</script>

<template>
  <div class="flex justify-center gap-4">
    <UButton class="text-2xl" icon="i-lucide-chevron-first" variant="ghost" />
    <UButton
      @click="playerStore.togglePlay"
      class="bg-white rounded-full text-2xl"
      icon="i-lucide-play"
      size="xl"
    />
    <UButton class="text-2xl" icon="i-lucide-chevron-last" variant="ghost" />
  </div>
</template>
