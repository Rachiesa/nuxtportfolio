<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { ArrowRight } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button, type ButtonVariants } from "@/components/ui/button";
import { useCarousel } from "./useCarousel";

const props = withDefaults(
  defineProps<
    {
      variant?: ButtonVariants["variant"];
      size?: ButtonVariants["size"];
    } & WithClassAsProps
  >(),
  {
    variant: "outline",
    size: "icon",
  }
);

const { orientation, canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-next"
    :disabled="!canScrollNext"
    :class="
      cn(
        'opacity-50 hover:opacity-100',
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/3 -right-0 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class
      )
    "
    :variant="variant"
    :size="size"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
