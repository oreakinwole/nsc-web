<script setup>
import logoBlack from '/images/navbar/imgs/logo.png'
import logoWhite from '@/assets/svg/logo_white.svg'
// import autoAnimate from "@formkit/auto-animate";

// const autoAniSection = ref();

const isServiceOpen = ref(false);
const isMoreOpen = ref(false);

const route = useRoute();
const emit = defineEmits(["navbarShowing"]);
const props = defineProps(["isBodyClicked"]);

// onMounted(() => {
//   autoAnimate(autoAniSection.value);
// });

const isBodyClicked = computed(() => props.isBodyClicked);

watch([isServiceOpen, isMoreOpen], ([service, more]) => {
  emit("navbarShowing", service || more);
});

function toggleDropdown(type) {
  if (type === "more") {
    isServiceOpen.value = false;
    isMoreOpen.value = !isMoreOpen.value;
  } else if (type === "service") {
    isMoreOpen.value = false;
    isServiceOpen.value = !isServiceOpen.value;
  } else {
    isMoreOpen.value = false;
    isServiceOpen.value = false;
  }
}

function getArrowDirection(isOpen) {
  return isOpen ? "rotate-180" : "";
}

watch(isBodyClicked, (val) => {
  if (val === true) {
    isMoreOpen.value = false;
    isServiceOpen.value = false;
  }
});
</script>

