<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center">
            <img
              src="~/assets/logo.jpg"
              alt="NSC Logo"
              class="h-12 w-auto mr-3 object-contain"
            >
            <div class="flex flex-col">
              <span class="text-xl font-bold text-secondary leading-tight">Nigerian Shortlet</span>
              <span class="text-xl font-bold text-primary leading-tight">Community</span>
            </div>
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a @click="navigateToSection('/')" class="text-gray-color hover:text-primary transition-colors font-medium cursor-pointer">
            Home
          </a>
          <a @click="navigateToSection('/#properties')" class="text-gray-color hover:text-primary transition-colors font-medium cursor-pointer">
            Properties
          </a>
          <a @click="navigateToSection('/#how-it-works')" class="text-gray-color hover:text-primary transition-colors font-medium cursor-pointer">
            How It Works
          </a>
          <a @click="navigateToSection('/#about')" class="text-gray-color hover:text-primary transition-colors font-medium cursor-pointer">
            About
          </a>
          <a @click="navigateToSection('/#contact')" class="text-gray-color hover:text-primary transition-colors font-medium cursor-pointer">
            Contact
          </a>
        </div>

        <!-- Action Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink to="/create-listing" class="text-primary hover:text-primary-dark font-semibold transition-colors">
            List Property
          </NuxtLink>
          <NuxtLink to="/login" class="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
            Sign In
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-color hover:text-primary focus:outline-none"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white border-t border-gray-light"
    >
      <div class="px-4 pt-2 pb-4 space-y-3">
        <a @click="navigateToSection('/')" class="block text-gray-color hover:text-primary transition-colors font-medium py-2 cursor-pointer">
          Home
        </a>
        <a @click="navigateToSection('/#properties')" class="block text-gray-color hover:text-primary transition-colors font-medium py-2 cursor-pointer">
          Properties
        </a>
        <a @click="navigateToSection('/#how-it-works')" class="block text-gray-color hover:text-primary transition-colors font-medium py-2 cursor-pointer">
          How It Works
        </a>
        <a @click="navigateToSection('/#about')" class="block text-gray-color hover:text-primary transition-colors font-medium py-2 cursor-pointer">
          About
        </a>
        <a @click="navigateToSection('/#contact')" class="block text-gray-color hover:text-primary transition-colors font-medium py-2 cursor-pointer">
          Contact
        </a>
        <div class="pt-4 space-y-2">
          <NuxtLink to="/create-listing" class="block w-full text-center text-primary hover:text-primary-dark font-semibold py-2 border border-primary rounded-lg transition-colors">
            List Property
          </NuxtLink>
          <NuxtLink to="/login" class="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded-lg transition-colors">
            Sign In
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)

const navigateToSection = async (path) => {
  // Close mobile menu if open
  mobileMenuOpen.value = false

  // If path includes a hash (section)
  if (path.includes('#')) {
    const [pagePath, hash] = path.split('#')

    // If we're already on the home page
    if (route.path === pagePath || route.path === '/') {
      // Just scroll to the section
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Navigate to home page first, then scroll
      await router.push(pagePath || '/')
      // Wait for navigation and DOM update
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  } else {
    // Just navigate to the page
    router.push(path)
  }
}
</script>
