<template>
  <section class="py-20 bg-gray-light" id="properties">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-4">
          Featured Properties
        </h2>
        <p class="text-xl text-gray-color max-w-2xl mx-auto">
          Handpicked apartments that offer the perfect blend of comfort and convenience
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PropertyCard
          v-for="property in properties"
          :key="property.id"
          :property="property"
        />
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/search" class="inline-block bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
          View All Properties
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import PropertyCard from './PropertyCard.vue'

const properties = ref([
  {
    id: 1,
    title: 'Luxury 2-Bedroom Apartment in Lekki',
    location: 'Lekki Phase 1, Lagos',
    price: 45000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Security']
  },
  {
    id: 2,
    title: 'Modern Studio in Victoria Island',
    location: 'Victoria Island, Lagos',
    price: 35000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Gym', 'Parking', 'AC']
  },
  {
    id: 3,
    title: 'Spacious 3-Bedroom in Ikoyi',
    location: 'Ikoyi, Lagos',
    price: 65000,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Kitchen', 'Balcony', 'Security']
  },
  {
    id: 4,
    title: 'Cozy 1-Bedroom in Ikeja',
    location: 'Ikeja GRA, Lagos',
    price: 28000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Kitchen', 'Parking', 'AC']
  },
  {
    id: 5,
    title: 'Executive Suite in Banana Island',
    location: 'Banana Island, Lagos',
    price: 120000,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Pool', 'Gym', 'Security']
  },
  {
    id: 6,
    title: 'Charming Apartment in Yaba',
    location: 'Yaba, Lagos',
    price: 22000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
    amenities: ['WiFi', 'Kitchen', 'Parking', 'AC']
  }
])
</script>
