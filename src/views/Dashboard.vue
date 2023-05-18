<script setup></script>
<template>
  <main>
    <section class="w-full">
      <Sidebar />
      <div class="p-4 sm:ml-72 bg-[#F3F4FF] h-[100vh]">
        <div class="px-8">
          <Header />
          <router-view></router-view>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
