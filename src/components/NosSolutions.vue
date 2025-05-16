<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-white mb-16">
        Pourquoi choisir nos solutions ?
      </h2>
      
      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="(item, index) in valueProps" :key="index" 
             class="bg-gray-800 p-8 rounded-xl hover:translate-y-[-10px] transition-transform">
          <div class="text-electric text-4xl mb-4">{{ item.icon }}</div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ item.title }}</h3>
          <p class="text-gray-400">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const valueProps = [
  {
    icon: "⚡",
    title: "Déploiement rapide",
    description: "Mise en production en 72h maximum"
  },
  {
    icon: "🔄",
    title: "Modèles flexibles",
    description: "Licence, revenue share ou co-développement"
  },
  {
    icon: "🔒",
    title: "Infrastructure sécurisée",
    description: "Hébergement et maintenance inclus"
  }
];
</script>