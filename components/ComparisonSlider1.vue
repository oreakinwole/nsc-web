<script>
import image1 from "public/images/homethirdsegment/imgs/img(1).png";
import bg from "public/images/homethirdsegment/icons/bg.png";
import before from "public/images/homethirdsegment/imgs/image 28.svg";
import after from "public/images/homethirdsegment/imgs/after.svg";
import arrow from "public/images/homethirdsegment/icons/arrow.svg";
import customerpicture from "public/images/homethirdsegment/imgs/img.svg";
import circle from "public/images/homethirdsegment/icons/cir.svg";

export default {
  name: "HomeThirdSegment",
  data() {
    return {
      image1,
      bg,
      before,
      after,
      arrow,
      customerpicture,
      circle,
      sliderPosition: 50,
    };
  },
  mounted() {
    this.initSlider();
  },
  methods: {
    initSlider() {
      const slider = this.$el.querySelector(".slider-handle");
      const beforeImage = this.$el.querySelector(".before-image");
      const afterImage = this.$el.querySelector(".after-image");
      const sliderLine = this.$el.querySelector(".slider-line");

      const onMouseMove = (e) => {
        const rect = this.$el
          .querySelector(".comparison-slider")
          .getBoundingClientRect();
        let position = ((e.clientX - rect.left) / rect.width) * 100;
        position = Math.max(0, Math.min(position, 100));
        this.sliderPosition = position;

        beforeImage.style.clipPath = `inset(0 ${
          100 - this.sliderPosition
        }% 0 0)`;
        afterImage.style.clipPath = `inset(0 0 0 ${this.sliderPosition}%)`;
        slider.style.left = `${this.sliderPosition}%`;
        sliderLine.style.left = `${this.sliderPosition}%`;
      };

      const onMouseDown = () => {
        window.addEventListener("mousemove", onMouseMove);
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
      };

      slider.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);

      this.$nextTick(() => {
        slider.style.left = `${this.sliderPosition}%`;
        sliderLine.style.left = `${this.sliderPosition}%`;
      });
    },
  },
};
</script>

<template>
  <!--       Image Comparison Slider-->
  <div
    class="comparison-slider w-[1500px] h-[850px] mb-[10rem] mt-[5rem] relative border-[1rem] border-black rounded-[40px] shadow-custom-dark bg-black bg-[linear-gradient(to_right,_silver_98%,_transparent_50%,_transparent_98%,_silver_98%)]"
  >
    <div class="comparison-images absolute inset-0 w-full h-full p-6">
      <img
        :src="before"
        alt="before image"
        class="comparison-img before-image absolute inset-0 h-full object-cover"
      />
      <img
        :src="after"
        alt="after image"
        class="comparison-img after-image absolute inset-0 h-full object-cover"
      />
    </div>

    <div
      class="bg-white w-[823px] h-[80px] rounded-[50px] absolute top-[40rem] ml-[20%] z-10 p-3 flex gap-5 flex-row"
    >
      <div class="flex flex-row ml-12">
        <div class="absolute">
          <img :src="customerpicture" alt="customer picture" />
        </div>

        <div class="relative ml-[-47px]">
          <img :src="circle" alt="circle" />
        </div>
      </div>

      <div class="pt-1 ml-10">
        <h4 class="  font-[500] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          luctus tem.
        </h4>
        <h4 class="  text-[#A89C93] text-[18px]">
          Nicole, Home Owner
        </h4>
      </div>
    </div>

    <!-- Slider Line -->
    <div
      class="slider-line absolute top-0 bottom-0"
      :style="{ left: sliderPosition + '%' }"
    ></div>

    <!-- Slider Handle -->
    <div
      class="slider-handle absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
      :style="{ left: sliderPosition + '%' }"
    >
      <img :src="arrow" alt="arrow image" class="w-[71px] h-[71px]" />
    </div>
  </div>
</template>

<style scoped>
.comparison-slider {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.comparison-images {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.comparison-img {
  transition: clip-path 0.4s ease;
}

.before-image {
  clip-path: inset(0 50% 0 0);
}

.after-image {
  clip-path: inset(0 0 0 50%);
}

.slider-line {
  width: 4px;
  background-color: #a89c93;
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 2;
}

.slider-handle {
  z-index: 3;
  width: 71px;
  height: 71px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  cursor: pointer;
  position: absolute;
}
</style>
