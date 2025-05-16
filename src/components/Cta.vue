<!-- <template>
  <section class="py-28 bg-electric/5 relative overflow-hidden"> -->
    <!-- Éléments décoratifs -->
    <!-- <div class="absolute top-0 left-0 w-full h-full opacity-10">
      <div class="pattern-dots pattern-gray-500 pattern-size-4"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10 text-center">
      <h2 class="text-4xl font-bold text-white mb-6">
        Prêt à lancer votre solution SaaS ?
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Recevez notre catalogue complet avec les spécifications techniques et modèles économiques.
      </p>
      
      <div class="max-w-md mx-auto">
        <form @submit.prevent="submitForm" class="space-y-4">
          <input 
            type="email" 
            v-model="email"
            placeholder="Votre email professionnel" 
            class="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white">
          <button type="submit" class="btn-primary w-full">
            Télécharger le catalogue
          </button>
        </form>
        <p class="text-gray-500 text-sm mt-3">
          Nous détestons le spam autant que vous. 1 email/mois max.
        </p>
      </div>
    </div>
  </section>
</template> -->

<template>
  <section class="bg-electric text-nocturne py-20 px-6">
    <div class="container mx-auto text-center max-w-2xl">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Prêt à transformer votre façon de travailler ?
      </h2>
      <p class="text-lg mb-8">
        Testez nos solutions SaaS dès aujourd’hui et découvrez comment elles peuvent booster votre efficacité et vos résultats.
      </p>
      <div class="flex justify-center flex-wrap gap-4">
        <a href="#demo" class="btn-primary">
          Demander une démo gratuite <i class="uil uil-rocket ml-2"></i>
        </a>
        <a href="#contact" class="btn-outline">
          Nous contacter <i class="uil uil-message ml-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucun script nécessaire pour ce composant statique
</script>

<style scoped>
.btn-primary {
  @apply px-6 py-3 bg-nocturne text-electric font-medium rounded-lg hover:bg-nocturne/90 transition-all shadow-lg shadow-nocturne/20 flex items-center;
}

.btn-outline {
  @apply px-6 py-3 bg-transparent text-nocturne font-medium rounded-lg hover:bg-nocturne/10 transition-all border border-nocturne/20 flex items-center;
}
</style>
