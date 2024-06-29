import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt App",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  devtools: { enabled: false },
  css: [
    "@/assets/main.css",
    "primeicons/primeicons.css",
  ],
  modules: ["@primevue/nuxt-module"],
    primevue: {
    usePrimeVue: true,
  options: {
      theme: {
        preset: Aura
      },
      ripple: true
    },
    components: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined
    },
    directives: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined
    },
    composables: {
      prefix: '',
      name: undefined,
      include: undefined,
      exclude: undefined
    }
  },
  ssr: true, // Explicitly enable SSR
});
