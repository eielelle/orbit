<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = v.object({
  username: v.pipe(
    v.string(),
    v.regex(/^[a-z0-9_-]{4,16}$/iu, "Invalid Username")
  ), // TODO: validate in server too.
  password: v.pipe(v.string(), v.minLength(8, "Must be at least 8 characters")),
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  username: "",
  password: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<template>
  <NuxtLayout name="auth">
    <UCard variant="soft">
      <template #header>
        <h1 class="text-4xl font-bold mb-2">Login</h1>
        <p>Welcome back. Please login.</p>
      </template>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField size="xl" label="Username" name="username">
          <UInput v-model="state.username" class="w-full" size="xl" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput
            v-model="state.password"
            type="password"
            class="w-full"
            size="xl"
          />
        </UFormField>

        <UButton type="submit" class="w-full justify-center" size="xl"
          >Login</UButton
        >
        <div class="flex flex-wrap mt-5">
          <div class="flex-1">
            <p>
              No account yet?
              <NuxtLink class="hover:underline text-primary" href="signup"
                >Sign up</NuxtLink
              >
            </p>
          </div>

          <div class="flex gap-4">
            <NuxtLink href="#">Help</NuxtLink>
            <NuxtLink href="#">Privacy</NuxtLink>
            <NuxtLink href="#">Terms</NuxtLink>
          </div>
        </div>
      </UForm>
    </UCard>
  </NuxtLayout>
</template>
