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

const { data } = await useFetch("/api/v1/stations/home");
const playerStore = usePlayerStore();

function playSound(station: Station) {
  playerStore.update(station);
}
</script>

<template>
  <div>
    <p>Stations in the Philippines</p>
    <!-- {{ data }} -->
    <div
      v-if="data != null"
      class="flex flex-wrap justify-evenly justify-last-left gap-6 my-6"
    >
      <div
        v-for="station in data.hits"
        :key="station._id"
        class="w-[240px] p-4 space-y-4 rounded-xl"
      >
        <div class="p-4 bg-amber-700 rounded-xl">
          <NuxtImg
            :src="`https://api.dicebear.com/9.x/rings/svg?seed=${station._id}`"
          />
        </div>

        <div @click="() => playSound(station)">
          <h2 class="font-semibold text-lg">{{ station._source.title }}</h2>
          <p class="text-sm">{{ station._source.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
