<script setup>
import image from '../../assets/img/admin-profile.png'
import bell from '../../assets/img/bell.png'
import gear from '../../assets/img/gear.png'
import bellDot from '../../assets/img/dot.png'

import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="p-4 sm:ml-72 bg-[#F3F4FF]">
    <header class="flex justify-between items-center px-8">
      <div class="flex items-center justify-start">
        <span
          class="font-bold font-['Poppins'] text-[#303972] text-center my-3 text-[30px] capitalize"
          >{{ router.currentRoute.value.name }}</span
        >
      </div>
      <form v-show="router.currentRoute.value.name === 'dashboard'" class="flex items-center">
        <div class="relative w-[300px] ml-72">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-[60px] text-gray-500 dark:text-gray-400"
              fill="#4D44B5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full placeholder:text-[#A098AE]"
            placeholder="Search here..."
            required
          />
        </div>
      </form>
      <div class="flex gap-4">
        <div class="flex gap-3">
          <div>
            <img
              :src="bellDot"
              class="absolute h-[6px] w-[6px] rounded-full bg-[#4D44B5] top-8 right-[259px]"
              alt="bell notification"
            />
            <img :src="bell" class="bg-white p-[10px] w-[50px] h-[50px] rounded-full" alt="Bell" />
          </div>
          <img :src="gear" class="bg-white p-[10px] w-[50px] h-[50px] rounded-full" alt="Gear" />
        </div>
        <div class="flex gap-2">
          <div class="flex flex-col items-center">
            <span class="text-[#303972]"> Azimov A. </span>
            <span class="text-[#A098AE]"> Admin </span>
          </div>
          <img :src="image" class="w-[45px] h-[45px] rounded-full bg-gray-600" alt="" />
        </div>
      </div>
    </header>
  </div>
</template>
<style scoped></style>
