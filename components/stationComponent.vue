<script setup lang="ts">
const playerStore = usePlayerStore();
</script>

<template>
  <aside class="p-4 bg-[#15171C] rounded">
    <div v-if="playerStore.station != null" class="space-y-4">
      <!-- right -->
      <header class="flex justify-between items-center">
        <h2 class="text-lg font-semibold">Now listening...</h2>
        <span>...</span>
      </header>

      <div class="w-full aspect-square p-4 bg-amber-700 rounded">
        <NuxtImg
          :src="`https://api.dicebear.com/9.x/rings/svg?seed=${playerStore.station?._id}`"
        />
      </div>

      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-lg font-semibold">
            {{ playerStore.station?._source.title }}
          </h2>
          <p>{{ playerStore.station?._source.subtitle }}</p>
        </div>

        <UButton
          class="text-2xl"
          icon="i-lucide-copy"
          variant="ghost"
          size="xl"
        />
      </div>

      <div>
        <h2 class="text-md font-semibold">About the station</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          consequatur aut inventore pariatur alias tenetur maiores velit ipsa
          sint natus.
        </p>
      </div>
    </div>
  </aside>
</template>
