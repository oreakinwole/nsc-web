<script setup>
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.to("#desing-p-mobile", {
//     x: -950,

//     scrollTrigger: {
//       trigger: "#desing-p-mobile",
//       pin: true,
//       scrub: true,
//       start: "bottom 50%",
//     },
//   });
// });
</script>

<template>
  <div id="design-process" class="mt-20 lg:mt-28 w-screen">
    <div
      class="lg:hidden px-2 md:px-8 lg:px-20 text-center mb-10"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <h4 class="   text-4xl lg:text-5xl font-semibold mb-2">
        Our Design Pro<span
          class="text-[#A89C93]   font-normal text-5xl lg:text-6xl"
          >C</span
        >ess
      </h4>

      <p class="text-xl">Simple Steps to Your Dream Yard</p>
      <p
        class="text-md text-[#454545] mt-4 lg:max-w-screen-sm leading-relaxed lg:mx-auto"
      >
        We make creating your ideal outdoor space easy and enjoyable with our
        proven & easy 4-step design & build process:
      </p>
    </div>

    <MobileDesignProcess />

    <!-- Write Your Code here -->
    <ProcDes />

    <!-- End here -->

    <footer class="lg:px-20 mt-14 text-center">
      <p class="text-[#454545] font-semibold mb-4 tracking-wide">Ready to Get Started?</p>
      <FilledButton
        background-color="black"
        text="Book Your Free Consultation Today"
        text-color="white"
        class="uppercase w-[90%] font-semibold lg:w-[290px]"
      />
    </footer>
  </div>
</template>

<style lang="css" scoped></style>
