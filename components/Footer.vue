<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#scroll-top", {
    display: "flex",
    scrollTrigger: {
      trigger: "#mobile-hero",
      start: "bottom 20%",
      scrub: true,
    },
  });
});
// Default to top is instant
const { scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: "smooth",
      offsetTop: 0,
    },
  },
});
const handleBookConsult = () => {
  const calendly = useCalendly();

  calendly.initPopupWidget({
    url: "https://calendly.com/d/2sx-n9t-6g7",
  });
};
</script>

<template>
  <footer class="w-full bg-black text-white pt-10">
    <!-- first layout -->

    <div class="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
      <h1
        class="text-center text-3xl lg:text-6xl flex flex-col max-w-80 lg:max-w-screen-sm"
      >
        Design your dream outdoor Oasis
      </h1>
      <div class="font-[500] text-[16px] mt-12">
        <OutlinedButton(BLACK)
          border-color="#FCFBFA"
          text-color="#FCFBFA"
          background-color="black"
          text="Book Your Free Design Consult Now"
          class="w-[300px]"
          @click="handleBookConsult"
        />
      </div>
    </div>

    <!-- second layout -->
    <div
      class="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-0 justify-between lg:mt-14 text-[#D0C2B0] lg:px-32"
    >
      <div
        class="border border-[#665244] border-l-0 pt-10 pb-12 lg:w-[150rem] mx-5 lg:mx-0 lg:pl-10"
      >
        <h4 class="uppercase text-sm lg:text-md">
          Subscribe to receive ModernYardz news & offers
        </h4>

        <div class="lg:bg-[#523825] lg:w-[480px] h-[55px] mt-5 lg:pl-5">
          <input
            disabled
            title="Coming Soon!"
            type="email"
            placeholder="Enter your email"
            class="bg-[#523825] pl-4 lg:pl-0 w-[90%] lg:w-[410px] h-[55px] outline-none text-[#A89C93] text-[16px] placeholder-[16px] placeholder-[#A89C93]"
          />
          <span class="hidden lg:inline pl-4 text-[#A89C93] text-[18px]"
            >&gt;</span
          >
        </div>

        <div class="flex gap-2 mt-8 lg:mt-0">
          <input type="checkbox" class="mt-6" />
          <p
            class="ml-2 font-[300] text-xs lg:text-[14px] mt-5 w-[21rem] lg:w-[25rem]"
          >
            I've read the Privacy Policy and I consent to Modern Yardz sending
            me marketing communications
          </p>
        </div>
      </div>

      <div
        class="flex gap-12 border border-[#665244] border-r-0 py-4 lg:pt-10 pl-5 lg:pl-12 w-[180rem]"
      >
        <div class="flex flex-col gap-5">
          <NuxtLink to="/services">
            <h4 class="text-sm lg:text-[16px] uppercase">Our Services</h4>
          </NuxtLink>

          <NuxtLink to="/3d-packages">
            <h4 class="text-sm lg:text-[16px] uppercase">3d Packages</h4>
          </NuxtLink>
          <NuxtLink to="/#design-process">
            <h4 class="text-sm lg:text-[16px] uppercase">Our Design Process</h4>
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-5">
          <NuxtLink to="/#why-choose-us">
            <h4 class="text-sm lg:text-[16px] uppercase">About Us</h4>
          </NuxtLink>
          <NuxtLink to="/contact">
            <h4 class="text-sm lg:text-[16px] uppercase">Contact Us</h4>
          </NuxtLink>
          <NuxtLink to="/finance">
            <h4 class="text-sm lg:text-[16px] uppercase">Financing</h4>
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-5">
          <NuxtLink to="/#testimonials">
            <h4 class="text-sm lg:text-[16px] uppercase">Reviews</h4>
          </NuxtLink>

          <h4 class="text-sm lg:text-[16px] uppercase">Privacy Policy</h4>

          <NuxtLink to="/portfolio">
            <h4 class="text-sm lg:text-[16px] uppercase">Portfolio</h4>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- third layout -->
    <div class="hidden lg:flex justify-between text-[#D0C2B0] px-32">
      <div
        class="border border-[#665244] border-l-0 border-t-0 w-[150rem] text-[12px]"
      >
        <div class="uppercase flex">
          <NuxtLink to="https://www.instagram.com/modern_yardz/">
            <p class="border border-[#665244] px-[3.9rem] py-5 border-t-0">
              Instagram
            </p>
          </NuxtLink>
          <NuxtLink to="https://www.facebook.com/modernyardz/">
            <p class="border border-[#665244] px-[3.9rem] py-5 border-t-0">
              Facebook
            </p>
          </NuxtLink>

          <NuxtLink to="https://www.pinterest.com/modernyardz/">
            <p class="border border-[#665244] px-[3.85rem] py-5 border-t-0">
              Pinterest
            </p>
          </NuxtLink>

          <NuxtLink to="https://www.x.com/modernyardz/">
            <p class="border border-[#665244] px-[3.8rem] py-5 border-t-0">
              Twitter
            </p>
          </NuxtLink>
        </div>

        <div class="py-4 ml-16">
          <select class="bg-black py-2 text-[14px] font-[300]">
            <option class="">🇺🇸 &nbsp;&nbsp; United States</option>
          </select>
        </div>
      </div>

      <div
        class="flex space-x-4 border border-[#665244] border-r-0 w-[180rem] pl-5 pt-10 border-t-0"
      >
        <p class="text-sm mt-1 font-light text-nowrap">We Accept</p>

        <div class="flex gap-3 lg:mt-0 mt-3 lg:mr-0">
          <div class="">
            <img
              src="/images/footer/icons/AmazonPay.png"
              alt="amazon icon"
              width="35"
            />
          </div>

          <div>
            <img
              src="/images/footer/icons/ApplePay.png"
              alt="apple pay icon"
              width="35"
            />
          </div>

          <div>
            <img
              src="/images/footer/icons/GooglePay.png"
              alt="google pay icon"
              width="35"
            />
          </div>

          <div>
            <img src="/images/footer/icons/JCB.png" alt="jcb icon" width="35" />
          </div>

          <div>
            <img
              src="/images/footer/icons/Mastercard.png"
              alt="master card icon"
              width="35"
            />
          </div>

          <div>
            <img
              src="/images/footer/icons/Visa Classic.png"
              alt="visa classic icon"
              width="35"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- fourth layout -->
    <div
      class="uppercase text-[#D0C2B0] flex flex-wrap justify-center gap-4 lg:justify-between mt-10 pb-48 lg:pb-0 lg:px-72 text-[12px]"
    >
      <p>
        © {{ new Date().getFullYear() }} MODERNYARDZ.com. All rights reserved.
      </p>
      <p>Privacy Policy | Terms of Use</p>
    </div>

    <div
      id="scroll-top"
      role="button"
      @click="scrollToTop"
      class="fixed right-4 bottom-32 rounded-full hidden justify-center items-center lg:hidden w-12 h-12 bg-[#A89C93] z-50"
    >
      <svg
        class="w-32"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"
        />
      </svg>
    </div>

    <div
      @click="handleBookConsult"
      class="fixed right-4 bottom-4 lg:right-2 lg:bottom-10 animate__animated animate__fadeIn animate__slower z-30"
    >
      <FilledButtonFixed
        background-color="black"
        text="BOOK NOW"
        text-color="white"
      />
    </div>
  </footer>
</template>

<style scoped>
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 4px;
  border: 1px solid #fff;
}

input[type="checkbox"]:checked {
  background-color: #523825;
  border-color: #000;
}

input[type="checkbox"]:checked::after {
  content: "";
  display: block;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-left: 6px;
  margin-top: 2px;
}
</style>
