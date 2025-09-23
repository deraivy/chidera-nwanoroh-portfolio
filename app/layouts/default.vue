<template>
  <div>
    <div>
      <div class="bg-striped dark:bg-[#0a0a0a;] text-white">
        <div class="w-full md:container mx-auto">
          <nav
            class="flex justify-between items-center p-8 lg:px-12 relative z-20"
          >
            <h2 class="text-3xl font-bold">N/C</h2>
            <ul
              class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
            >
              <li>
                <NuxtLink to="/" class="">Home</NuxtLink>
              </li>
              <li><NuxtLink to="/about" class="">About</NuxtLink></li>
              <li><NuxtLink to="/projects" class="">Projects</NuxtLink></li>
            </ul>
            <div class="border px-5 py-2 border-[#ff6b37] rounded-xl">
              Resume
            </div>
          </nav>
        </div>
      </div>
      <slot />
      <footer class="text-white">
        <div class="border-t border-white/20">
          <div
            class="flex justify-between items-center w-full md:container mx-auto"
          >
            <p class="p-8 text-center">&copy; 2025 Nwanoroh Chidera</p>
            <div class="flex space-x-2">
              <a href="https://www.instagram.com/?hl=en">
                <Icon name="uil:github" class="w-6 h-6 hover:text-[#ff6b37]"
              /></a>

              <Icon name="uil:linkedin" class="w-6 h-6 hover:text-[#ff6b37]" />
              <Icon name="uil:twitter" class="w-6 h-6 hover:text-[#ff6b37]" />
              <a href="https://www.instagram.com/?hl=en">
                <Icon name="uil:instagram" class="w-6 h-6 hover:text-[#ff6b37]"
              /></a>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
