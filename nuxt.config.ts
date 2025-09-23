// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss"],
  nitro: {
    preset: "netlify", // Use the Netlify preset if needed
  },
  routeRules: {
    "/": { prerender: true },
    //"/blog/**": { isr: 60 } // revalidate every 60 seconds, for example
  },
  css: ["./styles/main.css"],
  plugins: ["./plugins/aos.client.js"],
});