<script setup>
defineProps(["toggleDropdown"]);
</script>

<template>
  <!-- second layout  -->
  <div
    class="flex flex-row mt-6 justify-between text-sm sm:text-base md:text-lg lg:text-[12px] seccont"
  >
    <div
      class="flex flex-row gap-6 sm:gap-8 lg:gap-14 uppercase ml-8 sm:ml-16 md:ml-24 lg:ml-36"
    >
      <p class="font-medium">About</p>
      <div class="flex flex-row gap-2">
        <div>
          <img
            src="/images/navbar/icons/call.png"
            alt="phone icon"
            class="w-16 h-16 lg:w-4 lg:h-4 xl:w-4 xl:h-4 mt-1"
          />
        </div>
        <p class="font-medium">Schedule A Call</p>
      </div>
    </div>

    <div class="mr-8 sm:mr-16 md:mr-24 lg:mr-10">
      <NuxtLink to="/">
        <img
          @click="toggleDropdown"
          src="/images/navbar/imgs/logo.png"
          alt="modern yardz logo"
          class="w-16 h-16 lg:w-[75px] lg:h-[25px] logo"
        />
      </NuxtLink>
    </div>

    <div
      class="flex flex-row gap-6 sm:gap-8 lg:gap-20 mr-8 sm:mr-16 md:mr-24 lg:mr-36"
    >
      <div>
        <img
          src="/images/navbar/icons/Search.png"
          alt="search icon"
          class="w-4"
        />
      </div>
      <div>
        <img
          src="/images/navbar/icons/Icon Frame.png"
          alt="dummy profile icon"
          class="w-4"
        />
      </div>
      <div>
        <img src="/images/navbar/icons/bag.png" alt="bag icon" class="w-4" />
      </div>
    </div>
  </div>
</template>
