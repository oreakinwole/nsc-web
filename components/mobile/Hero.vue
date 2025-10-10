<script setup></script>

<template>
  <header id="mobile-hero" class="h-screen bg-gray-200 lg:hidden relative">
    <div
      class="bg-black text-white absolute top-0 left-0 h-full w-full opacity-50"
    ></div>

    <div class="text-white text-center absolute w-full bottom-[30%]">
      <div class="md:px-8">
        <p
          class=" text-4xl px-3 font-bold leading-tight tracking-normal animate__animated animate__fadeInUp"
        >
          San Diego’s Premier Design & Build Landscaping Experts
        </p>

        <p
          class="uppercase font-light text-lg mx-4 mt-6 leading-relaxed tracking-widest animate__animated animate__fadeInUp"
        >
          We transform outdoor spaces into stunning retreats with custom pools,
          patios, fire pits, and more. Let’s create your dream yard.
        </p>
      </div>

      <FilledButton
        background-color="white"
        text="Book Your Free Consultation Today"
        text-color="black"
        class="uppercase font-medium w-[95%] h-[58px] mt-10"
      />
    </div>

    <div
      class="lg:hidden bg-white bg-opacity-20 w-full h-[100px] absolute overflow-hidden bottom-0 left-0"
    >
      <NuxtMarquee class="w-full h-full overflow-hidden">
        <img
          src="@/assets/svg/partners.svg"
          class="w-full h-full object-cover"
        />
      </NuxtMarquee>
    </div>

    <!-- <div
        class="lg:hidden bg-white bg-opacity-20 h-[100px] flex justify-center items-center absolute bottom-0 left-0"
      >
        <img
          src="@/assets/svg/partners.svg"
          class="w-full h-full object-cover"
        />
      </div> -->

    <img
      class="w-full h-full object-cover"
      src="https://ucarecdn.com/18d3611c-5890-43ce-ae22-e1ee47901562/Group1000008999.jpg"
      alt="hero pic"
    />
  </header>
</template>
