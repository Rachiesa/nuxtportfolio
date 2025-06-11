<template>
  <div>
    <nav>
      <div
        class="flex fixed inset-x-0 justify-center md:justify-end top-0 md:right-0 z-10 text-tertiary font-anton md:text-xl p-1 gap-3">
        <div>
          <button @click="web('react')" class="">/About</button>
        </div>
        <div>
          <button @click="scrollTo('#projects')" class="">/Projects</button>
        </div>
        <div>
          <button @click="scrollTo('#contact')" class="">/Contact</button>
        </div>
      </div>
      <div class="flex h-screen w-screen">
        <div class="flex justify-end items-center w-1/3 bg-secondary text-tertiary">
          <h1 id="R" class="font-anton text-[200px] fixed z-10 p-3">R</h1>
        </div>
        <div class="flex justify-center items-center w-1/3 bg-primary text-tertiary">
          <h1 id="Y" class="font-anton text-[200px] z-2">Y</h1>
        </div>
        <div class="flex justify-start items-center w-1/3 bg-secondary text-tertiary">
          <h1 id="A" class="font-anton text-[200px] fixed z-10 p-3">A</h1>
        </div>
      </div>
    </nav>
    <NuxtRouteAnnouncer />

    <About />


    <div id="projects" class="h-screen w-screen bg-blue-400">
      <h1>Projects</h1>
    </div>
    <div id="contact" class="h-screen w-screen bg-green-400">
      <h1>Contact</h1>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/src/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./components/about.vue";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const scrollTo = (id) => {
  gsap.to(window, { duration: 1, scrollTo: id });
};



onMounted(() => {
  gsap.set("#R", { duration: 0, x: -500, opacity: 0 });
  gsap.to("#R", { duration: 2, x: 0, opacity: 1 });
  gsap.set("#Y", { duration: 0, y: 500, opacity: 0 });
  gsap.to("#Y", { delay: 0.5, duration: 2, y: 0, opacity: 1 });
  gsap.set("#A", { duration: 0, x: 500, opacity: 0 });
  gsap.to("#A", { delay: 1, duration: 2, x: 0, opacity: 1 });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,

    }
  });

  tl.to("#aboutitem", { y: -50, opacity: 1, duration: 1 },)

  const itl = gsap.timeline({ repeat: -1 });
  itl.to("#react", { y: -2, duration: 0.1 },)
    .to("#react", { y: 0, duration: 0.1 },)
    .to("#tailwind", { y: -2, duration: 0.1 },)
    .to("#tailwind", { y: 0, duration: 0.1 },)
    .to("#js", { y: -2, duration: 0.1 },)
    .to("#js", { y: 0, duration: 0.1 },)
    .to("#html", { y: -2, duration: 0.1 },)
    .to("#html", { y: 0, duration: 0.1 },)
    .to("#css", { y: -2, duration: 0.1 },)
    .to("#css", { y: 0, duration: 0.1 },)
    .to("#photoshop", { y: -2, duration: 0.1 },)
    .to("#photoshop", { y: 0, duration: 0.1 },)
    .to("#illustrator", { y: -2, duration: 0.1 },)
    .to("#illustrator", { y: 0, duration: 0.1 },)
    .to("#aftereffects", { y: -2, duration: 0.1 },)
    .to("#aftereffects", { y: 0, duration: 0.1 },)
    .to("#email", { y: -2, duration: 0.1 },)
    .to("#email", { y: 0, duration: 0.1 },)
    .to("#github", { y: -2, duration: 0.1 },)
    .to("#github", { y: 0, duration: 0.1 },)
    .to("#linkedin", { y: -2, duration: 0.1 },)
    .to("#linkedin", { y: 0, duration: 0.1 },)
});
</script>
