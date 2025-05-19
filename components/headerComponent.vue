<template>
  <header class="flex justify-between items-center p-4">
    <NuxtImg class="w-10" src="/logo.png" />

    <div class="flex gap-x-4 w-2/6">
      <UButton
        to="/"
        class="rounded-full w-10 h-10 flex justify-center items-center"
        icon="i-lucide-home"
        size="xl"
        color="primary"
        variant="solid"
      />
      <UInput
        class="flex-1 rounded-full"
        icon="i-lucide-search"
        size="xl"
        variant="outline"
        placeholder="Which station do you want to play?"
      />
    </div>

    <div>
      <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
      <UButton to="/auth/login" variant="outline" class="p-3 rounded-full">
        Log In
      </UButton>
    </div>
  </header>
</template>
