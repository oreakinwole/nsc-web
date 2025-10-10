<script setup>
const galleryData = ref([
  "https://www.modernyardz.com/cdn/shop/files/1.webp?v=1708357679&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/28.webp?v=1708357682&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/3.webp?v=1708357679&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/4.webp?v=1708357682&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/5.webp?v=1708357681&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/6.webp?v=1708357680&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/7_e4a6ed7e-a0ae-49fd-9ece-752fae0ffbaf.webp?v=1708357917&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/8.webp?v=1708357681&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/9.webp?v=1708357680&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/10.webp?v=1708357679&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/11.webp?v=1708357680&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/12.webp?v=1708357679&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/13.webp?v=1708357681&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/14.webp?v=1708357681&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/15.webp?v=1708357679&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/16.webp?v=1708357681&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/17.webp?v=1708357679&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/18.webp?v=1708357679&width=3000",
  "https://www.modernyardz.com/cdn/shop/files/20.webp?v=1708357678&width=3000",
]);
</script>

<template>
  <div class="mt-28 px-4 lg:px-20 bg-green-50">
    <div class="flex flex-wrap justify-between">
      <section class="max-w-lg">
        <h4 class=" mt-8 text-5xl tracking-wide font-semibold">
          How Modernyardz<br />
          Works
        </h4>

        <div class="text-black my-6 space-y-8 leading-loose">
          <p>
            Owner Thomas Jackson breaks down the Modern Yardz Design process.
          </p>

          <div>
            <h3 class="font-bold">Thomas Jackson</h3>
            <p>Design Director & Owner, Modernyardz.</p>
          </div>
          <!-- <ul
            class="list-disc list-inside mt-1 font-light tracking-widest text-md text-[#454545]"
          >
            <li>Daily project check in with project manager</li>
            <li>Inspections with city officials</li>
            <li>Coordination with all trades</li>
          </ul> -->
        </div>
      </section>

      <div class=" h-[500px] xl:w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="@/assets/images/Screenshot_owner.png"
          alt="step 1"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>
  <div class="pt-14 px-4 lg:px-20">
    <div class="flex flex-row-reverse justify-between">
      <section class="max-w-lg">
        <h4 class="mt-8 xl:text-5xl tracking-wide font-semibold">
          Step 1: Free Design Consultation
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            We start with a free consultation to discuss your vision and goals.
          </p>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.wpenginepowered.com/wp-content/uploads/2024/10/Step-1.png"
          alt="step 1"
          class="w-full h-full object-fill rounded-3xl"
        />
      </div>
    </div>
  </div>

  <div class="px-4 lg:px-20">
    <div class="mt-12 flex justify-between">
      <section class="max-w-lg">
        <h4 class="xl:text-5xl tracking-wide font-semibold">
          Step 2: 2D Landscape Design
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            We create a 2D design plan that shows a clear, overhead view of your
            future landscape.
          </p>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.wpenginepowered.com/wp-content/uploads/2024/10/Step-2.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>

  <!-- step 3 -->

  <div class="px-4 lg:px-20">
    <div class="mt-12 flex flex-row-reverse justify-between">
      <section class="max-w-lg">
        <h4 class=" mt-8 xl:text-5xl tracking-wide font-semibold">
          Step 3: 3D Design Renderings
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            We take it a step further by transforming the 2D plan into a
            realistic 3D rendering.
          </p>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.wpenginepowered.com/wp-content/uploads/2024/10/Step-1.png"
          alt="step 1"
          class="w-full h-full object-fill rounded-3xl"
        />
      </div>
    </div>
  </div>

  <div class="px-4 lg:px-20 pb-20">
    <div class="mt-12 flex justify-between">
      <section class="max-w-lg">
        <h4 class="xl:text-5xl tracking-wide font-semibold">
          Step 4: Com-<br />prehensive Quote
        </h4>

        <div class="text-black my-6 space-y-4 leading-loose">
          <p class="mt-1 font-light tracking-widest text-md text-[#454545]">
            Once the design is finalized, we provide a detailed, itemized quote.
          </p>
        </div>
      </section>

      <div class="hidden lg:block h-[500px] w-1/2 bg-blue-100 rounded-3xl">
        <img
          src="https://yardzen.wpenginepowered.com/wp-content/uploads/2024/10/Step-2.png"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
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

 

  <!-- 
  <p class="  text-4xl text-center font-medium mt-28">
    <span class="text-new-gray   text-5xl">P </span>rojects we have
    worked on
  </p>

  <div
    class="grid grid-cols-2 lg:grid-cols-3 pt-8 gap-2 lg:gap-8 px-4 lg:px-14"
    ref="autoAniSection"
    id="all-gallery-view"
  >
    <div
      v-for="imagey in galleryData"
      :key="imagey"
      class="bg-gray-100 h-[200px] lg:h-[400px] lg:flex-1 rounded-2xl overflow-hidden"
    >
      <img :src="imagey" class="h-full w-full object-cover" />
    </div>
  </div> -->
</template>
