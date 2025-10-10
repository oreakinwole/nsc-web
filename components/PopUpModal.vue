<script setup>
function handleBookConsult() {
  const calendly = useCalendly();

  calendly.initPopupWidget({
    url: "https://calendly.com/d/2sx-n9t-6g7",
  });
}
</script>

<template>
  <div class="flex bg-black items-center justify-center py-3">
    <!-- <h4 class="text-white text-center uppercase cursor-pointer">{{ text }}</h4> -->

    <p class="text-xs  animate__animated animate__flipInX">
      <!-- <span class="text-white">Start Your Transformation Today –</span> -->
      <span
        class="font-bold  text-white border-white tracking-widest border-b"
        @click="handleBookConsult"
        role="button"
      >
        BOOK YOUR FREE DESIGN CONSULTATION
      </span>
    </p>
    <!-- <img :src="closeIcon" alt="close png" class="cursor-pointer absolute right-36" width="16" @click="closeModal"> -->
  </div>
  <!-- 
  <div
    v-if="isVisible"
    @click="handleBookConsult"

    class="flex flex-row bg-black items-center justify-center relative h-[40px]   text-[12px] gas xe"
  >
    <h4 class="text-white text-center uppercase cursor-pointer number">{{ text }}</h4>
    <img :src="closeIcon" alt="close png" class="cursor-pointer absolute right-24" width="16" @click="closeModal">
  </div> -->
</template>

<style lang="scss"></style>
