<template>
  <NuxtLink :to="`/property/${property.id}`" class="block">
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      <div class="relative overflow-hidden h-64">
        <img
          :src="property.image"
          :alt="property.title"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        >
        <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
          <span class="text-primary font-bold">{{ property.rating }}</span>
          <span class="text-gray-color text-sm ml-1">★</span>
        </div>
      </div>

      <div class="p-6">
        <h3 class="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
          {{ property.title }}
        </h3>

        <div class="flex items-center text-gray-color mb-4">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm">{{ property.location }}</span>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="(amenity, index) in property.amenities.slice(0, 3)"
            :key="index"
            class="text-xs bg-gray-light text-gray-color px-3 py-1 rounded-full"
          >
            {{ amenity }}
          </span>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-gray-light">
          <div>
            <span class="text-2xl font-bold text-primary">₦{{ property.price.toLocaleString() }}</span>
            <span class="text-gray-color text-sm">/night</span>
          </div>

          <button class="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  property: {
    type: Object,
    required: true
  }
})
</script>
