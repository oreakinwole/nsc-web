<template>
  <section class="py-20 bg-gradient-to-br from-primary/5 to-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-4">
          What Our Guests Say
        </h2>
        <p class="text-xl text-gray-color max-w-2xl mx-auto">
          Don't just take our word for it - hear from our happy guests
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <span class="text-2xl font-bold text-primary">{{ testimonial.initials }}</span>
            </div>
            <div>
              <h4 class="font-bold text-secondary">{{ testimonial.name }}</h4>
              <div class="flex text-accent">
                <span v-for="n in 5" :key="n">★</span>
              </div>
            </div>
          </div>

          <p class="text-gray-color italic mb-4">
            "{{ testimonial.review }}"
          </p>

          <div class="text-sm text-text-muted">
            {{ testimonial.property }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Chioma Adeyemi',
    initials: 'CA',
    review: 'Amazing experience! The apartment was spotless, well-furnished, and in a perfect location. The host was very responsive and helpful. Will definitely book again!',
    property: 'Lekki Phase 1 Apartment'
  },
  {
    id: 2,
    name: 'David Okonkwo',
    initials: 'DO',
    review: 'Great value for money. The apartment had all the amenities we needed for our week-long stay. The WiFi was fast and the security was top-notch. Highly recommended!',
    property: 'Victoria Island Studio'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    initials: 'SJ',
    review: 'Perfect for my business trip. The location was convenient for meetings, and the apartment was comfortable and quiet. The 24/7 support team was very helpful.',
    property: 'Ikoyi Executive Suite'
  }
])
</script>
