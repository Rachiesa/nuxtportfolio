<template>
  <VueLenis root ref="lenisRef" :options="{ autoRaf: false }" />
  <div id="smooth-content" class="overflow-hidden">
    <nav id="nav">
      <div class="fixed bottom-15 z-10 w-screen flex justify-center">
        <DotLottieVue
          id="lottieScroll"
          style="height: 100px; width: 100px"
          autoplay
          loop
          src="https://lottie.host/7e0b2790-75c0-4a69-a34a-7d12cb7bc1b5/1YP7gqbh8o.lottie"
        >
        </DotLottieVue>
      </div>
      <div
        class="flex fixed inset-x-0 justify-center md:justify-cen bottom-0 left-2 z-10 text-tertiary font-anton md:text-xl p-1 gap-3"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Rachiesa</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink @click="scrollTo('#about')"
                  >About</NavigationMenuLink
                >
                <NavigationMenuLink @click="scrollTo('#projects')"
                  >Projects</NavigationMenuLink
                >
                <NavigationMenuLink @click="scrollTo('#contact')"
                  >Contact</NavigationMenuLink
                >
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <!-- <div>
          <button @click="scrollTo('#about')" class="">/About</button>
        </div>
        <div>
          <button @click="scrollTo('#projects')" class="">/Projects</button>
        </div>
        <div>
          <button @click="scrollTo('#contact')" class="">/Contact</button>
        </div> -->
      </div>
      <div class="hidden md:block">
        <div class="flex h-screen w-screen">
          <div
            id="rl"
            class="flex justify-center items-center w-1/3 bg-secondary"
          >
            <h1
              id="R"
              class="font-anton text-[200px] fixed z-10 p-3 text-tertiary opacity-100"
            >
              R
            </h1>
          </div>
          <div
            id="md"
            class="flex justify-center items-center w-1/3 bg-[#464646] text-tertiary opacity-100"
          >
            <h1 id="Y" class="font-anton text-[200px] z-2">Y</h1>
          </div>
          <div
            id="rl"
            class="flex justify-center items-center w-1/3 bg-secondary"
          >
            <h1
              id="A"
              class="font-anton text-[200px] fixed z-10 p-3 text-tertiary opacity-100"
            >
              A
            </h1>
          </div>
        </div>
      </div>
    </nav>
    <NuxtRouteAnnouncer />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { VueLenis, useLenis } from "lenis/vue";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/src/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const scrollTo = (id) => {
  gsap.to(window, { duration: 1, scrollTo: id });
};
const lenisOptions = {
  // lenis options (optional)
};

const lenisRef = ref();

watchEffect((onInvalidate) => {
  if (!lenisRef.value?.lenis) return;

  //  if using GSAP ScrollTrigger, update ScrollTrigger on scroll
  lenisRef.value.lenis.on("scroll", ScrollTrigger.update);

  // add the Lenis requestAnimationFrame (raf) method to GSAP's ticker
  // this ensures Lenis's smooth scroll animation updates on each GSAP tick
  function update(time) {
    lenisRef.value.lenis.raf(time * 1000);
  }
  gsap.ticker.add(update);

  // disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  // clean up GSAP's ticker from the previous execution of watchEffect, or when the effect is stopped
  onInvalidate(() => {
    gsap.ticker.remove(update);
  });
});

onMounted(() => {
  gsap.from("#lottieScroll", { y: 600, duration: 2 });
  gsap.from("#R", { y: 600, opacity: 0, duration: 1 });
  gsap.from("#Y", { y: 600, opacity: 0, duration: 1.2 });
  gsap.from("#A", { y: 600, opacity: 0, duration: 1.4 });
  gsap.to("#rl", {
    scrollTrigger: {
      trigger: "#nav",
      start: "center top",
      end: "bottom 20%",
      toggleActions: "play complete reverse reverse",
      scrub: true,
    },
    backgroundColor: "#464646",
    ease: "steps(200)",
    duration: 1,
  });
  gsap.to("#md", {
    scrollTrigger: {
      trigger: "#nav",
      start: "center top",
      end: "bottom 20%",
      toggleActions: "play complete reverse reverse",
      scrub: true,
    },
    backgroundColor: "#e8e8e8",
    ease: "steps(200)",
    duration: 1,
  });

  gsap.to("#lottieScroll", {
    scrollTrigger: {
      trigger: "#nav",
      start: "20% top",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: true,
    },
    opacity: 0,
    ease: "power1.out",
  });

  let fadetl = gsap.timeline({
    scrollTrigger: {
      trigger: "#nav",
      start: "center top",
      end: "bottom 20%",
      toggleActions: "play complete reverse reverse",
      scrub: false,
    },
  });
  fadetl.to("#R", { opacity: 0, duration: 1 });

  let fadetl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#nav",
      start: "center top",
      end: "bottom 20%",
      toggleActions: "play complete reverse reverse",
      scrub: false,
    },
  });
  fadetl1.to("#A", { opacity: 0, duration: 1 });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
    },
  });

  tl.to("#aboutitem", { y: -50, opacity: 1, duration: 1 });

  let ptl = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
    },
  });
  ptl
    .to("#projectsitem", { y: -50, opacity: 1, duration: 0.5 })
    .to("#accordion", { y: 0, opacity: 1 });
  gsap.utils.snap(0.1);

  const sections = document.getElementsByTagName("section");
  Array.from(sections).forEach((section) => {
    section.addEventListener("mousemove", function (e) {
      parallaxIt(e, "#R", -30, section);
      parallaxIt(e, "#Y", -30, section);
      parallaxIt(e, "#A", -30, section);
    });
  });

  function parallaxIt(e, target, movement, element) {
    if (!element) return;
    const relX = e.pageX - element.offsetLeft;
    const relY = e.pageY - element.offsetTop;

    gsap.to(target, {
      duration: 1,
      x: ((relX - element.offsetWidth / 2) / element.offsetWidth) * movement,
      y: ((relY - element.offsetHeight / 2) / element.offsetHeight) * movement,
    });
  }
  let ctl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      scrub: false,
    },
  });
  ctl.to("#contactitem", { y: -50, opacity: 1, duration: 1 });
});
</script>
