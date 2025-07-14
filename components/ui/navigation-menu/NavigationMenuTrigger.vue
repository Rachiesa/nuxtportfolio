<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronDown, Play } from "lucide-vue-next";
import {
  NavigationMenuTrigger,
  type NavigationMenuTriggerProps,
  useForwardProps,
} from "reka-ui";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from ".";

const props = defineProps<
  NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
const playerRef = ref("");
</script>

<template>
  <NavigationMenuTrigger
    data-slot="navigation-menu-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        navigationMenuTriggerStyle(),
        'group w-[200px] flex justify-between border-2 ',
        props.class
      )
    "
    @mouseover="console.log(playerRef)"
  >
    <slot />
    <ChevronDown
      class="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
    <!-- <DotLottieVue
      id="menu"
      style="height: 30px; width: 30px"
      ref="playerRef"
      src="https://lottie.host/330fae98-c97e-4890-a165-4734ae435011/MhLXyGGwby.lottie"
    >
    </DotLottieVue> -->
  </NavigationMenuTrigger>
</template>
