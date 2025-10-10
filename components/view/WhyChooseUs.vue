<script setup>
const whyUs = [
  {
    title: "Decades of Experience:",
    descr:
      "With 40+ years in the industry, we’ve honed the art of landscape design and construction.",
  },
  {
    title: "Local Roots",
    descr:
      "As San Diego locals, we understand the area’s unique landscape and design needs.",
  },
  {
    title: "Custom Approach",
    descr: "Every project is tailored to your vision, preferences, and budget.",
  },
  {
    title: "Full-Service Excellence",
    descr:
      "From design to build, we handle every detail, ensuring a seamless experience.",
  },
];
</script>

<template>
  <section class="py-14 px-4 lg:px-20 bg-black text-white">
    <div class="md:mt-20 flex justify-between lg:flex-row flex-col-reverse gap-10">
      <div class="flex-1 w-full" data-aos="fade-up" data-aos-easing="linear">
        <h4 class="text-5xl tracking-wide font-semibold">
          WHY CHOOSE MODERN YARDZ?
        </h4>

        <div class="text-white my-6 leading-loose">
          <div class="font-bold tracking-widest text-lg text-[#D0C2B0]">
            YOUR VISION. OUR EXPERTISE.
          </div>

          <p class="mt-1 font-light tracking-widest text-md text-[#D9D9D9]">
            Modern Yardz is a cut above the rest. We’ve built our reputation on
            delivering high-quality outdoor spaces that transform homes and
            elevate lifestyles. Here’s what sets us apart:
          </p>
        </div>

        <div class="mt-8 space-y-5">
          <div v-for="item in whyUs" :key="item.title">
            <header class="flex space-x-4 items-center">
              <svg
                class="w-4 text-white"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1349 19.241L20.4162 19.6473C20.0308 19.741 19.7287 20.0327 19.6453 20.4181L19.2808 21.9493C19.0828 22.7827 18.0203 23.0431 17.4683 22.3868L14.3537 18.8035C14.1037 18.5118 14.2391 18.0535 14.6141 17.9597C16.4578 17.5118 18.1141 16.4806 19.3328 15.0118C19.5308 14.7723 19.8849 14.741 20.1037 14.9597L22.4162 17.2722C23.2078 18.0639 22.9266 19.0535 22.1349 19.241Z"
                  fill="white"
                />
                <path
                  d="M2.81523 19.241L4.53398 19.6473C4.9194 19.741 5.22148 20.0327 5.30482 20.4181L5.6694 21.9493C5.86732 22.7827 6.92982 23.0431 7.4819 22.3868L10.5965 18.8035C10.8465 18.5118 10.7111 18.0535 10.3361 17.9597C8.49232 17.5118 6.83607 16.4806 5.61732 15.0118C5.4194 14.7723 5.06523 14.741 4.84648 14.9597L2.53398 17.2722C1.74232 18.0639 2.02357 19.0535 2.81523 19.241Z"
                  fill="white"
                />
                <path
                  d="M12.5026 2.08203C8.47135 2.08203 5.21094 5.34245 5.21094 9.3737C5.21094 10.8841 5.65885 12.2695 6.42969 13.4258C7.55469 15.0924 9.33594 16.2695 11.4089 16.5716C11.763 16.6341 12.1276 16.6654 12.5026 16.6654C12.8776 16.6654 13.2422 16.6341 13.5964 16.5716C15.6693 16.2695 17.4505 15.0924 18.5755 13.4258C19.3464 12.2695 19.7943 10.8841 19.7943 9.3737C19.7943 5.34245 16.5339 2.08203 12.5026 2.08203ZM15.6901 9.14453L14.8255 10.0091C14.6797 10.1549 14.5964 10.4362 14.6484 10.6445L14.8984 11.7174C15.0964 12.5612 14.6484 12.8945 13.8984 12.4466L12.8568 11.832C12.6693 11.7174 12.3568 11.7174 12.1693 11.832L11.1276 12.4466C10.3776 12.8841 9.92969 12.5612 10.1276 11.7174L10.3776 10.6445C10.4193 10.4466 10.3464 10.1549 10.2005 10.0091L9.3151 9.14453C8.80469 8.63411 8.97135 8.1237 9.67969 8.00911L10.7943 7.82161C10.9818 7.79036 11.2005 7.6237 11.2839 7.45703L11.8984 6.22786C12.2318 5.5612 12.7734 5.5612 13.1068 6.22786L13.7214 7.45703C13.8047 7.6237 14.0234 7.79036 14.2214 7.82161L15.3359 8.00911C16.0339 8.1237 16.2005 8.63411 15.6901 9.14453Z"
                  fill="white"
                />
              </svg>

              <p class="font-normal text-sm tracking-widest text-white">
                {{ item.title }}
              </p>
            </header>
            <p
              class="mt-3 font-light text-xs max-w-96 tracking-widest text-[#D9D9D9]"
            >
              {{ item.descr }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="md:h-[700px] h-[300px] lg:max-w-[50%] w-full bg-blue-100 rounded-3xl"
      >
        <img
          src="@/assets/images/teamphoto.jpeg"
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
  </section>
</template>
