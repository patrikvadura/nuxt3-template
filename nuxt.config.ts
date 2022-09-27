import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  },
  css: ["@/assets/styles/main.sass"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.sass"',
        },
      },
    },
  },
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: true,
      Roboto: true,
    },
    overwriting: true,
  },
});
