<script setup lang="ts">
const searchStore = useSearchStore();
</script>
<template>
  <main class="flex flex-col h-screen">
    <HeaderComponent />

    <div class="grid grid-cols-4 p-4 flex-1 gap-4">
      <aside class="p-4 space-y-4 bg-[#15171C] rounded-xl">
        <!-- left -->
        <header class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Your Library</h2>
          <UButton class="rounded-full" icon="i-lucide-plus">Create</UButton>
        </header>

        <UInput
          class="flex-1 rounded-full"
          icon="i-lucide-search"
          size="sm"
          variant="outline"
          placeholder="Search playlist"
        />
      </aside>

      <section class="col-span-2 bg-[#15171C] h-full p-6 rounded-xl">
        <!-- center -->
        <HomepageComponent v-if="searchStore.query.length <= 0" />
        <SearchComponent v-else />
      </section>

      <StationComponent />
    </div>

    <ControlsComponent />
  </main>
</template>
