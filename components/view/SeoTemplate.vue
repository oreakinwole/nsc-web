<script setup>
const showMore = ref(false);
defineProps(["captImage", "title", "paragraph", "content", "moreContent"]);
</script>

<template>
  <div class="lg:px-20">
    <section class="flex flex-wrap gap-10 py-10">
      <div class="flex-1 min-w-[400px]">
        <img
          v-if="captImage"
          :src="captImage"
          class="h-full w-full bg-gray-200 object-cover"
        />
      </div>

      <div class="flex-1 space-y-5 px-4">
        <p class="  text-5xl font-medium">
          {{ title }}
        </p>
        <div class="text-brown text-sm max-w-lg" v-html="paragraph" />

        <br />

        <FilledButton
          background-color="black"
          text="TRANSFORM YOUR YARD"
          text-color="white "
          class="w-full"
        />
      </div>
    </section>
  </div>

  <ViewDesignProcessOld />
  <!-- <ViewBeforeAndAfter /> -->
  <ViewTestimonial />

  <section class="lg:max-w-screen-md space-y-4 mx-auto py-32 px-4">
    <h2 class="mb-8 font-bold uppercase">{{ title }}</h2>

    <div class="leading-8 text-[#665244]" v-html="content" />

    <p role="button" @click="showMore = !showMore" class="text-sm text-center">
      {{ showMore ? "Collapse " : "Read More ..." }}
    </p>

    <div
      v-show="showMore"
      class="leading-8 text-[#665244]"
      v-html="moreContent"
    />
  </section>
</template>

<style></style>
