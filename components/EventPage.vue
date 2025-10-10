<script setup>
import { NuxtImg } from "#components";
import autoAnimate from "@formkit/auto-animate";
import paverImg from "@/assets/images/gallery-pav1.png";
import concreteImg from "@/assets/images/concrete.webp";
import turfImg from "@/assets/images/purf.png";
import patioImg from "@/assets/images/patio.png";
import kitchenImg from "@/assets/images/outdoor-kitchen.png";

const autoAniSection = ref();
const isViewingGallery = ref(0);
const router = useRouter();

const galleryData = ref([
  {
    title: "Paver Gallery",
    image: paverImg,
    imgArray: [
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "https://www.modernyardz.com/cdn/shop/files/9.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/18.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/20.webp?v=1708357678&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/22.webp?v=1708359330&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/24.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/25.webp?v=1708357678&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/26.webp?v=1708357679&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/30.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/31.webp?v=1708357681&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/32.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/28.webp?v=1708357682&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/34.webp?v=1708357680&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/36.webp?v=1708357681&width=3000",
    ],
  },
  {
    title: "Concrete Gallery",
    image: concreteImg,

    imgArray: [
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "http://veezevents.com/wp-content/uploads/2023/05/Veez-events-Location.jpg",
      "https://www.modernyardz.com/cdn/shop/files/1_b8834d74-a5c6-42e6-bf90-c2bb2eb219db.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/2_38ef7e63-07e9-4328-bfb9-0525137023c7.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/3_dc4945ab-bc4f-4476-8db7-eb37cc1b3caf.webp?v=1708362360&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/4_5adf2a64-91ca-4735-a7d4-789f2c2f0945.webp?v=1708362362&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/5_5e600c59-edee-43fa-ae1a-cb9725814255.webp?v=1708362361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/6_a6cd1a2b-a5f9-4773-830b-1e33060bf9f9.webp?v=1708362361&width=3000",
     
    ],
  },
  {
    title: "Turf Gallery",
    image: turfImg,
    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/turf13.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf14.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf15.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf16.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf18.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf17.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf19.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf20.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf1.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf2.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf3.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf5.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf6.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf7.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf10.webp?v=1708364631&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf9.webp?v=1708364632&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/turf8.webp?v=1708364631&width=3000",
    ],
  },
  {
    title: " Patio Covers & Pergolas",
    image: patioImg,

    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547.webp?v=1708447763&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_370_cg_true_m.webp?v=1708448097&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547_1.webp?v=1708448183&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870.webp?v=1708448247&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547_2.webp?v=1708448286&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_1.webp?v=1708448477&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_2.webp?v=1708448517&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_984_h_1749.webp?v=1708448564&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_3.webp?v=1708448606&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_4.webp?v=1708448653&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_5.webp?v=1708448698&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_6.webp?v=1708448738&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_7.webp?v=1708448815&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_773.webp?v=1708448850&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_773_1.webp?v=1708448887&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_8.webp?v=1708448925&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_1547_3.webp?v=1708449102&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_12.webp?v=1708449135&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_13.webp?v=1708449183&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_14.webp?v=1708449219&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_15.webp?v=1708449257&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_653.webp?v=1708449317&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_17.webp?v=1708449378&width=3000",
    ],
  },
  {
    title: "Outdoor Kitchens",
    image: kitchenImg,

    imgArray: [
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_20.webp?v=1708450474&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_21.webp?v=1708451245&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_22.webp?v=1708451314&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/rs_w_1160_h_870_23.webp?v=1708451361&width=3000",
      "https://www.modernyardz.com/cdn/shop/files/6_1e7d8cd1-ce99-4415-b0c2-4195c74365c7.webp?v=1708533229&width=3000",
    ],
  },
]);

onMounted(() => {
  autoAnimate(autoAniSection.value, { duration: 300 });
});

const handleChangeView = (index) => (isViewingGallery.value = index);

