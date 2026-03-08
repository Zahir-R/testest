<template>
  <div class="min-h-screen bg-stone-50 text-stone-900 font-sans">
    <header class="bg-rose-600 text-white shadow-md">
      <nav class="container mx-auto md:px-24 px-12 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-semibold tracking-wide">
          MenoSupport
        </NuxtLink>
        <div class="space-x-6 text-lg">
          <NuxtLink to="/" class="hover:text-rose-200 transition">Home</NuxtLink>
          <NuxtLink to="/chat" class="hover:text-rose-200 transition">Chatbot</NuxtLink>
          <NuxtLink to="/login" class="hover:text-rose-200 transition">Login</NuxtLink>
        </div>
      </nav>
    </header>
    
    <main class="container mx-auto px-6 py-8">
      <slot />
    </main>

    <footer class="bg-stone-200 text-stone-600 text-center py-6 mt-12 text-sm">
      <p>&copy; 2026 Menopause Support Application. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>

</style>