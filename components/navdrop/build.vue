<script setup></script>

<template>
  <div
    class="absolute -left-[20rem] top-14 z-10 mt-[1px] w-[71rem] origin-top-right border border-black border-t-0 border-opacity-20 rounded-bl-[25px] rounded-br-[25px] shadow-custom-light space-y-4 more-dropdown"
  >
    <!-- Dropdown content -->
    <div class="py-1 flex items-center gap-8 px-10 mb-2">
      <!-- first container -->
      <NuxtLink to="/services/landscape-sandiego">
        <button
          @click="toggleDropdown"
          class="transition-all duration-1000 animate__animated animate__flipInX block w-full text-left px-4 py-2 border-[.5px] h-[200px] overflow-hidden rounded-[25px] group"
        >
          <div class="ml-3 group-hover:text-white">
            <p class="font-[600] text-[16px]">Landscape Design SD</p>
            <!-- <p
                      class="text-[14px] text-[#A89C93] mt-1 group-hover:text-white"
                    >
                      San Diego, a city renowned for its stunning landscapes and
                      vibrant outdoor life.
                    </p> -->
          </div>
          <div
            class="w-[200px] h-[104px] mt-10 ml-20 bg-[#A89C93] rounded-tl-[20px] rounded-tr-[20px] custom-cursor-button"
          >
            <img
              src="/images/navbar/imgs/Mask group(4).png"
              alt="first image"
              class=""
            />
          </div>
        </button>
      </NuxtLink>
      <!-- second container -->
      <NuxtLink to="/services/pavers-san-diego">
        <button
          @click="toggleDropdown"
          class="transition-all duration-1000 animate__animated animate__flipInX block w-full text-left px-4 py-2 border-[.5px] h-[200px] overflow-hidden rounded-[25px] group hover:bg-black"
        >
          <div class="ml-3 group-hover:text-white">
            <p class="font-[600] text-[16px] group-hover:text-white">
              Pavers San Diego
            </p>
            <!-- <p
                      class="text-[14px] text-[#A89C93] mt-1 group-hover:text-white"
                    >
                      Interlocking concrete pavers, a top choice for enhancing
                      outdoor areas.
                    </p> -->
          </div>
          <div
            class="w-[200px] h-[104px] mt-10 ml-20 bg-[#665244] rounded-tl-[20px] rounded-tr-[20px] inner-cont"
          >
            <img
              src="/images/navbar/imgs/img.jpg"
              alt="second image"
              class="cursor-custom-cursor"
            />
          </div>
        </button>
      </NuxtLink>
      <!-- third container -->
      <div class="block w-full text-left overflow-hidden rounded-[25px]">
        <div class="">
          <div class="flex flex-row justify-between px-6 ml-[-18px]">
            <div class="flex flex-col gap-3 pt-3">
              <h4 class="font-[600] text-[14px]">More Services</h4>

              <NuxtLink to="/services/pools-and-spas">
                <p class="text-[13px] hover:underline" @click="toggleDropdown">
                  Pools and Spas
                </p>
              </NuxtLink>

              <NuxtLink to="/services/outdoor-kitchens">
                <p class="text-[13px] hover:underline" @click="toggleDropdown">
                  Outdoor Kitchens
                </p>
              </NuxtLink>

              <NuxtLink to="/services/concrete-sd">
                <p class="text-[13px] hover:underline" @click="toggleDropdown">
                  Concrete San Diego
                </p>
              </NuxtLink>

              <NuxtLink to="/services/artificial-turf">
                <p class="text-[13px] hover:underline" @click="toggleDropdown">
                  Artificial Turf San Diego
                </p>
              </NuxtLink>

              <NuxtLink to="/services/patios-and-pergolas">
                <p class="text-[13px] hover:underline" @click="toggleDropdown">
                  Patio Covers and Pergolas
                </p>
              </NuxtLink>
            </div>

            <div class="mt-[70px]">
              <NuxtLink to="/services">
                <img
                  @click="toggleDropdown"
                  role="button"
                  src="/images/navbar/icons/See all button.png"
                  alt="arrow"
                  class="h-[65px] w-[65px]"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
