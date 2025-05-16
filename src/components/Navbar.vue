<template>
  <div>
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 w-full h-20 grid place-items-center z-50 transition-all bg-[#ffffff]"
    >
      <div class="container mx-auto flex justify-between items-center h-full px-10">
        <!-- LOGO -->
        <router-link to="/" class="w-20">
          <img
            src="/src/assets/images/logo.svg"
            alt="nav logo"
            class="object-cover object-center h-10 w-full"
          />
        </router-link>

        <!-- NAV LINKS (Desktop) -->
        <ul class="hidden font-bold lg:flex gap-16 text-blue">
          <li v-for="(link, index) in navLinks" :key="index">
            <a
              :href="link.path"
              class="hover:text-[#ff8c0a] transition-colors"
              @click="scrollToSection(link.path)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- SOCIAL LINKS -->
        <ul class="hidden lg:flex gap-4">
          <li v-for="(social, index) in socialLinks" :key="index">
            <a
              :href="social.url"
              target="_blank"
              class="w-8 h-8 grid place-items-center text-[#003347] bg-gradient-to-b from-[#e5a55d] to-[#ff7b02] rounded-lg hover:shadow-lg transition-all"
            >
              <i :class="`uil uil-${social.icon}`"></i>
            </a>
          </li>
        </ul>

        <!-- TOGGLE BUTTONS (Mobile) -->
        <button
          @click="toggleMobileNav(true)"
          class="block lg:hidden text-3xl text-blue"
          :class="{ hidden: mobileNavOpen }"
        >
          <i class="uil uil-bars"></i>
        </button>
        <button
          @click="toggleMobileNav(false)"
          class="hidden lg:hidden text-3xl text-blue"
          :class="{ hidden: !mobileNavOpen }"
        >
          <i class="uil uil-multiply"></i>
        </button>
      </div>
    </nav>

    <!-- MOBILE NAV LINKS -->
    <transition name="nav">
      <ul
        v-if="mobileNavOpen"
        class="fixed top-20 right-0 text-blue flex-col lg:hidden w-48 shadow-lg z-40"
      >
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          class="h-20 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] bg-[#ffffff] hover:bg-[#ffffff]/80"
          :style="`animation-delay: ${index * 100}ms`"
        >
          <router-link
            :to="link.path"
            class="flex items-center h-full px-6"
            @click="toggleMobileNav(false)"
            @click.native="scrollToSection(link.path)"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import CSS des icônes (à mettre dans index.html)
// <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

const mobileNavOpen = ref(false)

const navLinks = [
  { name: 'Accueil', path: '/' }, // route Vue
  { name: 'À propos', path: '#apropos' }, // ancre
  { name: 'Notre offre', path: '#propositions' }, // ancre
  { name: 'Contact', path: '#contact' }, // ancre
]

const socialLinks = [
  // { icon: 'instagram', url: 'https://instagram.com' },
  { icon: 'linkedin', url: 'https://www.linkedin.com/company/taktylabs/posts/?feedView=all' },
  // { icon: 'youtube', url: 'https://youtube.com' },
]

const toggleMobileNav = (state) => {
  mobileNavOpen.value = state
}


const scrollToSection = (id) => {
  if (id.startsWith('#')) {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

</script>

<style>
/* Animation pour le menu mobile */
.nav-enter-active,
.nav-leave-active {
  transition: all 0.3s ease;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Animation des liens mobiles */
li {
  animation: slideIn 0.3s ease-out forwards;
  opacity: 0;
  transform: translateX(20px);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
