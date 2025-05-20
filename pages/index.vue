<script setup lang="ts">
  const searchStore = useSearchStore();
</script>
<template>
  <main class="flex flex-col h-screen">
    <HeaderComponent />

    <div class="grid grid-cols-4 p-4 flex-1 gap-4">
      <aside class="p-4 space-y-4 bg-[#15171C] rounded">
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

      <section class="col-span-2 bg-[#15171C] h-full p-6 rounded">
        <!-- center -->
         <HomepageComponent v-if="searchStore.query.length <= 0" />
         <SearchComponent v-else />
      </section>

      <ChannelComponent />
    </div>

    <div
      class="fixed w-full left-0 bottom-0 p-4 flex justify-between items-center backdrop-blur-lg bg-black/30"
    >
      <!-- left -->
      <div class="flex gap-4 items-center">
        <div class="w-14 aspect-square bg-gray-400" />
        <div>
          <h2 class="text-sm font-semibold">KZ 99.9 FM</h2>
          <p class="text-sm">99.9 Hz</p>
        </div>
        <span class="relative flex size-5">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"
          />
          <span class="relative inline-flex size-5 rounded-full bg-amber-400" />
        </span>
      </div>

      <!-- center -->
      <div class="flex justify-center gap-4">
        <UButton
          class="text-2xl"
          icon="i-lucide-chevron-first"
          variant="ghost"
        />
        <UButton
          class="bg-white rounded-full text-2xl"
          icon="i-lucide-play"
          size="xl"
        />
        <UButton
          class="text-2xl"
          icon="i-lucide-chevron-last"
          variant="ghost"
        />
      </div>

      <!-- right -->
      <div class="flex w-1/8">
        <UButton
          class="text-2xl"
          icon="i-lucide-copy"
          variant="ghost"
          size="xl"
        />

        <div class="flex flex-1 items-center gap-1">
          <UButton
            class="text-2xl"
            icon="i-lucide-volume-1"
            variant="ghost"
            size="xl"
          />
          <USlider class="flex-1" :default-value="50" />
        </div>
      </div>
    </div>
  </main>
</template>
