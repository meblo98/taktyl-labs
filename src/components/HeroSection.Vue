<template>
  <section class="relative h-screen mt-20 overflow-hidden bg-gradient-to-br from-gray-900 to-nocturne">
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.49a84d2e.png')] bg-cover mix-blend-overlay"></div>
    </div>

    <!-- Animated grid -->
    <div class="absolute inset-0 bg-grid-electric/[0.03]"></div>

    <!-- Content -->
    <div class="container relative h-full mx-auto px-6 flex items-center z-10">
      <div class="max-w-2xl">
        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-6">
          <span class="text-electric text-white text-sm font-medium">🚀 Nouveau : Catalogue 2025 disponible</span>
        </div>

        <!-- Main headline -->
        <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Des solutions digitales <span class="text-electric">clés en main</span> pour entrepreneurs ambitieux
        </h1>

        <!-- Subheadline -->
        <p class="text-xl text-gray-300 mb-10 max-w-lg">
         Taktyl Labs rend accessibles des solutions technologiques testées, prêtes à être commercialisées en licence, marque blanche ou joint-venture.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <button 
            @click="showDemo"
            class="btn-primary animate-pulse hover:animate-none">
            Voir la démo <i class="uil uil-rocket ml-2"></i>
          </button>
          
          <button 
            @click="scrollToSolutions"
            class="btn-secondary">
            Explorer les solutions <i class="uil uil-arrow-down ml-2"></i>
          </button>
        </div>

        <!-- Trust indicators -->
        <div class="mt-12 flex items-center gap-6">
          <div class="flex -space-x-3">
            <img 
              v-for="(avatar, index) in avatars" 
              :key="index"
              :src="avatar" 
              alt="Client"
              class="w-10 h-10 rounded-full border-2 border-gray-800">
          </div>
          <div class="text-gray-400 text-sm">
            <p>Rejoint par <span class="text-white font-medium">127+ entrepreneurs</span></p>
            <div class="flex items-center mt-1">
              <i class="uil uil-star text-yellow-400 mr-1"></i>
              <span>4.9/5 sur 63 avis</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero image (3D mockup) -->
      <div class="hidden lg:block absolute right-0 bottom-0 w-1/2 xl:w-1/3">
        <img 
          src="/src/assets/images/image (2).jpg" 
          alt="Dashboard SaaS Taktyl Labs"
          class="w-full animate-float"
          loading="eager">
      </div>
    </div>

    <!-- Scroll indicator -->
    <button 
      @click="scrollToNext"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white animate-bounce">
      <i class="uil uil-angle-down text-3xl"></i>
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const avatars = ref([
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
]);

const showDemo = () => {
  // Ouvrir modal de démo
  console.log('Démo demandée');
};

const scrollToSolutions = () => {
  const section = document.getElementById('solutions');
  section?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToNext = () => {
  window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' });
};
</script>

<style scoped>
/* Animation du mockup */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Gradient personnalisé */
.bg-nocturne {
  background-color: #0F172A;
}

/* Boutons */
.btn-primary {
  @apply px-8 py-4 bg-electric text-white font-medium rounded-lg hover:bg-electric/90 transition-all shadow-lg shadow-electric/20;
}

.btn-secondary {
  @apply px-8 py-4 bg-transparent text-white font-medium rounded-lg hover:bg-white/10 transition-all border border-white/20;
}

/* Background grid */
.bg-grid-electric\/\[0\.03\] {
  background-image: url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%2300F5A0' fill-opacity='0.03' fill-rule='evenodd'%3e%3cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3e%3c/g%3e%3c/svg%3e");
}
</style>