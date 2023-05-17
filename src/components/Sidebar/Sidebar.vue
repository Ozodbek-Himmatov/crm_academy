<script setup>
import { ref } from 'vue'
import { navLinks } from '../../constants/navLinks'

const navlink = ref(navLinks)
console.log(navlink)
</script>

<template>
  <div>
    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-[300px]  h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#4D44B5]"
      aria-label="Sidebar"
    >
      <div class="flex justify-center items-center gap-3 py-4 ">
        <img src="../../assets/logo.png" alt="">
        <div class=" font-bold font-['Poppins'] text-white text-center my-3 text-[30px]">
          Academy
        </div>
      </div>
      <div class="pl-3 py-2 overflow-y-auto bg-[#4D44B5] dark:bg-gray-800">
        <ul class="space-y-2 font-medium ">
          <li v-for="link in navlink" :key="link.id">
            <router-link
              :to="link.link"
              class="navlink flex items-center p-3 ms-8 text-[#C1BBEB] rounded-l-full hover:text-[#4D44B5] focus:text-[#4D44B5] focus:bg-[#F3F4FF] dark:text-white hover:bg-[#F3F4FF] dark:hover:bg-gray-700 gap-3"
            >
              <i :class="link.icon" class="text-[30px] "></i>
              <span class="ml-3">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style lang="css" scoped>

</style>
