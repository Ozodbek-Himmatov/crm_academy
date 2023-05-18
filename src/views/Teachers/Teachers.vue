<script setup>
import { teachers } from '../../constants/teachers.js'
import call from '../../assets/img/Call.png'
import env from '../../assets/img/Email.png'
</script>
<template>
  <Navbar />
  <!-- Main modal -->
  <div
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden absolute top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh]"
  >
    <div class="relative w-full max-w-full h-[85vh]">
      <!-- Modal content -->
      <div class="relative bg-white rounded-xl shadow-xl">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t-xl dark:border-gray-600 bg-main-bg"
        >
          <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div class="w-full flex items-start gap-10">
            <div class="block">
              <span class="text-main-color font-bold text-md">Rasm *</span>
              <div
                class="h-[175px] w-[175px] mt-5 border-2 border-main-color border-dashed rounded-lg flex items-center text-center"
              >
                Drag and drop or click here to select file
              </div>
            </div>
            <div class="block w-[50%]">
              <div class="mb-6">
                <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                  >Ism *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="Jahon"
                  required
                />
              </div>
              <div class="mb-6">
                <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                  >Tug'ilgan sana *</label
                >
                <div class="relative max-w-sm">
                  <input
                    datepicker
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/2 pl-4 p-2.5"
                    placeholder="24/02/1997"
                  />
                </div>
              </div>
              <div class="mb-6">
                <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                  >Login *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="username"
                  required
                />
              </div>
            </div>
            <div class="block w-[50%]">
              <div class="mb-6">
                <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                  >Sharif *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="Jalilov"
                  required
                />
              </div>
              <div class="mb-6">
                <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                  >Guruhini tanlang *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="Guruhini tanlang"
                  required
                />
              </div>
              <div class="mb-6">
                <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                  >Parol *</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="●●●●●●●●●●●●●"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center justify-end p-6 space-x-10 rounded-b">
          <button
            data-modal-hide="defaultModal"
            type="button"
            class="text-main-bg bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full border-[3px] border-main-bg text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
          >
            Saqlash
          </button>

          <button
            data-modal-hide="defaultModal"
            type="button"
            class="text-white bg-main-bg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-2.5 text-center"
          >
            Qo'shish
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--  TEACHER TABLE -->
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="teacher in teachers"
      class="w-[280px] max-w-sm bg-white border border-gray-200 rounded-[20px] shadow dark:border-gray-700"
    >
      <div class="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span class="sr-only">Open dropdown</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        ></div>
      </div>
      <div class="flex flex-col items-center pb-10 ">
        <img :src="teacher.img" class="rounded-full shadow-lg w-[120px] h-[120px]" alt="Teacher" />
        <h5 class="mb-1 text-[#303972] text-[24px] font-['Poppins'] font-bold">
          {{ teacher.name }} {{ teacher.surname }}
        </h5>
        <span class="font-['Poppins'] text-[#A098AE] text-[18px] font-regular">
          {{ teacher.science }}
        </span>
        <div class="flex mt-9 space-x-3">
          <button class="bg-[#4D44B5] px-3 w-[40px] h-[40px] py-3 rounded-full relative">
            <img :src="call">
          </button>
          <button class="bg-[#4D44B5] px-3 w-[40px] h-[40px] py-3 rounded-full relative">
            <img :src="env">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
