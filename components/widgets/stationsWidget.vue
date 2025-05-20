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

interface Props {
  data: { hits: Station[] } | null;
}

const props = defineProps<Props>();
const playerStore = usePlayerStore();

function playSound(station: Station) {
  playerStore.update(station);
}
</script>

<template>
  <!-- stations -->
  <section>
    <header>
      <h1 class="text-3xl font-semibold">Stations</h1>
      <p>Some stations we found.</p>
    </header>
    <div
      v-if="props.data != null"
      class="flex flex-wrap justify-evenly justify-last-left gap-6"
    >
      <div
        v-for="station in props.data.hits"
        :key="station._id"
        class="w-[240px] p-4 space-y-4 rounded"
      >
        <div class="p-4 bg-amber-700 rounded">
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
  </section>
</template>
