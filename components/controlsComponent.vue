


<template>
  <div
    class="fixed w-full left-0 bottom-0 p-4 flex justify-between items-center backdrop-blur-lg bg-black/30"
  >
    <WidgetsControlNowPlayingWidget />

    <WidgetsControlCenterWidget />

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
</template>
