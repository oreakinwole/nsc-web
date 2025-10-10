<script setup>
import "animate.css";
import HeroSection from '@/components/rental/HeroSection.vue'
import FeaturedProperties from '@/components/rental/FeaturedProperties.vue'
import WhyChooseUs from '@/components/rental/WhyChooseUs.vue'
import HowItWorks from '@/components/rental/HowItWorks.vue'
import Testimonials from '@/components/rental/Testimonials.vue'
</script>

<template>
  <div class="landing-container">
    <HeroSection />
    <FeaturedProperties />
    <WhyChooseUs />
    <HowItWorks />
    <Testimonials />
  </div>
</template>

<style>
.landing-container {
  min-height: 100vh;
  background-color: #ffffff;
}
</style>
