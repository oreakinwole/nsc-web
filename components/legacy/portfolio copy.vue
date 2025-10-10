<script setup>
import autoAnimate from "@formkit/auto-animate";
import paverImg from "@/assets/images/gallery-pav1.png";
import concreteImg from "@/assets/images/concrete.webp";
import turfImg from "@/assets/images/purf.png";
import patioImg from "@/assets/images/patio.png";
import kitchenImg from "@/assets/images/outdoor-kitchen.png";

const autoAniSection = ref();

const isShowingCat = ref(false);
const flipTimes = ref(3);
const catNumber = ref(0);

const catData = ref([
  {
    title: ` <p class="  text-4xl font-medium">
          Paver
          <span class="text-new-gray   text-5xl">G</span>allery
        </p>`,
    image: paverImg,
  },
  {
    title: ` <p class="  text-4xl font-medium mt-10">
              Concrete
              <span class="text-new-gray   text-5xl">G</span>allery
            </p>`,
    image: concreteImg,
  },
  {
    title: `  <p class="  text-4xl font-medium">
                Turf
                <span class="text-new-gray   text-5xl">G</span>allery`,
    image: turfImg,
  },
  {
    title: ` <p class="  text-4xl font-medium">
                Patio Covers & 
                <span class="text-new-gray   text-5xl">P</span>ergolas
              </p> `,
    image: patioImg,
  },
  {
    title: ` <p class="  text-4xl font-medium">
                Outdoor 
                <span class="text-new-gray   text-5xl">K</span>ITCHENS
              </p>`,
    image: kitchenImg,
  },
]);

onMounted(() => {
  autoAnimate(autoAniSection.value, { duration: 300 });
});
</script>

<template>
  <div class="px-4 lg:px-20 lg:pt-6">
    <p class="lg:hidden   text-4xl font-medium">
      Portfoli<span class="text-new-gray   text-4xl">O</span>
    </p>

    <ul class="flex lg:hidden justify-between max-w-[220px] font-medium">
      <li>Style</li>
      <li class="text-new-gray">Elegance</li>
      <li class="text-new-gray">Creative</li>
    </ul>

    <section
      class="flex gap-x-8 justify-between h-[580px] py-10 pb-20 border-b border-new-gray border-opacity-25"
    >
      <div class="w-full lg:w-1/3 h-full rounded-2xl overflow-hidden">
        <img
          src="@/assets/images/pool1.jpg"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="hidden lg:block w-2/3 h-full">
        <p class="  text-7xl font-medium">
          Portfoli<span class="text-new-gray   text-7xl">O</span>
        </p>
        <ul class="flex justify-between max-w-[220px] font-medium">
          <li>Style</li>
          <li class="text-new-gray">Elegance</li>
          <li class="text-new-gray">Creative</li>
        </ul>

        <div class="my-4 mt-20 grid grid-cols-3">
          <img
            class="rounded-2xl"
            src="@/assets/images/port1.png"
            width="200"
          />

          <div class="place-content-end">
            <p class="font-medium">The best design for your space</p>
            <span class="text-new-gray">Located in San Diego</span>
          </div>
          <img
            class="rounded-2xl"
            src="@/assets/images/port1.png"
            width="200"
          />
        </div>

        <NuxtLink to="#all-gallery">
          <OutlinedButton
            :no-action="true"
            border-color="#000"
            text-color="#000"
            background-color="white"
            text="VIEW MORE"
            class="lg:w-[230px]"
          />
        </NuxtLink>
      </div>
    </section>

    <section id="all-gallery">
      <div class="relative flex justify-center items-center mt-16 mb-10">
        <aside
          :class="[
            isShowingCat ? 'rounded-3xl' : 'rounded-full',
            isShowingCat ? 'pb-b' : 'pb-1',
          ]"
          class="absolute top-0 left-0 z-10 bg-white w-[250px] border border-new-gray pt-[2px]"
        >
          <main ref="autoAniSection">
            <header class="flex justify-between items-center px-4">
              <div>
                <span class="text-[#A89C93] text-xs font-medium">Category</span>
                <p class="font-semibold">All Categories</p>
              </div>

              <aside
                @click="isShowingCat = !isShowingCat"
                class="w-8 h-8 flex justify-center items-center rounded-full border border-new-gray"
              >
                <svg
                  :class="isShowingCat && 'rotate-180'"
                  role="button"
                  class="w-4"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4391 6.13477H8.76658H4.55908C3.83908 6.13477 3.47908 7.00477 3.98908 7.51477L7.87408 11.3998C8.49658 12.0223 9.50908 12.0223 10.1316 11.3998L11.6091 9.92227L14.0166 7.51477C14.5191 7.00477 14.1591 6.13477 13.4391 6.13477Z"
                    fill="black"
                  />
                </svg>
              </aside>
            </header>

            <ul v-if="isShowingCat" class="mt-4">
              <li
                :class="catNumber === 0 && 'bg-[#F6F6F6]'"
                class="font-semibold p-3 hover:bg-[#F6F6F6]'"
                role="button"
                @click="
                  isShowingCat = !isShowingCat;
                  catNumber = 0;
                  flipTimes = 5;
                "
              >
                Paver Gallery
              </li>
              <li
                role="button"
                @click="
                  isShowingCat = !isShowingCat;
                  catNumber = 1;
                  flipTimes = 5;
                "
                :class="catNumber === 1 && 'bg-[#F6F6F6]'"
                class="font-semibold p-3 hover:bg-[#F6F6F6]'"
              >
                Concrete Gallery
              </li>
              <li
                role="button"
                @click="
                  isShowingCat = !isShowingCat;
                  catNumber = 2;
                  flipTimes = 5;
                "
                :class="catNumber === 2 && 'bg-[#F6F6F6]'"
                class="font-semibold p-3 hover:bg-[#F6F6F6]'"
              >
                Turf Gallery
              </li>
              <li
                role="button"
                @click="
                  isShowingCat = !isShowingCat;
                  catNumber = 3;
                  flipTimes = 5;
                "
                :class="catNumber === 3 && 'bg-[#F6F6F6]'"
                class="font-semibold p-3 hover:bg-[#F6F6F6]'"
              >
                Patio Covers and Pergolas
              </li>
              <li
                role="button"
                @click="
                  isShowingCat = !isShowingCat;
                  catNumber = 4;
                  flipTimes = 5;
                "
                :class="catNumber === 4 && 'bg-[#F6F6F6]'"
                class="font-semibold p-3 hover:bg-[#F6F6F6]'"
              >
                Outdoor Kitchens
              </li>
            </ul>
          </main>
        </aside>

        <div class="mt-28 lg:mt-0" v-html="catData[catNumber].title"></div>
      </div>

      <div
        class="grid grid-cols-2 lg:grid-cols-3 pt-8 gap-8"
        ref="autoAniSection"
      >
        <div
          v-for="i in flipTimes"
          :key="i"
          class="bg-gray-100 h-[400px] lg:flex-1 rounded-2xl overflow-hidden"
        >
          <img
            :src="catData[catNumber].image"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
