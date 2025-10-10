<script setup></script>

<template>
  <ViewDesignProcessOld />

  <div class="py-24 px-4 xl:px-40 bg-[#000] text-white">
    <div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-6 lg:p-4">
      <div class="bg-[#2c2c2c] h-[500px] rounded-xl relative">
        <header
          class="absolute bottom-0 h-[45%] w-full bg-gradient-to-t from-black via-gray-950 to-gray-950 opacity-50 blur-lg"
        ></header>
        <img
          src="https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_23.webp?v=1708451361&width=3000"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />

        <div
          class="absolute bottom-5 xl:left-10 w-full p-4 tracking-widest text-white"
        >
          <NuxtLink to="/services/outdoor-kitchens">
            <h3 class="text-4xl font-bold flex items-center space-x-2">
              <span>Outdoor Kitchens</span>

              <IconChevron class="rotate-90 opacity-70" />
            </h3>
          </NuxtLink>
        </div>
      </div>
      <div class="bg-[#2c2c2c] h-[500px] rounded-xl relative">
        <img
          src="@/assets/images/services/concrete.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />

        <header
          class="absolute bottom-0 h-[45%] w-full bg-gradient-to-t from-black via-gray-950 to-gray-950 opacity-50 blur-lg"
        ></header>

        <div
          class="absolute bottom-5 xl:left-10 w-full p-4 tracking-widest text-white"
        >
          <NuxtLink to="/services/concrete-sd">
            <h3 class="text-4xl font-bold flex items-center space-x-2">
              <span>Concrete Patios</span>

              <IconChevron class="rotate-90 opacity-70" />
            </h3>
          </NuxtLink>
        </div>
      </div>
      <div class="bg-[#2c2c2c] h-[500px] rounded-xl relative">
        <img
          src="@/assets/images/services/turf.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />

        <header
          class="absolute bottom-0 h-[45%] w-full bg-gradient-to-t from-black via-gray-950 to-gray-950 opacity-50 blur-lg"
        ></header>

        <div
          class="absolute bottom-5 xl:left-10 w-full p-4 tracking-widest text-white"
        >
          <NuxtLink to="/services/artificial-turf">
            <h3 class="text-4xl font-bold flex items-center space-x-2">
              <span>Artificial Turf</span>

              <IconChevron class="rotate-90 opacity-70" />
            </h3>
          </NuxtLink>
        </div>
      </div>
      <div
        class="bg-[#2c2c2c] text-white h-[500px] rounded-xl relative flex items-center justify-center"
      >
        <img
          src="@/assets/images/services/paver.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />

        <header
          class="absolute bottom-0 h-[45%] w-full bg-gradient-to-t from-black via-gray-950 to-gray-950 opacity-50 blur-lg"
        ></header>

        <div
          class="absolute bottom-5 xl:left-10 w-full p-4 tracking-widest text-white"
        >
          <NuxtLink to="/services/patios-and-pergolas">
            <h3 class="text-4xl font-bold flex items-center space-x-2">
              <span>Paver Patios</span>

              <IconChevron class="rotate-90 opacity-70" />
            </h3>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="text-center mt-10">
      <FilledButton
        background-color="white"
        text="Book Your Free Consultation Today"
        text-color="black"
        class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
      />
    </div>
  </div>

  <ViewTestimonial />

  <!-- <ViewBeforeAndAfter /> -->
</template>

<style>
#myVideo {
  /* position: fixed;
  right: 0;
  bottom: 0; */
  min-width: 100%;
  min-height: 100%;
}
</style>
