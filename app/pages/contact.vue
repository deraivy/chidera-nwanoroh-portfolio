<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div
      class="relative h-48 md:h-64 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#1c3d27] via-[#234d32] to-[#2a4a35]"
      ></div>

      <div class="relative z-10 text-center">
        <h2
          class="text-3xl md:text-4xl font-serif font-bold text-[#f6efdf] tracking-tight"
        >
          Contact <span class="text-accent">Us</span>
        </h2>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-20">
      <div class="flex flex-col md:flex-row justify-between gap-12 lg:gap-16">
        <!-- Left Info -->
        <div class="flex-1">
          <h2
            class="text-4xl md:text-5xl font-bold leading-tight max-w-md capitalize"
          >
            Let's grow <span class="text-primary">together</span>
          </h2>
          <p class="mt-6 text-lg text-gray-700 leading-relaxed">
            Whether you're looking to buy fresh produce, become a partner, or
            learn more about sustainable farming — fill out the form and our
            team will get back to you within 24 hours.
          </p>
        </div>

        <!-- Right Form -->
        <div
          class="flex-1 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-primary mb-8">
            Send us a message
          </h3>

          <form @submit.prevent="sendEmail" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col">
                <label
                  class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                  >First name</label
                >
                <input
                  name="first_name"
                  type="text"
                  placeholder="Olamilekan"
                  class="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              <div class="flex flex-col">
                <label
                  class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                  >Last name</label
                >
                <input
                  name="last_name"
                  type="text"
                  placeholder="Igwe"
                  class="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
            </div>

            <div class="flex flex-col">
              <label
                class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                >Email address</label
              >
              <input
                name="user_email"
                type="email"
                placeholder="yourname@example.com"
                class="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition"
              />
            </div>

            <div class="flex flex-col">
              <label
                class="mb-2 uppercase font-bold text-sm text-primary tracking-wide"
                >Message</label
              >
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us what you need..."
                class="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-secondary transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ isLoading ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div
          class="bg-white rounded-xl p-8 max-w-sm w-full text-center relative"
        >
          <button
            @click="closeModal"
            class="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl font-bold"
          >
            &times;
          </button>
          <h2 class="text-2xl font-bold mb-4 text-green-600">Success!</h2>
          <p class="mb-6">Your email has been sent successfully. 🎉</p>
          <button
            @click="closeModal"
            class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const showModal = ref(false);
const isLoading = ref(false);
const sendEmail = (e) => {
  isLoading.value = true;

  emailjs
    .sendForm(
      "service_xvzybgx",
      "template_innunhh",
      e.target,
      "I8fMlw0D6mDUp6zcj",
    )
    .then(() => {
      showModal.value = true; // ✅ This triggers your custom modal
      e.target.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      // ❌ No alert() here — use a custom error state instead
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
