// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["lenis/nuxt", "shadcn-nuxt", "@nuxtjs/google-fonts"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/profile.png" }],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  googleFonts: {
    families: {
      Anton: true,
      Trispace: true,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  runtimeConfig: {
    public: {
      web3api: process.env.NUXT_PUBLIC_WEB3_API,
    },
  },
});
