<template>
  <section class="py-20 bg-gradient-to-b from-gray-900 to-nocturne relative overflow-hidden">
    <!-- Background elements -->
    <div
      class="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
    ></div>
    <div class="absolute top-0 left-0 w-full h-full bg-grid-electric/[0.02]"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span
          class="inline-block px-4 py-1 rounded-full bg-electric/10 text-electric text-sm font-medium mb-4"
        >
          NOS SOLUTIONS
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Des outils <span class="text-electric">prêts à l'emploi</span>
        </h2>
        <p class="text-lg text-gray-400">
          Choisissez parmi nos plateformes SaaS pré-développées et personnalisables
        </p>
      </div>

      <!-- Tabs navigation -->
      <div class="flex overflow-x-auto pb-2 mb-10 scrollbar-hide">
        <div class="flex space-x-2 mx-auto">
          <button
            v-for="(product, index) in products"
            :key="product.id"
            @click="activeTab = index"
            :class="[
              'px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all',
              activeTab === index
                ? 'bg-electric text-nocturne shadow-lg shadow-electric/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700',
            ]"
          >
            {{ product.name }}
          </button>
        </div>
      </div>

      <!-- Tab content -->
      <transition name="fade" mode="out-in">
        <div
          v-if="products[activeTab]"
          :key="products[activeTab].id"
          class="grid lg:grid-cols-2 gap-12 items-center"
        >
          <!-- Product details -->
          <div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ products[activeTab].name }}</h3>
            <p class="text-gray-300 mb-6">{{ products[activeTab].description }}</p>

            <ul class="space-y-3 mb-8">
              <li
                v-for="(feature, i) in products[activeTab].features"
                :key="i"
                class="flex items-start"
              >
                <span class="text-electric mr-3">✓</span>
                <span class="text-gray-400">{{ feature }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-4 mt-10">
              <button class="btn-primary">Voir la démo <i class="uil uil-eye ml-2"></i></button>
              <button class="btn-outline">
                Télécharger la fiche produit <i class="uil uil-download-alt ml-2"></i>
              </button>
            </div>
          </div>

          <!-- Product visual -->
          <div class="relative">
            <div class="relative mx-auto max-w-[600px]">
              <div class="bg-gray-900 rounded-t-lg p-3 flex space-x-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div class="bg-gray-800 border border-gray-700 rounded-b-lg overflow-hidden">
                <img
                  :src="products[activeTab].image"
                  :alt="products[activeTab].name + ' Dashboard'"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div
                v-if="products[activeTab].badge"
                class="absolute -top-4 -right-4 bg-electric text-nocturne px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              >
                {{ products[activeTab].badge }}
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const products = [
  {
    id: 1,
    name: 'CRM Entreprise',
    description:
      'Solution complète de gestion de la relation client avec automation marketing intégrée',
    features: [
      'Gestion des leads et pipelines',
      'Email marketing automatisé',
      'Analytics en temps réel',
      'Intégration avec 50+ outils',
    ],
    image: '/src/assets/images/image (2).jpg',
    badge: 'TOP VENTE',
  },
  {
    id: 2,
    name: 'ERP SaaS',
    description: 'Plateforme tout-en-un pour la gestion de votre entreprise',
    features: [
      'Comptabilité et facturation',
      'Gestion des stocks',
      'Rapports personnalisables',
      'Multi-utilisateurs',
    ],
    image: '/src/assets/images/image (2).jpg',
    badge: 'MEILLEUR CHOIX',
  },
  {
    id: 3,
    name: 'Marketplace',
    description: 'Lancez votre plateforme de marketplace en quelques jours',
    features: ['Paiements sécurisés', 'Gestion des vendeurs', 'Système de review', 'Mobile-first'],
    image: '/src/assets/images/image (2).jpg',
    badge: 'NOUVEAU',
  },
]
</script>

<style scoped>
/* Animation des onglets */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Scrollbar cachée */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Boutons */
.btn-primary {
  @apply px-6 py-3 bg-electric text-nocturne font-medium rounded-lg hover:bg-electric/90 transition-all shadow-lg shadow-electric/20 flex items-center;
}

.btn-outline {
  @apply px-6 py-3 bg-transparent text-white font-medium rounded-lg hover:bg-white/10 transition-all border border-white/20 flex items-center;
}

/* Background */
.bg-grid-electric\/\[0\.02\] {
  background-image: url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%2300F5A0' fill-opacity='0.02' fill-rule='evenodd'%3e%3cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3e%3c/g%3e%3c/svg%3e");
}
</style>
