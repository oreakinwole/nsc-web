<script setup>
// import autoAnimate from "@formkit/auto-animate";

const isMenuOpen = ref(false);
const isServicesOpen = ref(false);

// const autoAniSection = ref();

// onMounted(() => {
//   autoAnimate(autoAniSection.value, { duration: 300 });
// });

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  isServicesOpen.value = false;
}
</script>

<template>
  <div
    class="flex absolute bg-black/30 top-9 z-10 justify-between w-full items-center py-5 px-4"
  >
    <!-- Logo -->
    <div>
      <NuxtLink to="/">
        <img
          src="@/assets/svg/logo_white.svg"
          alt="logo"
          class="w-36"
          :class="isMenuOpen && 'animate__animated animate__fadeOut'"
        />
      </NuxtLink>
    </div>

    <!-- Hamburger menu icon -->
    <div @click="toggleMenu">
      <div class="space-y-2">
        <!-- <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span>
        <span class="block w-6 h-0.5 bg-black"></span> -->

        <img src="@/assets/svg/menu_white.svg" alt="menu" class="w-9" />
      </div>
    </div>

    <!-- Dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="animate__animated animate__slideInRight fixed top-0 left-0 w-full h-screen bg-white z-60"
    >
      <div class="flex flex-row justify-between px-4 pt-8">
        <div class="pl-2">
          <NuxtLink to="/">
            <img
              @click="toggleMenu"
              src="@/assets/svg/logo.svg"
              alt="logo"
              class="w-36 animate__animated animate__fadeIn animate__delay-1s"
          /></NuxtLink>
        </div>

        <div @click="toggleMenu">
          <img
            src="/images/navbar/icons/closedark.png"
            alt="close"
            class="w-[25px] h-[25px]"
          />
        </div>
      </div>
      <ul
        class="flex flex-col w-full justify-center items-center pt-14 gap-5 text-2xl pl-2"
      >
        <div>
          <header
            @click="isServicesOpen = !isServicesOpen"
            class="flex items-center"
          >
            <p class="py-2">Services</p>
            <svg
              class="ml-2 w-6"
              :class="isServicesOpen && 'rotate-180'"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9181 8.94922L13.3981 15.4692C12.6281 16.2392 11.3681 16.2392 10.5981 15.4692L4.07812 8.94922"
                stroke="#665244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </header>

          <ul
            class="animate__animated animate__fadeIn text-xs pl-8"
            v-if="isServicesOpen"
          >
            <NuxtLink to="/services/landscape-sandiego">
              <li @click="toggleMenu" class="pb-3 underline">
                Landscape Design SD
              </li>
            </NuxtLink>

            <NuxtLink to="/services/pavers-san-diego">
              <li @click="toggleMenu" class="pb-3 underline">
                Pavers San Diego
              </li>
            </NuxtLink>

            <NuxtLink to="/services/pools-and-spas">
              <li @click="toggleMenu" class="pb-3 underline">Pools and Spas</li>
            </NuxtLink>

            <NuxtLink to="/services/outdoor-kitchens">
              <li @click="toggleMenu" class="pb-3 underline">
                Outdoor Kitchens
              </li>
            </NuxtLink>
            <NuxtLink to="/services/concrete-sd">
              <li @click="toggleMenu" class="pb-3 underline">
                Concrete San Diego
              </li>
            </NuxtLink>
            <NuxtLink to="/services/artificial-turf">
              <li @click="toggleMenu" class="pb-3 underline">
                Artificial Turf San Diego
              </li>
            </NuxtLink>
            <NuxtLink to="/services/patios-and-pergolas">
              <li @click="toggleMenu" class="pb-3 underline">
                Patio Covers and Pergolas
              </li>
            </NuxtLink>
          </ul>
        </div>
        <NuxtLink to="/build-steps">
          <li @click="toggleMenu" class="py-2">Build</li>
        </NuxtLink>
        <NuxtLink to="/design">
          <li @click="toggleMenu" class="py-2">Design</li>
        </NuxtLink>

        <NuxtLink to="/portfolio">
          <li @click="toggleMenu" class="py-2">Portfolio</li>
        </NuxtLink>

        <NuxtLink to="/finance">
          <li @click="toggleMenu" class="py-2">Finance</li>
        </NuxtLink>
        <NuxtLink to="/contact">
          <li @click="toggleMenu" class="py-2">Contact</li>
        </NuxtLink>
      </ul>

      <svg
        class="w-40 mx-auto mt-14"
        width="190"
        height="40"
        viewBox="0 0 190 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="19.8422" cy="19.8422" r="19.3422" stroke="#000" />
        <path
          d="M20.9963 16.132V18.0367H23.223L22.8704 20.6023H20.9963V26.5135C20.6205 26.5687 20.2361 26.5975 19.8459 26.5975C19.3954 26.5975 18.9531 26.5595 18.5223 26.486V20.6023H16.4688V18.0367H18.5223V15.7062C18.5223 14.2605 19.6299 13.0879 20.9968 13.0879V13.0891C21.0009 13.0891 21.0044 13.0879 21.0084 13.0879H23.2235V15.3068H21.7761C21.346 15.3068 20.9968 15.6762 20.9968 16.1314L20.9963 16.132Z"
          fill="#000"
        />
        <circle cx="94.5297" cy="19.8422" r="19.3422" stroke="#000" />
        <path
          d="M97.9193 13.0869H90.8737C88.9273 13.0869 87.3438 14.6709 87.3438 16.6179V23.0655C87.3438 25.0125 88.9273 26.5965 90.8737 26.5965H97.9193C99.8658 26.5965 101.449 25.0125 101.449 23.0655V16.6179C101.449 14.6709 99.8658 13.0869 97.9193 13.0869ZM88.589 16.6179C88.589 15.3579 89.6141 14.3325 90.8737 14.3325H97.9193C99.1789 14.3325 100.204 15.3579 100.204 16.6179V23.0655C100.204 24.3255 99.1789 25.3509 97.9193 25.3509H90.8737C89.6141 25.3509 88.589 24.3255 88.589 23.0655V16.6179Z"
          fill="#000"
        />
        <path
          d="M94.3929 23.1255C96.2029 23.1255 97.6763 21.6525 97.6763 19.8411C97.6763 18.0297 96.2037 16.5566 94.3929 16.5566C92.582 16.5566 91.1094 18.0297 91.1094 19.8411C91.1094 21.6525 92.582 23.1255 94.3929 23.1255ZM94.3929 17.8031C95.5169 17.8031 96.4311 18.7175 96.4311 19.8419C96.4311 20.9662 95.5169 21.8807 94.3929 21.8807C93.2688 21.8807 92.3546 20.9662 92.3546 19.8419C92.3546 18.7175 93.2688 17.8031 94.3929 17.8031Z"
          fill="#000"
        />
        <path
          d="M97.9784 17.0863C98.4658 17.0863 98.8631 16.6897 98.8631 16.2014C98.8631 15.713 98.4666 15.3164 97.9784 15.3164C97.4902 15.3164 97.0938 15.713 97.0938 16.2014C97.0938 16.6897 97.4902 17.0863 97.9784 17.0863Z"
          fill="#000"
        />
        <circle cx="169.209" cy="19.8422" r="19.3422" stroke="#000" />
        <path
          d="M162.074 13.0869L167.645 20.5381L162.039 26.5965H163.301L168.21 21.2926L172.176 26.5965H176.47L170.585 18.7261L175.804 13.0869H174.542L170.021 17.9717L166.369 13.0869H162.075H162.074ZM163.929 14.0166H165.902L174.613 25.6668H172.64L163.929 14.0166Z"
          fill="#000"
        />
      </svg>

      <div class="flex justify-center gap-12 pt-[7rem]">
        <div>
          <img
            src="/images/navbar/imgs/Rectangle 426.png"
            width="200"
            alt="picture 1"
          />
        </div>

        <div class="pt-5">
          <img src="/images/navbar/imgs/Rectangle 427.png" alt="picture 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add some styles for the hamburger */
</style>
