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
  <div class="mt-20 lg:mt-28 lg:px-10 pb-10 w-screen md:mt-20 md:mb-20">
    <div
      class="px-2 md:px-8 lg:px-20 text-center mb-20"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <h4 class="text-4xl lg:text-5xl font-semibold mb-2">
        OUR DESIGN PROCESS
      </h4>

      <p class="text-xl">
        Simple Steps to Your Dream Yard, Here’s how it works:
      </p>
      <p
        class="text-lg text-[#454545] mt-4 lg:max-w-screen-sm leading-relaxed lg:mx-auto"
      >
        Creating the outdoor space you’ve always wanted is easier than you
        think. Our collaborative design process ensures that every step is clear
        and tailored to your needs, from the first meeting to the final
        installation.
      </p>
    </div>

    <!-- Start mobile view -->
    <div class="lg:hidden flex justify-center flex-wrap gap-2">
      <div
        class="rounded-lg flex flex-col justify-between w-[48%] h-[295px] border border-[#A89C93] px-1 pt-2 pb-1"
      >
        <main class="px-1">
          <div class="flex justify-between">
            <h3 class="flex flex-col font-bold text-md">
              Free Design Consultation
            </h3>
            <p class="pt-1 text-[#A89C93] text-xs">/01</p>
          </div>

          <p class="text-[#665244] text-sm mt-3">
            We start with a free consultation to discuss your vision and goals.
          </p>
        </main>

        <footer
          class="bg-gray-400 h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_1.webp')] bg-no-repeat bg-left-top bg-cover"
        ></footer>
      </div>

      <div
        class="rounded-lg flex flex-col justify-between w-[48%] h-[295px] border border-[#A89C93] px-1 pt-2 pb-1"
      >
        <main class="px-1">
          <div class="flex justify-between">
            <h3 class="flex flex-col font-bold text-md">2D Landscape Design</h3>
            <p class="pt-1 text-[#A89C93] text-xs">/02</p>
          </div>

          <p class="text-[#665244] text-sm mt-3">
            We create a 2D design plan that shows a clear, overhead view of your
            future landscape.
          </p>
        </main>

        <footer
          class="bg-gray-400 h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_2.webp')] bg-no-repeat bg-center bg-cover"
        ></footer>
      </div>

      <div
        class="rounded-lg flex flex-col justify-between w-[48%] h-[295px] border border-[#A89C93] px-1 pt-2 pb-1"
      >
        <main class="px-1">
          <div class="flex justify-between">
            <h3 class="flex flex-col font-bold text-md">
              3D Design Renderings
            </h3>
            <p class="pt-1 text-[#A89C93] text-xs">/03</p>
          </div>

          <p class="text-[#665244] text-sm mt-3">
            We take it a step further by transforming the 2D plan into a
            realistic 3D rendering.
          </p>
        </main>

        <footer
          class="bg-gray-400 h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_3.webp')] bg-no-repeat bg-center bg-cover"
        ></footer>
      </div>

      <div
        class="rounded-lg flex flex-col justify-between w-[48%] h-[295px] border border-[#A89C93] px-1 pt-2 pb-1"
      >
        <main class="px-1">
          <div class="flex justify-between">
            <h3 class="flex flex-col font-bold text-md">Comprehensive Quote</h3>
            <p class="pt-1 text-[#A89C93] text-xs">/04</p>
          </div>

          <p class="text-[#665244] text-sm mt-3">
            Once the design is finalized, we provide a detailed, itemized quote.
          </p>
        </main>

        <footer
          class="h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_4.webp')] bg-no-repeat bg-top bg-cover"
        ></footer>
      </div>
    </div>
    <!-- End mobile view -->

    <!-- Desktop view -->
    <div class="hidden lg:flex flex-col justify-center items-center">
      <!-- upper container -->
      <div class="flex">
        <div
          class="rounded-t-lg rounded-bl-lg flex flex-col justify-between w-[300px] h-[295px] lg:w-[300px] border border-[#A89C93] px-1 pt-2 pb-1"
        >
          <main class="px-1">
            <div class="flex justify-between">
              <h3 class="flex flex-col font-bold text-md">
                Free Design Consultation
              </h3>
              <p class="pt-1 text-[#A89C93] text-xs">/01</p>
            </div>

            <p class="text-[#665244] text-sm mt-3">
              We start with a free consultation to discuss your vision and
              goals.
            </p>
          </main>

          <footer
            class="bg-gray-400 h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_1.webp')] bg-no-repeat bg-left-top bg-cover"
          ></footer>
        </div>

        <div class="w-[300px] h-[295px] lg:w-[300px]"></div>

        <div
          class="rounded-t-lg flex flex-col justify-between w-[300px] h-[295px] lg:w-[300px] border border-[#A89C93] px-1 pt-2 pb-1"
        >
          <main class="px-1">
            <div class="flex justify-between">
              <h3 class="flex flex-col font-bold text-md">
                3D Design Renderings
              </h3>
              <p class="pt-1 text-[#A89C93] text-xs">/03</p>
            </div>

            <p class="text-[#665244] text-sm mt-3">
              We take it a step further by transforming the 2D plan into a
              realistic 3D rendering.
            </p>
          </main>

          <footer
            class="bg-gray-400 h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_3.webp')] bg-no-repeat bg-center bg-cover"
          ></footer>
        </div>

        <div class="w-[300px] h-[295px] lg:w-[300px]"></div>
      </div>

      <!-- lower container -->
      <div class="flex -mt-[1px]">
        <div class="w-[300px] h-[295px] lg:w-[300px]"></div>

        <div
          class="rounded-b-lg flex flex-col justify-between w-[300px] h-[295px] lg:w-[300px] border border-[#A89C93] px-1 pt-2 pb-1"
        >
          <main class="px-1">
            <div class="flex justify-between">
              <h3 class="flex flex-col font-bold text-md">
                2D Landscape Design
              </h3>
              <p class="pt-1 text-[#A89C93] text-xs">/02</p>
            </div>

            <p class="text-[#665244] text-sm mt-3">
              We create a 2D design plan that shows a clear, overhead view of
              your future landscape.
            </p>
          </main>

          <footer
            class="bg-gray-400 h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_2.webp')] bg-no-repeat bg-center bg-cover"
          ></footer>
        </div>

        <div class="w-[300px] h-[295px] lg:w-[300px]"></div>

        <div
          class="rounded-b-lg flex flex-col justify-between w-[300px] h-[295px] lg:w-[300px] border border-[#A89C93] px-1 pt-2 pb-1"
        >
          <main class="px-1">
            <div class="flex justify-between">
              <h3 class="flex flex-col font-bold text-md">
                Comprehensive Quote
              </h3>
              <p class="pt-1 text-[#A89C93] text-xs">/04</p>
            </div>

            <p class="text-[#665244] text-sm mt-3">
              Once the design is finalized, we provide a detailed, itemized
              quote.
            </p>
          </main>

          <footer
            class="h-3/5 rounded-t-lg bg-[url('@/assets/images/designp_4.webp')] bg-no-repeat bg-top bg-cover"
          ></footer>
        </div>
      </div>
    </div>

    <footer class="lg:px-20 mt-14 text-center">
      <p class="text-[#454545] font-semibold mb-4">Ready to Get Started?</p>
      <FilledButton
        background-color="black"
        text="Design Your Dream Yard"
        text-color="white"
        class="uppercase w-[90%] font-semibold lg:w-[290px]"
      />
    </footer>
  </div>
</template>
