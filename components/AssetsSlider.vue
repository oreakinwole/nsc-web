<script setup>
import "vue3-carousel/dist/carousel.css";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});

const carousel = ref(null);

const next = () => carousel.value.next();
const prev = () => carousel.value.prev();
</script>

<template>
  <section class="pt-48 space-y-5 max-w-md">
    <p class="text-4xl font-medium  ">
      More
      <span class="text-new-gray   text-5xl uppercase">S </span
      >ervices
    </p>

    <p class="text-xs text-brown">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
      risus eget mauris malesuada porttitor quis sed odio.
    </p>
  </section>

  <div class="py-12">
    <Carousel ref="carousel" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 10" :key="slide">
        <!-- <div class="carousel__item">{{ slide }}</div> -->

        <!-- <img src="@/assets/images/flowerr__.png" /> -->

        <img src="/images/homesecondsegment/imgs/Renovation.svg" />
      </Slide>

      <template #addons>
        <div class="flex items-center pl-32 max-w-[1500px] overflow-hidden">
          <div class="w-4/5">
            <Pagination />
          </div>

          <div class="ml-14 pt-2 flex w-1/12 justify-between">
            <img
              src="@/assets/svg/left-caret.svg"
              width="15"
              role="button"
              @click="prev"
            />

            <img
              src="@/assets/svg/right-caret.svg"
              width="15"
              role="button"
              @click="next"
            />
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

/* .carousel__pagination {
  height: 5px;
  background: #A89C93
} */

.carousel__pagination-button::after {
  height: 1px;
  width: 14em;
  display: none;
}

.carousel__pagination-button--active::after {
  height: 1px;
  width: 14em;
  display: block;
  background: #a89c93;
}
</style>
