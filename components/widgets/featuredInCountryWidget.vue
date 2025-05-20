<script setup lang="ts">
interface Channel {
  _id: string;
  _source: {
    code: string;
    stream: string;
    title: string;
    subtitle: string;
    type: string;
  };
}

const {data} = await useFetch("/api/v1/stations/home");
const playerStore = usePlayerStore();

function playSound(channel: Channel) {
  playerStore.update(channel)
}
</script>

<template>
  <div>
    <p>Stations in the Philippines</p>
    <!-- {{ data }} -->
    <div v-if="data != null" class="flex flex-wrap justify-evenly justify-last-left gap-6 my-6">
      <div v-for="channel in data.hits" :key="channel._id" class="w-[240px] p-4 space-y-4 rounded">
        <div class="p-4 bg-amber-700 rounded">
          <NuxtImg :src="`https://api.dicebear.com/9.x/rings/svg?seed=${channel._id}`" />
        </div>

        <div @click="() => playSound(channel)">
          <h2 class="font-semibold text-lg">{{ channel._source.title }}</h2>
          <p class="text-sm">{{ channel._source.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