// No additional script needed for this static UI
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="border-b border-gray-200 px-4 py-3 md:px-6">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <!-- Logo -->
        <!-- <a href="#" class="flex-shrink-0">
          <NuxtImg src="/eventbrite-logo.svg" alt="Aurora Events" class="h-8" />
        </a> -->

        <p class="tracking-wide uppercase text-2xl font-bold">Aurora Events</p>

        <!-- Search Bar -->
        <div
          class="flex flex-1 max-w-xl mx-4 rounded-full border border-gray-300 overflow-hidden"
        >
          <div class="relative flex-1 flex items-center">
            <span class="absolute left-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search events"
              class="w-full py-2 pl-10 pr-3 text-gray-700 focus:outline-none"
            />
          </div>
          <div class="flex items-center border-l border-gray-300">
            <span class="flex items-center px-3 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              Abuja
            </span>
          </div>

          <button
            class="bg-orange-600 hover:bg-orange-700 text-white px-4 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation -->
        <nav class="flex items-center space-x-4 md:space-x-6">
          <a
            href="#"
            class="text-gray-700 hover:text-gray-900 text-sm md:text-base whitespace-nowrap"
            >Contact Sales</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-gray-900 text-sm md:text-base whitespace-nowrap"
            >Create Events</a
          >
          <div class="relative group">
            <button
              class="flex items-center text-gray-700 hover:text-gray-900 text-sm md:text-base whitespace-nowrap"
            >
              Help Center
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a
            href="#"
            class="text-gray-700 hover:text-gray-900 text-sm md:text-base whitespace-nowrap"
            >Find my tickets</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-gray-900 text-sm md:text-base whitespace-nowrap"
            >Log In</a
          >
          <a
            href="#"
            class="text-gray-700 hover:text-gray-900 text-sm md:text-base whitespace-nowrap"
            >Sign Up</a
          >
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <div class="relative overflow-hidden rounded-3xl mx-4 md:mx-6 my-4">
      <div class="absolute inset-0 bg-black/30 z-10"></div>
      <img
        src="http://veezevents.com/wp-content/uploads/2023/05/Veez-Events-Festival.jpg"
        alt="Colorful festival in Abuja"
        class="w-full h-[450px] object-cover opacity-80"
      />
      <div
        class="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16 text-white"
      >
        <h1 class="text-4xl uppercase md:text-5xl font-bold mb-4">
          Aurora Grande event<br />
          <span class="text-5xl md:text-6xl">Abuja</span>
        </h1>
        <p class="max-w-xl text-lg mb-6">
          Looking for something to do in Abuja? Whether you're a local, new in
          town or just cruising through we've got loads of great tips and
          events. You can explore by location, what's popular, our top picks,
          free stuff... you got this. Ready?
        </p>

        <div class="flex items-center space-x-4">
          <button
            class="bg-orange-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            Abuja
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div class="hidden lg:block text-center">
            <FilledButton
              background-color="black"
              text="Get Tickets"
              text-color="orange"
              class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
    <!--  -->

    <div class="hidden lg:block bg-[#F8F6F2] px-2 md:px-8 py-24">
      <div class="max-w-screen-lg space-y-4 mx-auto text-center text-black">
        <h4
          class="tracking-wide uppercase text-4xl lg:text-5xl font-semibold mb-2"
        >
          Abuja’s Finest Premier Design & Build Events Experts
        </h4>

        <p class="text-xl mt-2 tracking-widest font-medium uppercase">
          Let’s create your dream event
        </p>
        <p
          class="text-md text-black mt-4 lg:max-w-screen-sm leading-relaxed tracking-widest lg:mx-auto"
        >
          We transform outdoor spaces into stunning retreats with custom pools,
          patios, fire pits, and more.
        </p>
      </div>

      <div class="hidden lg:block text-center mt-16">
        <FilledButton
          background-color="black"
          text="Book Your Free Consultation Today"
          text-color="orange"
          class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
        />
      </div>
    </div>

    <div class="relative mt-20 text-center">
      <h5 class="tracking-wider uppercase text-3xl font-medium my-5">
        Our Partners
      </h5>
      <div
        class="hidden lg:block bg-opacity-50 h-[80px] w-full overflow-hidden"
      >
        <NuxtMarquee class="w-full h-full overflow-hidden">
          <img
            src="@/assets/svg/partners.svg"
            class="w-full h-full object-cover"
          />
        </NuxtMarquee>
      </div>
    </div>

    <div class="py-24 mt-28 px-4 lg:px-40 bg-[#dbc9c982] text-white">
      <div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-6 lg:p-4">
        <div class="bg-[#2c2c2c] xl:h-[530px] rounded-xl">
          <img
            src="@/assets/images/insta-save.net_InstagramPost_veezevents_3596264565235864693.jpeg"
            alt="team photo"
            class="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div
          class="bg-[#2c2c2c] text-white xl:h-[530px] px-8 space-y-8 py-10 rounded-xl"
        >
          <h4 class="text-3xl tracking-wide font-semibold">
            Welcome To Aurora Events
          </h4>

          <p
            class="mt-1 font-light tracking-widest text-sm lg:text-md text-[#adabab]"
          >
            Aurora Events is a full-service events design and build company
            serving the San Diego community for over 40 years. From Chula Vista
            to Rancho Santa Fe, we specialize in creating custom outdoor spaces
            that bring your vision to life. Whether it’s a modern patio,
            luxurious pool, cozy fire pit, or lush artificial turf, we handle
            every step of the process, from design to construction, with care
            and precision.
          </p>

          <p class="mt-1 font-light tracking-widest text-md text-[#adabab]">
            We’re not just building yards; we’re building spaces where memories
            are made. With local roots and decades of expertise, we’re here to
            help San Diego homeowners create outdoor spaces that are as
            functional as they are beautiful.
          </p>
        </div>
        <div class="bg-[#2c2c2c] text-white xl:h-[530px] px-8 py-10 rounded-xl">
          <h4 class="text-3xl tracking-wide mb-8 font-semibold">About us</h4>
          <hr class="opacity-15" />
          <h5 class="text-2xl tracking-wide my-6">Our mission</h5>
          <p class="mt-1 font-light tracking-widest text-md text-[#adabab]">
            Aurora Events is a full-service landscaping design and build company
            serving the San Diego community for over 40 years. From Chula Vista
            to Rancho Santa Fe, we specialize in creating custom outdoor spaces
            that
          </p>

          <h5 class="text-2xl tracking-wide my-6">Our vison</h5>

          <p class="mt-1 font-light tracking-widest text-md text-[#adabab]">
            We’re not just building yards; we’re building spaces where memories
            are made. With local roots and decades of expertise, we’re here to
          </p>
        </div>
        <div
          class="bg-[#2c2c2c] text-white xl:h-[530px] rounded-xl flex items-center justify-center"
        >
          <img
            src=" @/assets/images/insta-save.net_InstagramPost_seeabuja_3396262528592577080.jpeg"
            alt="team photo"
            class="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>

    <div class="hidden lg:block w-full h-full px-4 lg:px-20 pt-6">
      <p class="font-playfairDisplay text-7xl font-medium">
        Galler<span class="text-new-gray font-imperial text-7xl">Y</span>
      </p>

      <section id="all-gallery">
        <header
          class="flex flex-wrap gap-4 lg:space-x-4 justify-center mt-4 lg:my-8"
        >
          <div
            v-for="(item, index) in galleryData"
            class="text-xs lg:text-sm transition-all duration-1000 ease-in-out py-2 px-3 rounded-3xl bg-navbar-color hover:text-white hover:bg-black"
            :class="isViewingGallery === index && 'lg:text-white lg:bg-black'"
            :key="item.title"
            role="button"
          >
            {{ item.title }}
          </div>
        </header>

        <div
          class="grid grid-cols-2 lg:grid-cols-3 pt-8 gap-2 lg:gap-8"
          ref="autoAniSection"
          id="all-gallery-view"
        >
          <div
            v-for="imagey in galleryData[isViewingGallery].imgArray"
            :key="imagey"
            class="bg-gray-100 h-[200px] lg:h-[400px] lg:flex-1 rounded-2xl overflow-hidden"
          >
            <img :src="imagey" class="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
/* Any additional custom styles can go here */
@media (max-width: 768px) {
  .flex-wrap {
    flex-wrap: wrap;
  }

  nav {
    order: 3;
    width: 100%;
    margin-top: 0.5rem;
    overflow-x: auto;
    justify-content: space-between;
    padding-bottom: 0.25rem;
  }
}
</style>
