<template>
  <section id="contact" class="bg-gray-200 text-primary py-16 px-6">
    <div class="max-w-xl mx-auto text-center mb-10">
      <h2 class="text-3xl font-bold mb-4">Soyez les premiers à découvrir nos offres</h2>
      <p class="text-gray-500">Recevez nos infos en avant-première</p>
    </div>

    <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-white mb-1">Nom</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-white mb-1">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label for="role" class="block text-sm font-medium text-white mb-1">Je suis</label>
        <select
          id="role"
          v-model="form.role"
          required
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option disabled value="">-- Sélectionnez une option --</option>
          <option>Entrepreneur</option>
          <option>ONG</option>
          <option>Structure d'appui</option>
          <option>Investisseur</option>
          <option>Autre</option>
        </select>
      </div>
       <input type="hidden" name="_subject" value="Nouveau contact Taktyl Labs">
      <button
        type="submit"
        class="w-full bg-secondary text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-500 transition duration-200"
      >
        Recevoir les infos en avant-première
      </button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import emailjs from 'emailjs-com';

const form = reactive({
  name: '',
  email: '',
  role: ''
});

async function handleSubmit() {
  try {
    // 1. Envoyer l'email via EmailJS
    await emailjs.send(
      'service_44ckhbk', // Remplacez par votre Service ID
      'template_ixvoosi', // Remplacez par votre Template ID
      {
        from_name: form.name,
        to_name: "Mouhamed El Bachir LO",
        from_email: form.email,
        message: `Nouvelle inscription : ${form.role} ${form.name}`,
        reply_to: form.email
      },
      '7YWE3pgwNyYPTlvON' // Remplacez par votre User ID
    );

    // 2. Envoyer une copie à votre base de données (optionnel)
    // await fetch('https://votre-backend.com/api/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // });

    // 3. Feedback utilisateur
    alert('Merci ! Vous recevrez bientôt nos infos 😉');
    
    // Réinitialisation
    form.name = '';
    form.email = '';
    form.role = '';

  } catch (error) {
    console.error("Erreur d'envoi :", error);
    alert("Une erreur s'est produite. Veuillez réessayer.");
  }
}
</script>

<style scoped>
/* Focus styles améliorés si tu n’as pas Tailwind forms plugin */
input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 0 2px theme('colors.primary');
}
</style>
