// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/icon"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  build: {
    transpile: ["@apollo/client", "@vue/apollo-composable"],
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  runtimeConfig: {
    public: {
      graphqlUrl: process.env.NUXT_PUBLIC_GRAPHQL_URL || "",
    },
  },

  nitro: {
    externals: {
      inline: ["tslib"],
    },
  },
});