<script>
import instagram from "/public/images/homelastsegment/icons/ant-design_instagram-filled.png";
import image1 from "public/images/homelastsegment/imgs/Image 1.png";
import image2 from "public/images/homelastsegment/imgs/Image 2.png";
import image3 from "public/images/homelastsegment/imgs/Image 3.png";
import image4 from "public/images/homelastsegment/imgs/Image 4.png";

export default {
  name: "HomeLastSegment",

  data() {
    return {
      instagram,
      image1,
      image2,
      image3,
      image4,
    };
  },
};
</script>

<template>
  <div class="hidden lg:block" id="socials">
    <div class="flex justify-between items-center lg:px-20">
      <p class="text-black font-semibold text-3xl">
        <span class="text-2xl">#</span>modernyardz
      </p>

      <div class="flex items-center gap-2 pr-1 cursor-pointer">
        <img :src="instagram" alt="instagram icon" class="w-[24px] h-[24px]" />
        <NuxtLink to="https://www.instagram.com/modern_yardz/">
          <p class="uppercase text-sm text-[#665244]">
            Follow us on instagram
          </p>
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-between gap-6 pt-10 lg:px-20">
      <div class="flex-1 rounded-xl overflow-hidden h-[300px]">
        <img
          src="@/assets/images/patio.png"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="flex-1 rounded-xl overflow-hidden h-[300px]">
        <img
          src="@/assets/images/gallery-pav1.png"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="flex-1 rounded-xl overflow-hidden h-[300px]">
        <img
          src="@/assets/images/purf.png"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="flex-1 rounded-xl overflow-hidden h-[300px]">
        <img
          src="@/assets/images/concrete.webp"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<!-- <style scoped>
@media (min-width: 1450px) {
  .pix {
    width: 367px;
    height: 392px;
  }
}

@media (max-width: 500px) {
  .ig {
    display: none;
  }
}
</style> -->
