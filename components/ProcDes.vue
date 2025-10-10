<script setup>
import pr1Img from "@/assets/images/designp_1.webp";
import pr2Img from "@/assets/images/designp_2.webp";
import pr3Img from "@/assets/images/designp_3.webp";
import pr4Img from "@/assets/images/designp_4.webp";

const dProcesses = [
  {
    title: "Free Design Consultation",
    descr:
      "We visit your home to discuss your goals, measure the space, and capture photos for reference.",
    img: pr1Img,
  },
  {
    title: "2D & 3D Designs",
    descr:
      "We create a detailed 2D layout and ultra-realistic 3D renderings so you can visualize your new yard.",
    img: pr2Img,
  },
  {
    title: "Detailed Quote",
    descr:
      "You’ll receive an itemized quote with a clear breakdown of costs and scope of work.",
    img: pr4Img,
  },
  {
    title: "Build & Transform",
    descr:
      "Our expert team brings the design to life with precision and care, ensuring every detail exceeds expectations.",
    img: pr3Img,
  },
];

// onMounted(() => {
//   autoAnimate(autoAniSection.value, { duration: 300 });
// });

const isViewing = ref(0);
const autoAniSection = ref();

const handleNext = () => {
  // Move to the next item or loop back to the start
  isViewing.value = (isViewing.value + 1) % dProcesses.length;
};

const handlePrev = () => {
  // Move to the previous item or loop back to the end
  isViewing.value =
    (isViewing.value - 1 + dProcesses.length) % dProcesses.length;
};
</script>

<template>
  <!--our portfolio -->
  <div class="hidden lg:block relative pt-20 pb-32 px-28 bg-black text-white">
    <div
      class="px-2 md:px-8 lg:px-20 text-center text-white mb-10"
      data-aos="fade-up"
      data-aos-easing="linear"
    >
      <h4 class="  tracking-wide text-4xl lg:text-5xl font-semibold mb-2">
        Our Design Pro<span
          class="text-[#A89C93]   font-normal text-5xl lg:text-6xl"
          >C</span
        >ess
      </h4>

      <p class="text-xl tracking-widest">
        Simple Steps to Your Dream Yard
      </p>
      <p
        class="text-md tracking-widest text-[#9e9e9e] mt-4 lg:max-w-screen-xs leading-relaxed lg:mx-auto"
      >
      We make creating your ideal outdoor space easy and enjoyable with our
      proven & easy 4-step design & build process:
      </p>
    </div>
    <div class="flex justify-between font-thin text-xl mb-2">
      <p role="button" @click="handleNext">Next</p>
      <p role="button" @click="handlePrev">Prev</p>
    </div>

    <div
      class="h-[500px] relative pt-8 bg-gray-900 bg-no-repeat bg-center bg-cover bg-opacity-50 bg-blend-overlay"
      :style="{ backgroundImage: `url(${dProcesses[isViewing].img})` }"
    >
      <h3
        class="max-w-[400px]  uppercase tracking-widest mx-auto text-center text-white font-light text-md mb-[-7rem]"
      >
        {{ dProcesses[isViewing].descr }}
      </h3>
    </div>

    <h4
      class="max-w-96 uppercase  absolute bottom-10 text-center left-[36%] text-white font-[700] text-5xl leading-relaxed tracking-wider"
    >
      {{ dProcesses[isViewing].title }}
    </h4>
  </div>
</template>
