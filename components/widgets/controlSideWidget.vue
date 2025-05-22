<script setup lang="ts">
const playerStore = usePlayerStore();

const volume = ref(playerStore.volume * 100);
const icon = ref('i-lucide-volume-1')

function toggleMute() {
  playerStore.toggleMute();
  icon.value = playerStore.muted ? 'i-lucide-volume-off' : checkVolumeRange(volume.value)
}

function checkVolumeRange(volume: number) {
  if (!playerStore.muted) {
    if (volume <= 10) {
      return 'i-lucide-volume'
    }
  
    if (volume >= 90) {
      return 'i-lucide-volume-2'
    }
  
    return 'i-lucide-volume-1'
  }

  return 'i-lucide-volume-off'
}

watch(volume, (state) => {
  playerStore.updateVolume(state);
  icon.value = checkVolumeRange(state)
}, { immediate: true });
</script>

<template>
  <!-- right -->
  <div class="flex w-1/8">
    <div class="flex flex-1 items-center gap-1">
      <UButton
        class="text-2xl"
        :icon="icon"
        variant="ghost"
        size="xl"
        @click="toggleMute"
      />
      <USlider v-model="volume" class="flex-1" :min="0" :max="100" />
    </div>
  </div>
</template>
