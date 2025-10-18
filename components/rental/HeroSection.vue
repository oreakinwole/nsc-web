<template>
  <section class="relative bg-gradient-to-br from-primary/10 to-white min-h-screen flex items-center">
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop"
        alt="Beautiful apartment interior"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-primary/20"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
          Find Your Perfect
          <span class="text-primary block mt-2">Shortlet Stay</span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-color mb-12 max-w-2xl mx-auto">
          Your trusted Nigerian community for comfortable, fully-furnished apartments and short-term stays in prime locations
        </p>

        <!-- Search Box -->
        <div class="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="md:col-span-1">
              <label class="block text-sm font-semibold text-gray-color mb-2 text-left">Location</label>
              <input
                type="text"
                v-model="searchLocation"
                placeholder="Where are you going?"
                class="w-full px-4 py-3 border-2 border-gray-light rounded-lg focus:border-primary focus:outline-none transition-colors"
              >
            </div>

            <div class="md:col-span-1">
              <label class="block text-sm font-semibold text-gray-color mb-2 text-left">Check In</label>
              <input
                type="date"
                v-model="checkIn"
                class="w-full px-4 py-3 border-2 border-gray-light rounded-lg focus:border-primary focus:outline-none transition-colors"
              >
            </div>

            <div class="md:col-span-1">
              <label class="block text-sm font-semibold text-gray-color mb-2 text-left">Check Out</label>
              <input
                type="date"
                v-model="checkOut"
                class="w-full px-4 py-3 border-2 border-gray-light rounded-lg focus:border-primary focus:outline-none transition-colors"
              >
            </div>

            <div class="md:col-span-1 flex items-end">
              <button @click="handleSearch" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Search
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">500+</div>
            <div class="text-gray-color">Properties</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">1000+</div>
            <div class="text-gray-color">Happy Guests</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">24/7</div>
            <div class="text-gray-color">Support</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter()

const searchLocation = ref('')
const checkIn = ref('')
const checkOut = ref('')

const handleSearch = () => {
  const query = {}
  if (searchLocation.value) query.location = searchLocation.value
  if (checkIn.value) query.checkIn = checkIn.value
  if (checkOut.value) query.checkOut = checkOut.value

  router.push({
    path: '/search',
    query
  })
}
</script>

<style scoped>
</style>
