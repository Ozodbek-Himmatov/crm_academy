<script setup>
import image from '../../assets/img/admin-profile.png'

import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router);
</script>

<template>
  <div>
    <header class="flex justify-between items-center">
      <div class="flex items-center justify-start">
        <span class="font-bold font-['Poppins'] text-[#303972] text-center my-3 text-[30px] capitalize ">{{
          router.currentRoute.value.name
        }}</span>
      </div>
      <div class="flex gap-4">
        <div class="flex gap-3">
          <i class="bx bx-bell text-[30px] bg-white p-2 rounded-full text-[#A098AE]"></i>
          <i class="bx bx-cog text-[30px] bg-white p-2 rounded-full text-[#A098AE]"></i>
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
