<script setup>
import RentalNavBar from '@/components/rental/NavBar.vue'
import RentalFooter from '@/components/rental/Footer.vue'
</script>

<template>
  <div class="layout">
    <RentalNavBar />
    <main class="flex-1">
      <slot />
    </main>
    <RentalFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  padding-top: 80px; /* Account for fixed navbar */
}
</style>
