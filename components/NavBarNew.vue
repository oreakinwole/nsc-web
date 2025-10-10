<script setup>
import logo from "@/assets/svg/logo.svg";

const isShowMobileNav = ref(false);
const isDesignOpen = ref(false);
const isBuildOpen = ref(false);

const props = defineProps(["isBodyClicked"]);

const isBodyClicked = computed(() => props.isBodyClicked);

const isServicesOpen = ref(false);

const route = useRoute();

const toggleNav = () => {
  isShowMobileNav.value = !isShowMobileNav.value;
  if (!isShowMobileNav.value) {
    isBuildOpen.value = false;
    isDesignOpen.value = false;
  }
};

const handleBookConsult = () => {
  const calendly = useCalendly();

  calendly.initPopupWidget({
    url: "https://calendly.com/d/2sx-n9t-6g7",
  });
};

function clickDropdown(type) {
  if (type === "design") {
    isDesignOpen.value = !isDesignOpen.value;
    isBuildOpen.value = false;
  } else if (type === "build") {
    isBuildOpen.value = !isBuildOpen.value;
    isDesignOpen.value = false;
  }
}

function hoverDropdown(type) {
  if (type === "design") {
    isBuildOpen.value = false;
    if (isDesignOpen.value === false) isDesignOpen.value = true;
  } else if (type === "build") {
    isDesignOpen.value = false;
    if (isBuildOpen.value === false) isBuildOpen.value = true;
  }
}

watch(isBodyClicked, (val) => {
  console.log("Val", val);
  if (val === true) {
    isBuildOpen.value = false;
    isDesignOpen.value = false;
  }
});
</script>

