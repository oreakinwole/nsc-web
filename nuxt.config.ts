// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     meta: [
  //       // <meta name="viewport" content="width=device-width, initial-scale=1">
  //       // { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  //     ],
  //     script: [
  //       // <script src="https://myawesome-lib.js"></script>
  //       { src: "https://embed.typeform.com/next/embed.js" },
  //     ],
  //   },
  // },

  modules: [// '@nuxtjs/color-mode',
  "@nuxt/image", "@builder.io/sdk-vue/nuxt", "vue3-carousel-nuxt", "nuxt-aos", "nuxt-calendly", "nuxt-marquee", "nuxt-anchorscroll"],

  css: ["~/assets/css/app.css"],

  // colorMode:{
  //     preference: 'system', // default value of $colorMode.preference
  //     fallback: 'dark', // fallback value if not system preference found
  //     hid: 'nuxt-color-mode-script',
  //     globalName: '__NUXT_COLOR_MODE__',
  //     componentName: 'ColorScheme',
  //     classPrefix: '',
  //     classSuffix: '',
  //     storageKey: 'nuxt-color-mode'
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-08-19",
});
