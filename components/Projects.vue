
<template>
<section id='projects' class='flex h-screen w-screen '>
            <div id="rl" class='w-1/3 bg-secondary hidden md:block'></div>
            <div id="md" class='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
                <div class='flex items-end h-3/12 text-7xl z-2'>
                    <h1 id='projectsitem' class='opacity-0'>PROJECTS</h1>
                </div>
                <div id="projectsitem" class='h-7/12 text-md z-2'>
                     <Carousel  class="h-full">
                        <CarouselContent>
                            <CarouselItem class="">
                                <Accordion id="accordion" type="single" collapsible class=" opacity-0 bg-primary text-tertiary w-full p-2">
                                    <AccordionItem value="item-1">
                                        <img class="p-3 h-1/2" src="../assets/work/Spotify.Utils.png"></img>
                                        <AccordionTrigger class="text-xl">Spotify-Utils</AccordionTrigger>
                                            <AccordionContent class="font-trispace">
                                                UTILIZEING SPOTIFY API FOR EXPLORING NEW MUSIC AND ARTISTS
                                            </AccordionContent>
                                            <AccordionContent class="font-anton text-md">
                                                <a href='https://spotify-utils.vercel.app' target='_blank' class='hover:underline'>{">> WEB-APP"}</a> <br /><a href='https://github.com/Rachiesa/SpotifyUtils' target='_blank' class='hover:underline'> {">> SOURCE-CODE"}</a>
                                            </AccordionContent>
                                            <AccordionContent class="font-anton text-md">
                                                STATUS : <span class='animate-pulse'>ONLINE</span>
                                            </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CarouselItem>
                            <CarouselItem class="">
                                <Accordion id="accordion" type="single" collapsible class=" opacity-0 bg-primary text-tertiary w-full p-2">
                                    <AccordionItem value="item-1">
                                        <img class="p-3 h-1/2" src="../assets/work/Spotify.Utils.png"></img>
                                        <AccordionTrigger class="text-xl">Spotify-Utils</AccordionTrigger>
                                            <AccordionContent class="font-trispace">
                                                UTILIZEING SPOTIFY API FOR EXPLORING NEW MUSIC AND ARTISTS
                                            </AccordionContent>
                                            <AccordionContent class="font-anton text-md">
                                                <a href='https://spotify-utils.vercel.app' target='_blank' class='hover:underline'>{">> WEB-APP"}</a> <br /><a href='https://github.com/Rachiesa/SpotifyUtils' target='_blank' class='hover:underline'> {">> SOURCE-CODE"}</a>
                                            </AccordionContent>
                                            <AccordionContent class="font-anton text-md">
                                                STATUS : <span class='animate-pulse'>ONLINE</span>
                                            </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> 
                </div>
            </div>
            <div id="rl" class='w-1/3 bg-secondary hidden md:block'></div>
        </section>
</template>
<script setup>
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
</script>                    

