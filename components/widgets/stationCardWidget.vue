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


defineProps<{ station: Station }>();
const playerStore = usePlayerStore();

function playSound(station: Station) {
  playerStore.update(station);
}
</script>

<template>
    <div
        class="w-[240px] p-4 space-y-4 rounded-xl cursor-pointer hover:bg-zinc-800"
        @click="() => playSound(station)"
      >
        <div class="p-4 bg-amber-700 rounded-xl">
          <NuxtImg
            :src="`https://api.dicebear.com/9.x/rings/svg?seed=${station._id}`"
          />
        </div>

        <div>
          <h2 class="font-semibold text-lg">{{ station._source.title }}</h2>
          <p class="text-sm">{{ station._source.subtitle }}</p>
        </div>
      </div>

</template>
