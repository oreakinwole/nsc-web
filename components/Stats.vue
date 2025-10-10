<script setup>
const stats = ref([
  { id: 1, value: 3500, title: "Satisfaction", label: "Satisfied Customers" },
  { id: 2, value: 40, title: "Experience", label: "Years of Experience" },
  {
    id: 3,
    value: 10000,
    title: "Consultations",
    label: "Design Consultations",
  },
  {
    id: 4,
    value: 100,
    title: "No doubts",
    label: "Transparency",
    suffix: "%",
  },
]);
</script>

<template>
  <div class="py-12 bg-[#EFF4E4] px-4 lg:px-20">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-5xl font-semibold text-center text-gray-800 mb-8 pt-3">
        A CUT ABOVE THE REST
      </h2>

      <div
        class="mt-20 w-full rounded-xl overflow-hidden sm:h-[760px] flex sm:flex-row flex-col justify-between bg-[#161813] text-white"
      >
        <div class="sm:w-2/3 sm:block hidden w-full h-full bg-blue-100">
          <video class="h-full w-full object-cover" autoplay muted loop>
            <source src="/video/quizvid.mp4" type="video/mp4" />
            Something went wrong while playing video
          </video>
        </div>

        <div
          class="flex-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 justify-items-center content-center gap-8 py-8 px-6"
        >
          <div v-for="stat in stats" :key="stat.id" class="space-y-2">
            <span
              class="px-4 py-1 text-center rounded-md bg-[#EFF4E4] text-xs uppercase font-medium text-[#161813]"
              >{{ stat.title }}</span
            >
            <p v-if="stat.suffix" class="text-5xl font-medium tracking-wide">
              {{ stat.value.toLocaleString() + stat.suffix }}
            </p>
            <p v-else class="text-5xl font-medium tracking-wide">
              {{ stat.value.toLocaleString() }}
            </p>
            <p class="text-sm font-light tracking-wide">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:block text-center mt-16">
      <FilledButton
        background-color="black"
        text="Start Your Project Today"
        text-color="white"
        class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
      />
    </div>
  </div>
</template>
