<script setup></script>

<template>
  <div class="bg-[#F1EDE8]">
    <!-- Dropdown content -->
    <div class="py-1 flex gap-10 px-4 mt-5 mb-5 text-white h-[260px]">
      <!-- first container -->

      <button
        class="transition-all duration-1000 animate__animated animate__flipInX block text-left px-4 border-[.5px] border-black rounded-lg border-opacity-50 w-1/2"
      >
        <NuxtLink to="/">
          <div class="ml-3 mt-2">
            <p class="font-[600] text-black text-3xl">Design</p>

            <p class="font-[400] text-[14px] text-[#A89C93] mt-1">
              Professional landscape design simplified
            </p>
          </div>
          <div
            class="w-[195px] h-[124px] mt-5 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] overflow-hidden"
          >
            <img
              src="@/assets/images/Ferrer_026.jpg"
              alt="first image"
              class="h-full w-full object-cover"
            />
          </div>
        </NuxtLink>
      </button>

      <!-- second container -->
      <button
        class="transition-all duration-1000 animate__animated animate__flipInX block text-left px-4 border-[.5px] border-black rounded-lg border-opacity-50 w-1/2"
      >
        <NuxtLink to="/">
          <div class="ml-3 mt-2">
            <p class="font-[600] text-black text-3xl">Design Packages</p>
            <!-- <p class="font-[400] text-[14px] text-[#A89C93] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> -->
          </div>
          <div
            class="w-[195px] h-[124px] flex justify-center items-center mt-5 ml-20 bg-navbar-color rounded-tl-[20px] rounded-tr-[20px]"
          >
            <p class="text-gray-900 text-8xl">?</p>
          </div>
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
