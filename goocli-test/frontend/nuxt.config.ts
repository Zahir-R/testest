import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000'
    }
  },
  ssr: false,
  nitro: {
    preset: 'static'
  }
})