// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss"],
  nitro: {
    preset: "netlify",
  },
  ssr: true,
  routeRules: {
    "/": { prerender: true },
  },
  css: ["./styles/main.css"],
  plugins: ["./plugins/aos.client.js"],
});