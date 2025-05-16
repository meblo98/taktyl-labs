<template>
  <footer class="bg-gray-900 text-gray-300 py-10 px-6">
    <div class="container mx-auto grid md:grid-cols-4 gap-8">
      <!-- Logo et description -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-4">Taktyl Labs</h2>
        <p class="text-sm">
          Des solutions technologiques innovantes pour accompagner votre croissance digitale.
        </p>
      </div>

      <!-- Liens utiles -->
      <div>
        <h3 class="text-white font-semibold mb-4">Liens utiles</h3>
        <ul class="space-y-2">
          <li><a href="#solutions" class="hover:text-electric">Solutions</a></li>
          <li><a href="#about" class="hover:text-electric">À propos</a></li>
          <li><a href="#contact" class="hover:text-electric">Contact</a></li>
        </ul>
      </div>

      <!-- Ressources -->
      <div>
        <h3 class="text-white font-semibold mb-4">Ressources</h3>
        <ul class="space-y-2">
          <li><a href="#blog" class="hover:text-electric">Blog</a></li>
          <li><a href="#docs" class="hover:text-electric">Documentation</a></li>
          <li><a href="#faq" class="hover:text-electric">FAQ</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-white font-semibold mb-4">Newsletter</h3>
        <p class="text-sm mb-4">Recevez nos dernières actualités et ressources.</p>
        <form @submit.prevent class="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Votre email"
            class="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <button class="bg-electric text-nocturne font-semibold px-4 py-2 rounded hover:bg-electric/90 transition">
            S'inscrire
          </button>
        </form>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
      &copy; {{ new Date().getFullYear() }} Taktyl Labs. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup>
// Pas besoin de script pour ce footer statique sauf pour l’année dynamique
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
</style>
