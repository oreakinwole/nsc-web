<script setup>
defineProps(["text", "backgroundColor", "textColor", "noAction", "width"]);

const handleBookConsult = () => {
  // const calendly = useCalendly();

  // calendly.initPopupWidget({
  //   url: "https://calendly.com/d/2sx-n9t-6g7",
  // });
};
</script>

<template>
  <button
    @click="noAction ? null : handleBookConsult()"
    class="relative lg:w-[200px] w-[80%] md:w-[30rem] h-[50px] overflow-hidden rounded-xl px-4 py-2"
    :style="{
      backgroundColor: backgroundColor,
      color: textColor,
      width: width,
    }"
  >
    <span
      class="relative z-10 transition-colors duration-[0.5s] ease-out text-xs"
      >{{ text }}</span
    >
    <span class="absolute inset-0 bg-white"></span>
  </button>
</template>

<style scoped>
button {
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
}

button span:first-child {
  z-index: 10;
  position: relative;
  transition: color 0.8s ease-in-out;
}

button span:last-child {
  z-index: 5;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  transform: translateX(-100%);
  transition: none;
}

button:hover span:last-child {
  animation: slide 0.8s ease-in-out forwards;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  45% {
    transform: translateX(0%);
  }
  55% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

button:hover span:first-child {
  animation: color-change 1s ease-in-out forwards;
}

@keyframes color-change {
  0%,
  100% {
    color: inherit;
  }
  45%,
  55% {
    color: black;
  }
}
</style>
