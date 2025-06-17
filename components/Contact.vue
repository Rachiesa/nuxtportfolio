<template>
  <section id="contact" class="flex h-screen w-screen">
    <div id="rl" class="w-1/3 bg-secondary hidden md:block"></div>
    <div
      id="md"
      class="flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3"
    >
      <div class="flex justify-end items-end text-md h-1/12"></div>
      <div class="flex items-end h-3/12 text-7xl z-2">
        <h1 id="contactitem" class="opacity-0">LET'S TALK</h1>
      </div>
      <form
        id="contactitem"
        @submit.prevent="submitForm"
        class="opacity-0 flex flex-col items-start h-7/12 gap-1 z-2"
      >
        <Input
          type="text"
          placeholder="NAME"
          class="hover:animate-pulse placeholder:text-primary text-primary h-1/6 rounded-none bg-secondary border-b-2 border-tertiary hover:bg-secondary"
          name="name"
          v-model="form.name"
          required
        />
        <Input
          type="email"
          placeholder="EMAIL"
          class="hover:animate-pulse placeholder:text-primary text-primary h-1/6 rounded-none bg-secondary border-b-2 border-tertiary hover:bg-secondary"
          name="email"
          v-model="form.email"
          required
        ></Input>
        <Textarea
          type="text"
          placeholder="MESSAGE"
          class="hover:animate-pulse placeholder:text-primary text-primary h-1/6 rounded-none bg-secondary border-b-2 border-tertiary hover:bg-secondary"
          name="message"
          v-model="form.message"
          required
        ></Textarea>
        <div class="flex justify-end h-1/6 w-full">
          <Button
            type="submit"
            class="hover:animate-pulse text-primary h-4/5 w-2/6 rounded-none bg-tertiary hover:bg-secondary border-primary"
            >{{ result }}</Button
          >
        </div>
      </form>
    </div>
    <div id="rl" class="w-1/3 bg-secondary hidden md:block"></div>
  </section>
</template>

<script setup>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ref } from "vue";
const apikey = useRuntimeConfig().public.web3api;
const form = ref({
  access_key: `${apikey}`,
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  message: "",
});

const result = ref("Submit");
const status = ref("");

const submitForm = async () => {
  result.value = "Please wait...";
  try {
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form.value,
    });

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      status.value = "error";
    }
  } catch (error) {
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";

    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>
