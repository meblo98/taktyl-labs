<template>
  <!-- hero section -->
  <section class="bg-white lg:grid lg:min-h-screen lg:place-content-center dark:bg-gray-200">
    <div
      class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-3"
    >
      <div class="max-w-prose text-left">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-black">
          Des solutions digitales clés en main pour
          <strong class="text-secondary"> entrepreneurs et porteurs de projets </strong>
          prêts à passer à l’action.
        </h1>

        <p class="mt-4 text-base text-pretty text-gray-900 sm:text-lg/relaxed dark:text-gray-900">
          Taktyl Labs rend accessibles des solutions technologiques testées, prêtes à être
          commercialisées en licence, marque blanche ou joint-venture.
        </p>

        <div class="mt-4 flex gap-4 sm:mt-6">
          <!-- <a
            class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            href="#"
          >
            Get Started
          </a>

          <a
            class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            Learn More
          </a> -->
        </div>
      </div>

      <!-- Responsive Image -->
      <div class="mt-6 md:mt-0 sm:p-10">
        <img
          class="w-full h-auto max-w-full rounded-lg object-cover md:h-[400px] lg:h-[500px]"
          src="/src/assets/images/badiere.png"
          alt="Any Image Here"
        />
      </div>
    </div>
  </section>
</template>

<style>
/* body {
  font-family: "Raleway", sans-serif;
}

button[data-toggle-navbar][data-is-open="true"] #line-1 {
  transform: translateY(0.375rem) rotate(40deg);
}

button[data-toggle-navbar][data-is-open="true"] #line-2 {
  transform: scaleX(0);
  opacity: 0;
}

button[data-toggle-navbar][data-is-open="true"] #line-3 {
  transform: translateY(-0.375rem) rotate(-40deg);
} */
</style>

<script>
// const btnHumb = document.querySelector("[data-toggle-navbar]")
// const navbar = document.querySelector("[data-navbar]")
// const overlay = document.querySelector("[data-nav-overlay]")
// if (btnHumb && navbar) {
//   const toggleBtnAttr = () => {
//     const isOpen = btnHumb.getAttribute("data-is-open")
//     btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true")
//     if (isOpen === "false") {
//       overlay.classList.toggle("hidden")
//     } else {
//       overlay.classList.add("hidden")
//     }
//   }
//   btnHumb.addEventListener("click", () => {
//     navbar.classList.toggle("invisible")
//     navbar.classList.toggle("opacity-0")
//     navbar.classList.toggle("translate-y-10")
//     toggleBtnAttr()
//   })

//   overlay.addEventListener("click", () => {
//     navbar.classList.add("invisible")
//     navbar.classList.add("opacity-0")
//     navbar.classList.add("translate-y-10")
//     toggleBtnAttr()
//   })
// }
</script>