<template>
  <div class="lg:hidden">
    <PopUpModal />

    <MobileNavBar />
  </div>
  <!--  <div class="flex flex-col bg-navbar-color  fixed w-full z-10">-->
  <div class="hidden lg:absolute top-0 left-0 z-10 w-full lg:flex flex-col">
    <!-- first layout -->
    <PopUpModal />

    <!-- <NavbarSecond :toggle-dropdown="toggleDropdown" /> -->

    <div class="mt-6 max-w-24 mx-auto">
      <NuxtLink to="/">
        <img
          @click="toggleDropdown"
          :src="
            route.path !== '/'
              ? logoBlack
              : logoWhite
          "
          alt="modern yardz logo"
          width="100"
        />
      </NuxtLink>
    </div>

    <!--third layout -->
    <div
      class="flex   tracking-widest justify-center items-center mt-6 text-lg"
      :class="{
        'text-white': route.path === '/',
      }"
    >
      <div class="flex flex-row items-center gap-16 uppercase">
        <NuxtLink to="/">
          <p class="font-medium" @click="toggleDropdown">Home</p>
        </NuxtLink>
        <!-- Service select button -->
        <div class="relative">
          <!-- Selected Option -->
          <div
            @click="toggleDropdown('service')"
            role="button"
            class="uppercase inline-flex items-center justify-between w-full p-2"
          >
            <div>
              <span class="font-medium">Services</span>
            </div>
            <svg
              :class="['w-5 h-5 ml-2 -mr-1', getArrowDirection(isServiceOpen)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div
            v-if="isServiceOpen"
            class="absolute -left-[15rem] z-10 mt-[1px] lg:w-[70rem] border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px] shadow-custom-light space-y-4"
          >
            <!-- Dropdown content -->
            <div class="py-1 flex items-center gap-8 px-10 mb-2">
              <!-- first container -->
              <NuxtLink to="/services/landscape-sandiego">
                <button
                  @click="toggleDropdown"
                  class="transition-all duration-1000 animate__animated animate__flipInX block w-full text-left px-4 py-2 border-[.5px] h-[200px] overflow-hidden rounded-[25px] group"
                >
                  <div class="ml-3 group-hover:text-white">
                    <p class="font-[600] text-[16px]">Landscape Design SD</p>
                    <!-- <p
                      class="text-[14px] text-[#A89C93] mt-1 group-hover:text-white"
                    >
                      San Diego, a city renowned for its stunning landscapes and
                      vibrant outdoor life.
                    </p> -->
                  </div>
                  <div
                    class="w-[200px] h-[104px] mt-10 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] custom-cursor-button"
                  >
                    <img
                      src="/images/navbar/imgs/Mask group(4).png"
                      alt="first image"
                      class=""
                    />
                  </div>
                </button>
              </NuxtLink>
              <!-- second container -->
              <NuxtLink to="/services/pavers-san-diego">
                <button
                  @click="toggleDropdown"
                  class="transition-all duration-1000 animate__animated animate__flipInX block w-full text-left px-4 py-2 border-[.5px] h-[200px] overflow-hidden rounded-[25px] group hover:bg-black"
                >
                  <div class="ml-3 group-hover:text-white">
                    <p class="font-[600] text-[16px] group-hover:text-white">
                      Pavers San Diego
                    </p>
                    <!-- <p
                      class="text-[14px] text-[#A89C93] mt-1 group-hover:text-white"
                    >
                      Interlocking concrete pavers, a top choice for enhancing
                      outdoor areas.
                    </p> -->
                  </div>
                  <div
                    class="w-[200px] h-[104px] mt-10 ml-20 bg-[#665244] rounded-tl-[20px] rounded-tr-[20px] inner-cont"
                  >
                    <img
                      src="/images/navbar/imgs/img.jpg"
                      alt="second image"
                      class="cursor-custom-cursor"
                    />
                  </div>
                </button>
              </NuxtLink>
              <!-- third container -->
              <div
                class="block w-full text-left overflow-hidden rounded-[25px]"
              >
                <div class="">
                  <div class="flex flex-row justify-between px-6 ml-[-18px]">
                    <div class="flex flex-col gap-3 pt-3">
                      <h4 class="font-[600] text-[14px]">More Services</h4>

                      <NuxtLink to="/services/pools-and-spas">
                        <p
                          class="text-[13px] hover:underline"
                          @click="toggleDropdown"
                        >
                          Pools and Spas
                        </p>
                      </NuxtLink>

                      <NuxtLink to="/services/outdoor-kitchens">
                        <p
                          class="text-[13px] hover:underline"
                          @click="toggleDropdown"
                        >
                          Outdoor Kitchens
                        </p>
                      </NuxtLink>

                      <NuxtLink to="/services/concrete-sd">
                        <p
                          class="text-[13px] hover:underline"
                          @click="toggleDropdown"
                        >
                          Concrete San Diego
                        </p>
                      </NuxtLink>

                      <NuxtLink to="/services/artificial-turf">
                        <p
                          class="text-[13px] hover:underline"
                          @click="toggleDropdown"
                        >
                          Artificial Turf San Diego
                        </p>
                      </NuxtLink>

                      <NuxtLink to="/services/patios-and-pergolas">
                        <p
                          class="text-[13px] hover:underline"
                          @click="toggleDropdown"
                        >
                          Patio Covers and Pergolas
                        </p>
                      </NuxtLink>
                    </div>

                    <div class="mt-[70px]">
                      <NuxtLink to="/services">
                        <img
                          @click="toggleDropdown"
                          role="button"
                          src="/images/navbar/icons/See all button.png"
                          alt="arrow"
                          class="h-[65px] w-[65px]"
                        />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink to="/portfolio">
          <p class="font-medium" @click="toggleDropdown">Portfolio</p>
        </NuxtLink>
        <NuxtLink to="/contact">
          <p class="font-medium" @click="toggleDropdown">Contact</p>
        </NuxtLink>
        <NuxtLink to="/finance">
          <p class="font-medium" @click="toggleDropdown">Finance</p>
        </NuxtLink>

        <!-- More select button -->

        <div class="relative">
          <!-- Selected Option -->
          <button
            @click="toggleDropdown('more')"
            class="transition-all duration-1000 animate__animated animate__flipInX uppercase cursor-pointer inline-flex items-center justify-between w-full p-2"
          >
            <span class="font-medium">More</span>
            <svg
              :class="['w-5 h-5 ml-2 -mr-1', getArrowDirection(isMoreOpen)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            v-if="isMoreOpen"
            class="absolute left-[-51rem] z-10 mt-[1px] w-[71rem] origin-top-right border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px] shadow-custom-light space-y-4 more-dropdown"
          >
            <!-- Dropdown content -->
            <div class="py-1 flex flex-row gap-10 px-10 mt-5 mb-5">
              <!-- first container -->

              <button
                @click="toggleDropdown"
                class="transition-all duration-1000 animate__animated animate__flipInX block w-[30%] text-left px-4 border-[.5px] h-[200px] rounded-[25px] more-parent"
              >
                <NuxtLink to="/3d-packages">
                  <div class="ml-3 mt-2">
                    <p @click="toggleDropdown" class="font-[600] text-[16px]">
                      3D Packages
                    </p>

                    <!-- <p class="font-[400] text-[14px] text-[#A89C93] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> -->
                  </div>
                  <div
                    class="w-[195px] h-[124px] mt-5 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] more-cont overflow-hidden"
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
                @click="toggleDropdown"
                class="transition-all duration-1000 animate__animated animate__flipInX block w-[30%] text-left px-4 border-[.5px] h-[200px] rounded-[25px] more-parent"
              >
                <NuxtLink to="/#FAQS">
                  <div class="ml-3 mt-2">
                    <p class="font-[600] text-[16px]">FAQs</p>
                    <!-- <p class="font-[400] text-[14px] text-[#A89C93] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> -->
                  </div>
                  <div
                    class="w-[195px] h-[124px] flex justify-center items-center mt-5 ml-20 bg-navbar-color rounded-tl-[20px] rounded-tr-[20px] more-cont"
                  >
                    <p
                      class="  text-gray-900 font-bold text-8xl"
                    >
                      ?
                    </p>
                  </div>
                </NuxtLink>
              </button>

              <!-- third container -->
              <button
                @click="toggleDropdown"
                class="transition-all duration-1000 animate__animated animate__flipInX block w-[30%] text-left px-4 border-[.5px] h-[200px] rounded-[25px] more-parent"
              >
                <NuxtLink to="/#socials">
                  <div class="ml-3 mt-2">
                    <p class="font-[600] text-[16px]">Socials</p>
                    <!-- <p class="font-[400] text-[14px] text-[#A89C93] mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> -->
                  </div>
                  <div
                    class="w-[195px] h-[124px] flex justify-center items-center mt-5 ml-20 bg-navbar-color rounded-tl-[20px] rounded-tr-[20px] more-cont"
                  >
                    <p
                      class="  text-gray-900 font-bold text-8xl"
                    >
                      @
                    </p>
                  </div>
                </NuxtLink>
              </button>
            </div>
          </div>
        </div>
        <!-- End More select button -->

        <!-- <div>
          <img
            src="/images/navbar/icons/Search.png"
            alt="search icon"
            class="w-4"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.underline-black {
  border-bottom: 2px black solid;
  padding-bottom: 5px;
  padding-top: 8px;
}
.underline-black2 {
  position: relative;
  padding-bottom: 15px;
  padding-top: 8px;
}

.underline-black2::after {
  content: "";
  display: block;
  width: 150%;
  height: 2px;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: -8px;
}

/* @media (min-width: 1450px) {
 
.more-cont {
    width: 300px;
    height: 154px;
    margin-top: 7px;
  }
  .more-parent {
    width: 100%;
  }
  .more-dropdown {
    width: 93rem;
    left: -61rem;
  }
  
} */
</style>
