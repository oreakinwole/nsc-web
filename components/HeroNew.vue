<template>
  <div class="relative">
    <div class="hidden lg:block bg-black h-[700px] relative">
   
      <img
          src="https://ucarecdn.com/18d3611c-5890-43ce-ae22-e1ee47901562/Group1000008999.jpg"
          class="w-full h-full object-cover"
        />
      
    </div>

    <MobileHero />

    <div
      class="bg-[#090908] hidden lg:block bg-opacity-50 h-[80px] w-full absolute bottom-0 overflow-hidden"
    >
      <NuxtMarquee class="w-full h-full overflow-hidden">
        <img
          src="@/assets/svg/partners.svg"
          class="w-full h-full object-cover"
        />
      </NuxtMarquee>
    </div>
  </div>

  <!-- <div class="pt-20">
    <p class="uppercase text-center font-medium tracking-widest text-lg">Our Partners</p>

    <div class="lg:mt-4">
      <NuxtMarquee class="max-w-[55em] mx-auto" :speed="20">
        <img src="@/assets/svg/partners.svg" width="900" class="mx-auto" />
      </NuxtMarquee>
    </div>
  </div> -->

  <div
    class="hidden lg:block bg-[#F8F6F2] px-2 md:px-8 py-24"
  >
    <div class="max-w-screen-lg space-y-4 mx-auto text-center text-black ">
      <h4
        class="tracking-wide uppercase text-4xl lg:text-5xl font-semibold mb-2"
      >
        San Diego’s Premier Design & Build Landscaping Experts
      </h4>

      <p class="text-xl mt-2 tracking-widest font-medium uppercase">
        Let’s create your dream yard
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
      text-color="white"
      class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
    />
  </div>
  </div>

 

  <ViewIntroduction />
  <!-- <ViewWhatWeDo /> -->
  <!-- <ViewWhyChooseUs /> -->
</template>
