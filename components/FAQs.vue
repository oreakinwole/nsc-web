<script setup>
const props = defineProps(["faqData"]);
const openIndex = ref(null);
const toggleFAQ = (index) => {
  openIndex.value = openIndex === index ? null : index;
};

// In mainEntity property dataArray is a Proxy array because of vue reactivity, so we are normalizing to clean array
props.faqData?.dataArray &&
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        
        "mainEntity": ${JSON.stringify(
          JSON.parse(JSON.stringify(props.faqData.dataArray))
        )}
      }`,
        tagPosition: "bodyClose",
      },
    ],
  });
</script>

<template>
  <div class="py-14 px-4 lg:px-20 bg-black text-white">
    <div class="mt-20 min-h-[720px] flex justify-between gap-10">
      <section class="flex-1 w-full">
        <h4
          class="text-5xl sm:text-left text-center tracking-wide font-semibold"
        >
          GOT QUESTIONS?
        </h4>

        <div class="text-white my-6 leading-loose">
          <p class="mt-1 font-light tracking-widest text-sm text-[#D9D9D9]">
            Frequently Asked Questions. Here are some common questions. Find the
            answers you're looking for below.
          </p>
        </div>

        <div class="space-y-2 mt-16">
          <div
            v-for="(faq, index) in faqData.dataArray.slice(0, 6)"
            :key="faq.question"
            class="overflow-hidden border-b-[.3px] border-[#414141]"
          >
            <button
              class="flex w-full space-x-2 items-center p-4"
              @click="toggleFAQ(index)"
            >
              <svg
                class="h-4 w-4"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 12.5H18.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 18.75V6.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="text-sm text-left font-semibold">{{
                faq.name
              }}</span>
            </button>
            <div
              :class="`text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 p-4' : 'max-h-0 p-0'
              }`"
            >
              {{ faq.acceptedAnswer.text }}
            </div>
          </div>
        </div>
      </section>

      <div
        class="hidden lg:block max-h-[700px] lg:max-w-[50%] w-full bg-blue-100 rounded-3xl"
      >
        <img
          src="https://ucarecdn.com/133fd044-a6ad-4994-b151-522479630cb4/Img.jpg"
          alt="team photo"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>

    <div class="hidden lg:block text-center mt-16">
      <FilledButton
        background-color="white"
        text="Book Your Free Consultation Today"
        text-color="black"
        class="uppercase w-[90%] font-semibold lg:w-[290px] mx-auto"
      />
    </div>
  </div>
</template>