<template>
  <div>
    <PopUpModal />
    <MobileNavBar />
    <div
      class="hidden xl:absolute xl:flex xl:top-10 hero-trigger bg-[#F1EDE8] w-full items-center justify-between py-4 px-8 lg:px-12 max-w-[1600px] z-20"
    >
      <NuxtLink
        to="/"
        :class="
          isShowMobileNav
            ? 'animate__animated animate__fadeOut animate__slow'
            : 'animate__animated animate__fadeIn animate__slow'
        "
      >
        <img :src="logo" alt="modern yardz logo" class="w-28" />
      </NuxtLink>

      <nav>
        <!-- <NuxtLink to="/">
        <p class="font-light ">Home</p>
      </NuxtLink> -->
        <ul
          class="flex items-center gap-16 uppercase tracking-widest text-black"
        >
          <li>
            <div class="relative group max-h-[100px]">
              <NuxtLink to="/design" class="font-medium">Design</NuxtLink>
              <NavdropDesign
                class="absolute -left-[10rem] top-14 z-10 mt-[1px] w-[50rem] origin-top-right border border-black border-t-0 border-opacity-20 rounded-bl-sm rounded-br-sm opacity-0 invisible shadow-custom-light space-y-4 group-hover:opacity-100 group-hover:visible transition-all"
              />
            </div>
          </li>

          <li>
            <div class="relative">
              <NuxtLink to="/build-steps" class="font-medium">Build</NuxtLink>
              <NavdropBuild
                v-if="isBuildOpen"
                :class="route.path !== '/' && 'bg-black'"
              />
            </div>
          </li>

          <li>
            <NuxtLink to="/portfolio">
              <p class="font-medium">Portfolio</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-12">
        <p
          role="button"
          @click="handleBookConsult"
          class="uppercase text-xs hover:bg-opacity-80 bg-[#A89C93] p-2.5 px-6 text-white rounded-lg"
        >
          Schedule Consultation
        </p>

        <svg
          class="w-40"
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

        <svg
          @click="toggleNav"
          class="w-7 lg:w-8 cursor-pointer"
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.05" width="55" height="55" rx="8" fill="#090908" />
          <path
            d="M12.125 18.959H42.875"
            stroke="#090908"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M12.125 27.5H42.875"
            stroke="#090908"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M12.125 36.041H42.875"
            stroke="#090908"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div
        class="animate__animated animate__slideInDown fixed top-0 right-0 bg-white h-screen w-full z-20"
        v-if="isShowMobileNav"
      >
        <main class="flex flex-row-reverse h-full">
          <div class="hidden h-full bg-white lg:block lg:w-1/2 relative">
            <nav class="flex justify-end pt-2 items-center h-14 pr-12">
              <svg
                role="button"
                @click="toggleNav"
                class="w-6"
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.93934"
                  y1="43.9393"
                  x2="44.3657"
                  y2="1.51293"
                  stroke="black"
                  stroke-width="3"
                />
                <line
                  y1="-1.5"
                  x2="60"
                  y2="-1.5"
                  transform="matrix(0.707107 0.707107 0.707107 -0.707107 3 0)"
                  stroke="black"
                  stroke-width="3"
                />
              </svg>
            </nav>
            <section class="w-3/5 h-4/5 pt-16 rounded-xl overflow-hidden">
              <video
                class="h-full w-full object-cover rounded-xl"
                autoplay
                muted
                loop
              >
                <source src="/video/quizvid.mp4" type="video/mp4" />
                Something went wrong while playing video
              </video>
            </section>
          </div>

          <div class="w-full lg:w-1/2 pl-16">
            <nav class="flex justify-between pt-2 items-center h-14">
              <div class="animate__animated animate__fadeIn animate__delay-2s">
                <NuxtLink to="/">
                  <img
                    src="@/assets/svg/logo.svg"
                    width="70"
                    @click="isShowMobileNav = false"
                  />
                </NuxtLink>
              </div>
            </nav>

            <section
              class="flex justify-between mt-12 lg:mt-16 lg:pl-14 lg:items-center animate__animated animate__fadeIn animate__slow"
            >
              <ul class="space-y-12">
                <ul class="flex flex-col">
                  <div>
                    <header
                      @click="isServicesOpen = !isServicesOpen"
                      class="flex items-center"
                    >
                      <p class="text-5xl font-semibold">Services</p>
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
                      class="animate__animated animate__fadeIn text-sm pt-8"
                      v-if="isServicesOpen"
                    >
                      <NuxtLink to="/services/landscape-sandiego">
                        <li
                          @click="
                            isShowMobileNav = false;
                            isServicesOpen = false;
                          "
                          class="pb-3 underline"
                        >
                          Landscape Design SD
                        </li>
                      </NuxtLink>

                      <NuxtLink to="/services/pavers-san-diego">
                        <li
                          @click="
                            isShowMobileNav = false;
                            isServicesOpen = false;
                          "
                          class="pb-3 underline"
                        >
                          Pavers San Diego
                        </li>
                      </NuxtLink>

                      <NuxtLink to="/services/pools-and-spas">
                        <li
                          @click="
                            isShowMobileNav = false;
                            isServicesOpen = false;
                          "
                          class="pb-3 underline"
                        >
                          Pools and Spas
                        </li>
                      </NuxtLink>

                      <NuxtLink to="/services/outdoor-kitchens">
                        <li
                          @click="
                            isShowMobileNav = false;
                            isServicesOpen = false;
                          "
                          class="pb-3 underline"
                        >
                          Outdoor Kitchens
                        </li>
                      </NuxtLink>
                      <NuxtLink to="/services/concrete-sd">
                        <li
                          @click="
                            isShowMobileNav = false;
                            isServicesOpen = false;
                          "
                          class="pb-3 underline"
                        >
                          Concrete San Diego
                        </li>
                      </NuxtLink>
                      <NuxtLink to="/services/artificial-turf">
                        <li
                          @click="
                            isShowMobileNav = false;
                            isServicesOpen = false;
                          "
                          class="pb-3 underline"
                        >
                          Artificial Turf San Diego
                        </li>
                      </NuxtLink>
                      <NuxtLink to="/services/patios-and-pergolas">
                        <li
                          @click="
                            isShowMobileNav = false;
                            isServicesOpen = false;
                          "
                          class="pb-3 underline"
                        >
                          Patio Covers and Pergolas
                        </li>
                      </NuxtLink>
                    </ul>
                  </div>
                </ul>

                <li
                  class="text-5xl font-semibold"
                  @click="
                    isShowMobileNav = false;
                    isServicesOpen = false;
                  "
                >
                  <NuxtLink to="/build-steps">Build</NuxtLink>
                </li>

                <li
                  class="text-5xl font-semibold"
                  @click="
                    isShowMobileNav = false;
                    isServicesOpen = false;
                  "
                >
                  <NuxtLink to="/design">Design</NuxtLink>
                </li>
                <li
                  class="text-5xl font-semibold"
                  @click="
                    isShowMobileNav = false;
                    isServicesOpen = false;
                  "
                >
                  <NuxtLink to="/finance">Finance</NuxtLink>
                </li>

                <li
                  class="text-5xl font-semibold"
                  @click="
                    isShowMobileNav = false;
                    isServicesOpen = false;
                  "
                >
                  <NuxtLink to="/contact">Contact Us</NuxtLink>
                </li>
              </ul>
            </section>

            <footer class="grid grid-cols-4 lg:mt-28 lg:pl-14">
              <svg
                class="w-56"
                width="469"
                height="94"
                viewBox="0 0 469 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="422" cy="47" r="46.5" stroke="black" />
                <path
                  d="M430.05 31H413.361C408.751 31 405 34.7519 405 39.3639V54.6361C405 59.2481 408.751 63 413.361 63H430.05C434.661 63 438.412 59.2481 438.412 54.6361V39.3639C438.412 34.7519 434.661 31 430.05 31ZM407.95 39.3639C407.95 36.3793 410.378 33.9505 413.361 33.9505H430.05C433.034 33.9505 435.462 36.3793 435.462 39.3639V54.6361C435.462 57.6207 433.034 60.0495 430.05 60.0495H413.361C410.378 60.0495 407.95 57.6207 407.95 54.6361V39.3639Z"
                  fill="black"
                />
                <path
                  d="M421.707 54.7783C425.995 54.7783 429.485 51.2892 429.485 46.9985C429.485 42.7079 425.997 39.2188 421.707 39.2188C417.418 39.2188 413.93 42.7079 413.93 46.9985C413.93 51.2892 417.418 54.7783 421.707 54.7783ZM421.707 42.1711C424.37 42.1711 426.535 44.3372 426.535 47.0004C426.535 49.6636 424.37 51.8297 421.707 51.8297C419.045 51.8297 416.879 49.6636 416.879 47.0004C416.879 44.3372 419.045 42.1711 421.707 42.1711Z"
                  fill="black"
                />
                <path
                  d="M430.205 40.4736C431.359 40.4736 432.3 39.5342 432.3 38.3774C432.3 37.2207 431.361 36.2812 430.205 36.2812C429.048 36.2812 428.109 37.2207 428.109 38.3774C428.109 39.5342 429.048 40.4736 430.205 40.4736Z"
                  fill="black"
                />
                <circle cx="297" cy="47" r="46.5" stroke="black" />
                <path
                  d="M280.082 31L293.279 48.6496L280 63H282.99L294.617 50.4367L304.01 63H314.182L300.243 44.3576L312.604 31H309.615L298.908 42.5706L290.256 31H280.084H280.082ZM284.477 33.2022H289.149L309.783 60.7978H305.111L284.477 33.2022Z"
                  fill="black"
                />
                <circle cx="172" cy="47" r="46.5" stroke="black" />
                <path
                  d="M180.05 31H163.361C158.751 31 155 34.7519 155 39.3639V54.6361C155 59.2481 158.751 63 163.361 63H180.05C184.661 63 188.412 59.2481 188.412 54.6361V39.3639C188.412 34.7519 184.661 31 180.05 31ZM157.95 39.3639C157.95 36.3793 160.378 33.9505 163.361 33.9505H180.05C183.034 33.9505 185.462 36.3793 185.462 39.3639V54.6361C185.462 57.6207 183.034 60.0495 180.05 60.0495H163.361C160.378 60.0495 157.95 57.6207 157.95 54.6361V39.3639Z"
                  fill="black"
                />
                <path
                  d="M171.707 54.7783C175.995 54.7783 179.485 51.2892 179.485 46.9985C179.485 42.7079 175.997 39.2188 171.707 39.2188C167.418 39.2188 163.93 42.7079 163.93 46.9985C163.93 51.2892 167.418 54.7783 171.707 54.7783ZM171.707 42.1711C174.37 42.1711 176.535 44.3372 176.535 47.0004C176.535 49.6636 174.37 51.8297 171.707 51.8297C169.045 51.8297 166.879 49.6636 166.879 47.0004C166.879 44.3372 169.045 42.1711 171.707 42.1711Z"
                  fill="black"
                />
                <path
                  d="M180.205 40.4736C181.359 40.4736 182.3 39.5342 182.3 38.3774C182.3 37.2207 181.361 36.2812 180.205 36.2812C179.048 36.2812 178.109 37.2207 178.109 38.3774C178.109 39.5342 179.048 40.4736 180.205 40.4736Z"
                  fill="black"
                />
                <circle cx="47" cy="47" r="46.5" stroke="black" />
                <path
                  d="M49.7243 38.2106V42.7221H54.9986L54.1635 48.7994H49.7243V62.8012C48.8342 62.9318 47.9236 63 46.9993 63C45.9324 63 44.8846 62.91 43.8643 62.7359V48.7994H39V42.7221H43.8643V37.2021C43.8643 33.7774 46.4878 31 49.7256 31V31.0029C49.7352 31.0029 49.7435 31 49.7531 31H55V36.2559H51.5715C50.5526 36.2559 49.7256 37.131 49.7256 38.2091L49.7243 38.2106Z"
                  fill="black"
                />
              </svg>
            </footer>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
