<script setup>
import { useStudentStore } from '/src/stores/students/studentStore.js'
import { useTeachersStore } from '/src/stores/teachers/teacherStore.js'
import { useGroupsStore } from '/src/stores/groups/groupStore.js'
import { useSciencesStore } from '/src/stores/sciences/sciencesStore.js'
import { homeInfo } from '/src/constants/homeInfo.js'

const studentStore = useStudentStore()
const teachersStore = useTeachersStore()
const groupsStore = useGroupsStore()
const sciencesStore = useSciencesStore()
const menu = [
  studentStore.GET_USERS.length,
  teachersStore.GET_TEACHERS.length,
  groupsStore.GET_GROUPS_.length,
  sciencesStore.GET_SCIENCES.length
]
</script>
<template>
  <div>
    <div class="bg-white flex items-center justify-between p-8 rounded-xl w-[850px]">
      <div v-for="(item, i) in homeInfo" class="flex items-center justify-between">
        <div class="flex items-center justify-between gap-5">
          <span :class="'bg-' + item.color" class="p-3 text-3xl rounded-full h-[55px]">
            <i :class="item.icon" class="text-white"></i
          ></span>
          <div class="block">
            <span class="text-md text-gray-500 block mb-2">{{ item.title }}</span>
            <span class="text-2xl font-bold">{{ menu[i] }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-2xl text-[#303972] w-[850px]">
      <table class="w-full text-md text-left dark:text-gray-400">
        <thead class="text-xl text-main-color bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-6 font-semibold">O'qituvchilar:</th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="teacher in teachersStore.GET_TEACHERS"
            class="bg-white hover:bg-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center gap-5">
                <img
                  :src="teacher.img"
                  alt=""
                  class="w-[50px] h-[50px] rounded-full object-cover"
                />
                <span> {{ teacher.name }} {{ teacher.surname }} </span>
              </div>
            </th>
            <td class="px-6 py-4 text-[#4D44B5] font-bold">ID{{ teacher.id }}</td>
            <td class="px-6 py-4 flex items-center gap-3">
              <span
                class="p-1 w-9 flex items-center justify-center rounded-full text-white bg-[#FB7D5B]"
                ><i class="bx bx-user flex text-xl items-center"></i
              ></span>
              <div>
                <span class="block text-sm text-[#A098AE] font-['Poppins']">Class</span>
                <span class="font-bold text-lg text-main-color">{{ teacher.className }}</span>
              </div>
            </td>
            <td class="px-6 py-4 text-main-color font-bold">{{ teacher.time }}</td>
            <td class="flex items-center justify-between px-3 py-4 text-[#A098AE]">
              <i class="bx bx-printer text-3xl "></i>
              <i class="bx bx-dots-horizontal-rounded text-3xl"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped></style>
