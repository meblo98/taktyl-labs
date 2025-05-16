<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="w-full min-h-screen dark:bg-gray-200">
    <Navbar class="mb-5" />
    <router-view />
    <Footer  />
  </div>

</template>

