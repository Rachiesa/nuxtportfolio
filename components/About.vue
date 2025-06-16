<template>
    <section id='about' class='flex h-screen w-screen '>
        <div id='rl' class='w-1/3 bg-secondary hidden md:block'></div>
        <div id="md" class='flex flex-col w-screen md:w-1/3 bg-primary text-tertiary font-anton p-1 gap-3'>
            <div class='flex justify-start items-end text-xl h-4/12 z-2'>
                <h2 id='aboutitem' class='opacity-0'>HELLO, I'M</h2>
            </div>
            <div class=' h-3/12 text-6xl z-2'>
                <h1 id='aboutitem' class='opacity-0'>RACHIESA </h1>
                <h1 id='aboutitem' class='opacity-0'>YAZID AUDI</h1>
            </div>
            <div class='flex flex-col gap-2 h-7/12 z-2'>
                <p id='aboutitem' class='opacity-0 font-trispace'>I AM AN INFORMATICS ENGINEERING STUDENT WITH
                    EXPERIENCE IN
                    BOTH DESIGN & PROGRAMMING. FAMILIAR WITH ADOBE PHOTOSHOP, ILLUSTRATOR, AND FIGMA FOR UI/UX AND
                    GRAPHIC DESIGN. ALSO FAMILIAR WITH HTML & CSS, AND JAVASCRIPT.
                </p>
                <div id='aboutitem' class=' opacity-0 flex p-1 h-1/2'>
                    <div class='grid grid-cols-5 gap-1'>
                        <img @click="web('react')" id='react' src="../assets/icon/ReactLogo.svg" alt="React"
                            class=' hover:animate-pulse rounded-md '></img>
                        <img @click="web('tailwind')" id='tailwind' src="../assets/icon/TailwindLogo.svg" alt="Tailwind"
                            class='hover:animate-pulse rounded-md'></img>
                        <img @click="web('js')" id='js' src="../assets/icon/JSLogo.svg" alt="JavaScript"
                            class='hover:animate-pulse rounded-md'></img>
                        <img @click="web('html')" id='html' src="../assets/icon/HTMLLogo.svg" alt="HTML"
                            class='hover:animate-pulse rounded-md'></img>
                        <img @click="web('css')" id='css' src="../assets/icon/CSSLogo.svg" alt="CSS"
                            class='hover:animate-pulse rounded-md'></img>
                        <img alt="React" class='invisible'></img>
                        <img @click="web('photoshop')" id='photoshop' src="../assets/icon/PhotoshopLogo.svg"
                            alt="Photoshop" class='hover:animate-pulse rounded-md'></img>
                        <img @click="web('illustrator')" id='illustrator' src="../assets/icon/IllustratorLogo.svg"
                            alt="Illustrator" class='hover:animate-pulse
                        rounded-md'></img>
                        <img @click="web('aftereffects')" id='aftereffects' src="../assets/icon/AfterEffectsLogo.svg"
                            alt="AfterEffects" class='hover:animate-pulse
                        rounded-md'></img>
                        <img alt="React" class='invisible'></img>
                        <img @click="web('email')" id='email' src="../assets/icon/MailLogo.svg" alt="Email"
                            class='hover:animate-pulse rounded-md'></img>
                        <img alt="React" class='invisible'></img>
                        <img @click="web('github')" id='github' src="../assets/icon/GitHubLogo.svg" alt="Github"
                            class='hover:animate-pulse rounded-md'></img>
                        <img alt="React" class='invisible'></img>
                        <img id='linkedin' src="../assets/icon/LinkedinLogo.svg" alt="Linkedin"
                            class='hover:animate-pulse rounded-md'></img>
                    </div>
                </div>
            </div>
        </div>
        <div id="rl" class='w-1/3 bg-secondary hidden md:block'></div>
    </section>
</template>

<script setup>
const web = (web) => {
    switch (web) {
        case 'react':
            window.open('https://reactjs.org/', '_blank')
            break;
        case 'tailwind':
            window.open('https://tailwindcss.com/', '_blank')
            break;
        case 'js':
            window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')
            break;
        case 'html':
            window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')
            break;
        case 'css':
            window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')
            break;
        case 'photoshop':
            window.open('https://www.adobe.com/products/photoshop.html', '_blank')
            break;
        case 'illustrator':
            window.open('https://www.adobe.com/products/illustrator.html', '_blank')
            break;
        case 'aftereffects':
            window.open('https://www.adobe.com/products/aftereffects.html', '_blank')
            break;
        case 'email':
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=audichiesa99@gmail.com&su=Hello,Rachiesa let's talk", '_blank')
            break;
        case 'github':
            window.open('https://github.com/Rachiesa', '_blank')
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/audichiesa/', '_blank')
            break;
        default:
            break;
    }
}
</script>