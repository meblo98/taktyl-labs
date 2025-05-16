<template>
  <section class="relative py-20 overflow-hidden bg-gray-950">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-block px-4 py-1 rounded-full bg-electric/10 text-electric text-sm font-medium mb-4">
          AVANTAGES CLÉS
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Pourquoi nos solutions <span class="text-electric">changent la donne</span>
        </h2>
        <p class="text-lg text-gray-400">
          Des outils conçus pour vous faire gagner du temps, de l'argent et des maux de tête
        </p>
      </div>

      <!-- Value cards grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in valueProps"
          :key="index"
          class="group relative bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-electric/30 transition-all duration-300 hover:-translate-y-2"
          :style="`transition-delay: ${index * 50}ms`">
          
          <!-- Animated border effect -->
          <div class="absolute inset-0 rounded-xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <!-- Icon -->
          <div class="w-14 h-14 rounded-lg bg-electric/10 flex items-center justify-center text-electric text-2xl mb-6">
            <i :class="`uil uil-${item.icon}`"></i>
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-bold text-white mb-3">{{ item.title }}</h3>
          <p class="text-gray-400 mb-4">{{ item.description }}</p>
          
          <!-- Learn more link -->
          <a href="#" class="inline-flex items-center text-electric font-medium group-hover:underline">
            En savoir plus
            <i class="uil uil-arrow-right ml-1 transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="mt-20 bg-gray-900 rounded-xl p-8 border border-gray-800">
        <div class="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          <div class="text-center p-4" v-for="stat in stats" :key="stat.label">
            <p class="text-4xl font-bold text-electric mb-2">{{ stat.value }}</p>
            <p class="text-gray-400 uppercase text-sm tracking-wider">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const valueProps = [
  {
    icon: 'bolt',
    title: 'Déploiement express',
    description: 'Mise en production en 72h maximum avec notre infrastructure pré-configurée'
  },
  {
    icon: 'chart',
    title: 'Modèles éprouvés',
    description: 'Des business models testés et optimisés pour maximiser votre revenu'
  },
  {
    icon: 'server',
    title: 'Tech managée',
    description: 'Maintenance, mises à jour et sécurité incluses - concentrez-vous sur votre business'
  },
  {
    icon: 'money-bill',
    title: 'Investissement maîtrisé',
    description: 'Jusqu\'à 80% d\'économie vs un développement sur mesure'
  },
  {
    icon: 'palette',
    title: 'Personnalisation facile',
    description: 'Adaptez le design et les fonctionnalités à votre marque'
  },
  {
    icon: 'users-alt',
    title: 'Support premium',
    description: 'Accès direct à notre équipe d\'experts SaaS'
  }
];

const stats = [
  { value: '72h', label: 'Déploiement moyen' },
  { value: '37+', label: 'Solutions disponibles' },
  { value: '24/7', label: 'Support technique' },
  { value: '95%', label: 'Satisfaction clients' }
];
</script>

<style scoped>
/* Animation pour les cartes */
.group:hover {
  box-shadow: 0 10px 30px -10px rgba(0, 57, 245, 0.1);
}

/* Effet de gradient au hover */
.bg-gradient-to-br {
  background-image: linear-gradient(
    to bottom right,
    rgba(245, 147, 0, 0.1),
    transparent
  );
}
</style>