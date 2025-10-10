<script setup>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
</script>

<template>
  <div
    id="testimonials"
    class=" bg-[#e7e7e7] py-28 px-4 lg:px-28 w-screen"
  >
    <div class="px-4 lg:px-20 text-center mb-12">
      <h4 class="tracking-wide text-5xl font-semibold">CLIENT SPOTLIGHT</h4>
      <p class="text-lg mt-2 font-medium tracking-widest">
        TRANSFORMATIONS WE ARE PROUD OF
      </p>
      <!-- <p
        class="text-md text-[#454545] mt-4 lg:max-w-screen-sm leading-relaxed lg:mx-auto"
      >
        We make creating your ideal outdoor space easy and enjoyable with our
        proven & easy 4-step design & build process:
      </p> -->
    </div>

    <div
      class="flex flex-wrap lg:flex-nowrap gap-8"
      data-aos="fade-in"
      data-aos-easing="linear"
    >
      <div class="h-full w-full">
        <ImgComparisonSlider class="h-full w-full rounded-2xl border-black">
          <!-- eslint-disable -->
          <img
            slot="first"
            style="
              width: 100%;
              object-fit: cover;
              object-position: center;
              height: 100%;
            "
            src="@/assets/images/testi1before.jpg"
          />
          <img
            slot="second"
            style="
              width: 100%;
              object-fit: cover;
              object-position: center;
              height: 100%;
            "
            src="@/assets/images/testi1after.jpg"
          />

          <svg
            slot="handle"
            class="w-6 lg:w-10"
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="35.5" cy="35.5" r="35.5" fill="white" />
            <path
              d="M51.1997 34.4899L49.2297 32.5199L46.0197 29.3099C45.3397 28.6399 44.1797 29.1199 44.1797 30.0799V36.3099V41.9199C44.1797 42.8799 45.3397 43.3599 46.0197 42.6799L51.1997 37.4999C52.0297 36.6799 52.0297 35.3199 51.1997 34.4899Z"
              fill="black"
            />
            <path
              d="M20.8003 34.4899L22.7703 32.5199L25.9803 29.3099C26.6603 28.6399 27.8203 29.1199 27.8203 30.0799V36.3099V41.9199C27.8203 42.8799 26.6603 43.3599 25.9803 42.6799L20.8003 37.4999C19.9703 36.6799 19.9703 35.3199 20.8003 34.4899Z"
              fill="black"
            />
          </svg>

          <!-- eslint-enable -->
        </ImgComparisonSlider>

        <footer class="mt-6 max-w-[90%]">
         <div class="flex items-center ">
          <IconStar v-for="i in 5" :key="i" class="w-8 h-8 text-yellow-500" />
         </div>
          <p class="text-sm pt-4 lg:text-md text-justify">
            "Honestly can't say enough good things about this company as we are
            SO THRILLED with the finished product. We hired them to demo and
            install all new pavers, grass turf and put in new drainage and the
            difference to our home's entrance way and side yard is truly night
            and day! I never thought I would be so excited about turf and cement
            until I saw what they could do."
          </p>

          <div class="mb-3 flex space-x-4 items-center mt-8">
            <div>
              <img src="@/assets/images/testimonial/rebecca.png" width="50" />
            </div>

            <div class="space-y-1">
              <p class="text-md font-medium">Rebecca</p>
              <p class="flex items-center space-x-1">
                <IconBadge class="w-5 h-5" />
                <span>Verified Customer</span>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <div class="h-full w-full">
        <ImgComparisonSlider class="h-full w-full rounded-2xl border-black">
          <!-- eslint-disable -->
          <img
            slot="first"
            style="
              width: 100%;
              object-fit: cover;
              object-position: center;
              height: 100%;
            "
            src="@/assets/images/testi2before.jpg"
          />
          <img
            slot="second"
            style="
              width: 100%;
              object-fit: cover;
              object-position: center;
              height: 100%;
            "
            src="@/assets/images/testi2after.jpg"
          />

          <svg
            slot="handle"
            class="w-6 lg:w-10"
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="35.5" cy="35.5" r="35.5" fill="white" />
            <path
              d="M51.1997 34.4899L49.2297 32.5199L46.0197 29.3099C45.3397 28.6399 44.1797 29.1199 44.1797 30.0799V36.3099V41.9199C44.1797 42.8799 45.3397 43.3599 46.0197 42.6799L51.1997 37.4999C52.0297 36.6799 52.0297 35.3199 51.1997 34.4899Z"
              fill="black"
            />
            <path
              d="M20.8003 34.4899L22.7703 32.5199L25.9803 29.3099C26.6603 28.6399 27.8203 29.1199 27.8203 30.0799V36.3099V41.9199C27.8203 42.8799 26.6603 43.3599 25.9803 42.6799L20.8003 37.4999C19.9703 36.6799 19.9703 35.3199 20.8003 34.4899Z"
              fill="black"
            />
          </svg>

          <!-- eslint-enable -->
        </ImgComparisonSlider>

        <footer class="mt-6 max-w-[90%]">
          <div class="flex items-center ">
          <IconStar v-for="i in 5" :key="i" class="w-8 h-8 text-yellow-500" />
         </div>
          <p class="text-sm pt-4 lg:text-md text-justify">
            "Stumbled across Modern Yardz while Googling landscapers in San
            Diego County. Immediately was drawn to them based on their reviews
            and the work portrayed on their website. Submitted a free
            consultation and was immediately contacted by Weston. On the day of
            the consultation, Weston reviewed a poorly drawn model of the
            project we wanted and he came up on the spot with certain revisions
            to the project."
          </p>

          <div class="mb-3 flex space-x-4 items-center mt-4">
            <div>
              <img src="@/assets/images/testimonial/rtorres.png" width="50" />
            </div>

            <div class="space-y-1">
              <p class="text-md font-medium">Ryan</p>
              <p class="flex items-center space-x-1">
                <IconBadge class="w-5 h-5" />
                <span>Verified Customer</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <div class="text-center">
      <NuxtLink to="/portfolio">
        <FilledButton
          :no-action="true"
          background-color="black"
          text="SEE OUR PORTFOLIO"
          text-color="white"
          class="w-[90%] lg:w-[200px] mt-16 font-semibold"
        />
      </NuxtLink>
    </div>
  </div>
</template>
