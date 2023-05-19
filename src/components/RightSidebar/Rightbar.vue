<script setup>
import whatsapp from '../../assets/img/whatsapp_2-sixteen_nine.webp'
import image from '../../assets/img/admin-profile.png'
import bell from '../../assets/img/bell.png'
import gear from '../../assets/img/gear.png'
import bellDot from '../../assets/img/dot.png'

</script>
<template>
  <div
    class="fixed right-0 top-0 bg-white h-[100vh] text-[#303972] w-80 py-7 px-5 overflow-x-hidden flex whitespace-nowrap overflow-auto scrollbar-hide md:scrollbar-default"
  >
    <div class="list-none mt-2 px-2">
      <div class="flex items-center gap-7">
        <div class="flex gap-2">
          <div>
            <img
              :src="bellDot"
              class="absolute h-[6px] w-[6px] rounded-full bg-[#4D44B5] top-10 right-[240px]"
              alt="bell notification"
            />
            <img :src="bell" class="bg-white hover:scale-110 p-[10px] w-[50px] h-[50px] rounded-full" alt="Bell" />
          </div>
          <img :src="gear" class="bg-white hover:scale-110 p-[10px] w-[50px] h-[50px] rounded-full" alt="Gear" />
        </div>
        <div class="flex gap-2">
          <div class="flex flex-col items-center">
            <span class="text-[#303972]"> Azimov A. </span>
            <span class="text-[#A098AE]"> Admin </span>
          </div>
          <img :src="image" class="w-[45px] h-[45px] object-cover  rounded-full bg-gray-600" alt="" />
        </div>
      </div>
      <div class="my-5 text-2xl w-[263px] text-main-color flex justify-between items-center">
        <span class="font-bold">Guruhlar</span>
        <span
          class="p-3 bg-main-bg text-white rounded-full h-[45px] flex items-center justify-between cursor-pointer"
        >
          <i class="bx bx-plus rounded-full p-3 text-lg font-['Cairo'] font-bold h-[40px] items-center flex bg-[#4D44B5]"></i
        ></span>
      </div>
      <div v-for="el in 5" class="mb-3 text-main-color flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img :src="whatsapp" class="w-[50px] h-[50px] rounded-full object-cover" />
          <div class="text-sm">
            <span class="block">Dasturi injinering </span>
            <span class="text-gray-400"> Class VII A</span>
          </div>
        </div>
        <span
          class="text-lg p-3 py-5 rounded-full h-[40px] flex items-center justify-center cursor-pointer border-2 border-gray-500 text-gray-500 hover:bg-[#4D44B5] hover:border-none hover:text-white"
        >
          <i class="bx bx-envelope"></i>
        </span>
      </div>
      <button
        class="bg-gray-200 w-full text-center p-4 rounded-full my-4 hover:bg-gray-300 font-semibold text-main-color"
      >
        Barchasi
      </button>

      <div class="mb-5 text-2xl text-main-color flex justify-between items-center py-2">
        <span class="font-bold">Xabarlar</span>
      </div>
      <div v-for="el in 4" class="mb-3 text-main-color flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img :src="whatsapp" class="w-[50px] h-[50px] rounded-full object-cover" />
          <div class="text-sm">
            <span class="block">Dasturi injinering </span>
            <span class="text-gray-400"> Class VII A</span>
          </div>
        </div>
        <span
          class="text-lg p-3 py-5 rounded-full h-[40px] flex items-center justify-center cursor-pointer border-2 border-gray-500 text-gray-500 hover:bg-main-bg hover:text-white"
        >
          <i class="bx bx-envelope"></i>
        </span>
      </div>

      <button
        class="bg-gray-200 w-full text-center p-4 rounded-full my-4 hover:bg-gray-300 font-semibold text-main-color"
      >
        Barchasi
      </button>
    </div>
  </div>
</template>
<style scop></style>
