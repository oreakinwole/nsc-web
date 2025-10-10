<template>
  <section class="py-20 bg-white" id="about">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-4">
          Why Choose NSC?
        </h2>
        <p class="text-xl text-gray-color max-w-2xl mx-auto">
          Join Nigeria's trusted shortlet community where finding and booking your perfect stay is easy, safe, and affordable
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Feature 1 -->
        <div class="text-center p-6 rounded-xl hover:bg-gray-light transition-colors duration-300">
          <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Verified Properties</h3>
          <p class="text-gray-color">
            All our properties are thoroughly verified and inspected to ensure quality and safety
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="text-center p-6 rounded-xl hover:bg-gray-light transition-colors duration-300">
          <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Best Prices</h3>
          <p class="text-gray-color">
            Get competitive rates with no hidden fees. What you see is what you pay
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="text-center p-6 rounded-xl hover:bg-gray-light transition-colors duration-300">
          <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">24/7 Support</h3>
          <p class="text-gray-color">
            Our customer support team is always available to help you before, during, and after your stay
          </p>
        </div>

        <!-- Feature 4 -->
        <div class="text-center p-6 rounded-xl hover:bg-gray-light transition-colors duration-300">
          <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Instant Booking</h3>
          <p class="text-gray-color">
            Book instantly without waiting for approval. Get confirmed in minutes
          </p>
        </div>

        <!-- Feature 5 -->
        <div class="text-center p-6 rounded-xl hover:bg-gray-light transition-colors duration-300">
          <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Flexible Options</h3>
          <p class="text-gray-color">
            Choose from daily, weekly, or monthly stays to suit your schedule and budget
          </p>
        </div>

        <!-- Feature 6 -->
        <div class="text-center p-6 rounded-xl hover:bg-gray-light transition-colors duration-300">
          <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">Secure Payment</h3>
          <p class="text-gray-color">
            Your transactions are protected with bank-level security and encryption
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
