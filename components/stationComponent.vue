<script setup lang="ts">
const playerStore = usePlayerStore();
</script>

<template>
  <aside class="p-4 bg-[#15171C] rounded-xl">
    <div v-if="playerStore.station != null" class="space-y-4">
      <!-- right -->
      <header class="flex justify-between items-center">
        <h2 class="text-xl font-semibold">Now listening...</h2>
        <span>...</span>
      </header>

      <div class="w-full aspect-square p-4 bg-amber-700 rounded-xl">
        <NuxtImg
          :src="`https://api.dicebear.com/9.x/rings/svg?seed=${playerStore.station?._id}`"
        />
      </div>

      <div class="flex justify-between items-center mb-12">
        <div>
          <h2 class="text-lg font-semibold">
            {{ playerStore.station?._source.title }}
          </h2>
          <p class="text-sm">{{ playerStore.station?._source.subtitle }}</p>
        </div>

        <UButton
          class="text-2xl"
          icon="i-lucide-copy"
          variant="ghost"
          size="xl"
        />
      </div>
    </div>
    <div class="rounded-xl overflow-hidden bg-zinc-800">
      <NuxtImg src="/cover.png" />

      <div class="p-4 space-y-4">
        <div class="flex items-center gap-4">
          <h2 class="text-xl font-semibold">About Orbit</h2>
          <UBadge size="sm" class="bg-amber-200">Preview</UBadge>
        </div>
        <p class="text-sm">
          Orbit is a modern radio streaming platform that brings you live,
          curated music from around the world. Whether you're into indie beats,
          classic hits, or underground streams, Orbit delivers high-quality
          audio with a seamless listening experience — anytime, anywhere.
        </p>
      </div>
    </div>
  </aside>
</template>
