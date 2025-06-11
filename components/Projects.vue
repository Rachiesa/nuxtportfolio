
<template>
<section id='projects' class='flex h-screen w-screen '>
            <div class='w-1/3 bg-secondary hidden md:block'></div>
            <div class='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
                <div class='flex justify-end items-end text-md h-4/12'>
                </div>
                <div class='flex items-end h-3/12 text-7xl z-2'>
                    <h1 id='projectsitem' class='opacity-0'>PROJECTS</h1>
                </div>
                <div class='h-7/12 text-md z-2'>
                    <Accordion id="projectsitem" type="single" collapsible class="opacity-0 bg-tertiary text-primary w-full p-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger class="text-xl">SPOTIFY.UTILS</AccordionTrigger>
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
                        <AccordionItem value="item-2">
                            <AccordionTrigger class="text-xl">BERITA - BERITA</AccordionTrigger>
                            <AccordionContent class="font-trispace">
                                UTILIZEING BERITA-INDO-API FOR EXPLORING NEW INDONESIAN NEWS
                            </AccordionContent>
                            <AccordionContent class="font-anton text-md">
                                STATUS : <span class='animate-pulse'>ON.PROGGRES</span>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div class='w-1/3 bg-secondary hidden md:block'></div>
        </section>
</template>
<script setup>
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
</script>