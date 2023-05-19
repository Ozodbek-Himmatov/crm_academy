<script setup>
import { useRouter } from 'vue-router'

import Home from './Home/Home.vue'



const router = useRouter()
</script>
<template>
  <Header />
  <Sidebar />
  <main>
    <section class="w-full">
      <div class="p-4 sm:ml-72 bg-[#F3F4FF]">
        <div class="px-8">
          <router-view></router-view>
          <Rightbar v-show="router.currentRoute.value.name === 'dashboard'" />
          <Home />
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
