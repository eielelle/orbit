<script setup lang="ts">
const playerStore = usePlayerStore();

const volume = ref(playerStore.volume * 100);

watch(volume, (state) => {
  playerStore.updateVolume(state)
});
</script>

<template>
  <!-- right -->
  <div class="flex w-1/8">
    <div class="flex flex-1 items-center gap-1">
      <UButton
        class="text-2xl"
        icon="i-lucide-volume-1"
        variant="ghost"
        size="xl"
      />
      <USlider v-model="volume" class="flex-1" :min="0" :max="100" />
    </div>
  </div>
</template>
