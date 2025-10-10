<template>
  <section class="py-20 bg-white" id="how-it-works">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-4">
          How It Works
        </h2>
        <p class="text-xl text-gray-color max-w-2xl mx-auto">
          Book your perfect stay in just a few simple steps
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <!-- Step 1 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
              <svg class="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div class="absolute -right-4 top-10 hidden md:block">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Search</h3>
          <p class="text-gray-color">
            Browse through our wide selection of verified properties
          </p>
        </div>

        <!-- Step 2 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
              <svg class="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div class="absolute -right-4 top-10 hidden md:block">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Select</h3>
          <p class="text-gray-color">
            Choose your dates and the apartment that suits your needs
          </p>
        </div>

        <!-- Step 3 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
              <svg class="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div class="absolute -right-4 top-10 hidden md:block">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Book</h3>
          <p class="text-gray-color">
            Make secure payment and confirm your reservation
          </p>
        </div>

        <!-- Step 4 -->
        <div class="text-center group">
          <div class="mb-6">
            <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors duration-300">
              <svg class="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Check In</h3>
          <p class="text-gray-color">
            Receive your keys and enjoy your comfortable stay
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
