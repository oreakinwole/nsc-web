<script setup>
const whyUs = [
  {
    title: "Decades of Experience:",
    descr:
      "With 40+ years in the industry, we’ve honed the art of landscape design and construction.",
  },

  {
    title: "Local Roots",
    descr:
      "As San Diego locals, we understand the area’s unique landscape and design needs.",
  },
  {
    title: "Custom Approach",
    descr: "Every project is tailored to your vision, preferences, and budget.",
  },
  {
    title: "Full-Service Excellence",
    descr:
      "From design to build, we handle every detail, ensuring a seamless experience.",
  },
];

const stats = ref([
  { id: 1, value: 2000, label: "Satisfied Customers" },
  { id: 2, value: 25, label: "Years of Experience" },
  { id: 3, value: 1000, label: "Design Consultations" },
  { id: 4, value: 100, label: "Transparency", suffix: "%" },
]);
</script>

<template>
  <div class="py-24 px-4 lg:px-40 bg-[#000] text-white">
    <div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-6 lg:p-4">
      <div class="bg-[#2c2c2c] xl:h-[530px]   rounded-xl ">
        <img
          src="https://ucarecdn.com/133fd044-a6ad-4994-b151-522479630cb4/Img.jpg"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div
        class="bg-[#2c2c2c] text-white  xl:h-[530px]  px-8 space-y-8 py-10 rounded-xl"
      >
        <h4 class="text-3xl tracking-wide font-semibold">
          Welcome To Modern Yardz
        </h4>

        <p class="mt-1 font-light tracking-widest text-sm lg:text-md text-[#adabab]">
          Modern Yardz is a full-service landscaping design and build company
          serving the San Diego community for over 40 years. From Chula Vista to
          Rancho Santa Fe, we specialize in creating custom outdoor spaces that
          bring your vision to life. Whether it’s a modern patio, luxurious
          pool, cozy fire pit, or lush artificial turf, we handle every step of
          the process, from design to construction, with care and precision.
        </p>

        <p class="mt-1 font-light tracking-widest text-md text-[#adabab]">
          We’re not just building yards; we’re building spaces where memories
          are made. With local roots and decades of expertise, we’re here to
          help San Diego homeowners create outdoor spaces that are as functional
          as they are beautiful.
        </p>
      </div>
      <div
        class="bg-[#2c2c2c] text-white xl:h-[530px]  px-8  py-10 rounded-xl"
      >
        <h4 class="text-3xl tracking-wide mb-8 font-semibold">
          About us
        </h4>
        <hr class="opacity-15" />
        <h5 class="text-2xl tracking-wide my-6">Our mission</h5>
        <p class="mt-1 font-light tracking-widest text-md text-[#adabab]">
          Modern Yardz is a full-service landscaping design and build company
          serving the San Diego community for over 40 years. From Chula Vista to
          Rancho Santa Fe, we specialize in creating custom outdoor spaces that
        </p>

        <h5 class="text-2xl tracking-wide my-6">Our vison</h5>

        <p class="mt-1 font-light tracking-widest text-md text-[#adabab]">
          We’re not just building yards; we’re building spaces where memories
          are made. With local roots and decades of expertise, we’re here to
        </p>
      </div>
      <div
        class="bg-[#2c2c2c] text-white xl:h-[530px]  rounded-xl flex items-center justify-center"
      >
        <img
          src=" @/assets/images/patio.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>

    <div class="mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="text-center p-6 rounded-2xl shadow-md"
        >
          <h3
            v-if="index === stats.length - 1"
            class="text-4xl text-white align-middle"
          >
            {{ stat.value }} %
          </h3>

          <h3 v-else class="text-4xl text-white align-middle">
            {{ stat.value }}
            <span class="text-[25px] text-[#ab856a] align-top">+</span>
          </h3>
          <p class="mt-6 whitespace-nowrap text-md text-white">
            {{ stat.label }}
          </p>
        </div>

        <!-- <count-up :startVal="0" :endVal="2022" :duration="4"></count-up> -->
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
</template>
