<template>
  <div>
    <div>
      <div class="bg-striped dark:bg-[#0a0a0a;] text-white">
        <div class="w-full md:container mx-auto">
          <!-- web -->
          <div
            class="flex justify-between items-center p-8 lg:px-12 relative z-20"
          >
            <h2 class="text-3xl font-bold">N/C</h2>
            <ul
              class="hidden md:flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
            >
              <li>
                <NuxtLink to="/" class="">Home</NuxtLink>
              </li>
              <li><NuxtLink to="/about" class="">About</NuxtLink></li>
              <li><NuxtLink to="/projects" class="">Projects</NuxtLink></li>
            </ul>
            <a
              href="/docs/cv.pdf"
              download="resume"
              class="hidden md:flex border px-5 py-2 border-[#ff6b37] rounded-xl"
            >
              Resume
            </a>

            <div @click="toggleDrawer" class="md:hidden">
              <Icon name="uil:bars" class="w-6 h-6 hover:text-[#ff6b37]" />
            </div>
          </div>

          <!-- mobile -->
          <div
            v-if="drawer"
            class="md:hidden bg-white/80 backdrop-blur-md mt-4 rounded-3xl px-6 py-8 overflow-y-scroll"
          >
            <div class="flex flex-col items-center">
              <ul>
                <li><NuxtLink to="/" class="">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="">About</NuxtLink></li>
                <li><NuxtLink to="/projects" class="">Projects</NuxtLink></li>
                <li><NuxtLink to="/contact" class="">Contact</NuxtLink></li>
              </ul>
            </div>
          </div>
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

<script setup>
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
const closeAll = () => {
  isDropdownOpen.value = false;
  isMenuOpen.value = false;
  hoveredItem.value = null;
};
</script>

<style lang="scss" scoped></style>
