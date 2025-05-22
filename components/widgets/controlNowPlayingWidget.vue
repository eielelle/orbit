<script setup lang="ts">
const playerStore = usePlayerStore();
const status = ref("bg-green-400");

playerStore.$subscribe(
  (_, state) => {
    if (state.status == "buffering") {
      status.value = "bg-amber-400";
    }

    if (state.status == "ready") {
      status.value = "bg-green-400";
    }

    if (state.status == "error" || state.status == "stopped") {
      status.value = "bg-red-400";
    }
  },
  { immediate: true }
);
</script>

<template>
  <div v-if="playerStore != null" class="flex gap-4 items-center">
    <div class="w-14 aspect-square bg-amber-700 p-2 rounded-xl">
      <NuxtImg
        :src="`https://api.dicebear.com/9.x/rings/svg?seed=${playerStore.station?._id}`"
      />
    </div>
    <div>
      <h2 class="text-sm font-semibold">
        {{ playerStore.station?._source.title }}
      </h2>
      <p class="text-sm">{{ playerStore.station?._source.subtitle }}</p>
    </div>
    <span class="relative flex size-5">
      <span
        :class="status"
        class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
      />
      <span :class="status" class="relative inline-flex size-5 rounded-full" />
    </span>
  </div>
</template>
