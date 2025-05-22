<script setup lang="ts">
import StationCardWidget from './stationCardWidget.vue';

const { data } = await useFetch("/api/v1/stations/home");
</script>

<template>
  <div>
    <p>Stations in the Philippines</p>
    <!-- {{ data }} -->
    <div
      v-if="data != null"
      class="flex flex-wrap justify-evenly justify-last-left gap-6 my-6"
    >
      <StationCardWidget
        v-for="station in data.hits"
        :key="station._id"
        :station="station"
      />
    </div>
  </div>
</template>
