<script setup lang="ts">
import StationCardWidget from './stationCardWidget.vue';

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
      <StationCardWidget
        v-for="station in props.data.hits"
        :key="station._id"
        :station="station"
      />
      
    </div>
  </section>
</template>
