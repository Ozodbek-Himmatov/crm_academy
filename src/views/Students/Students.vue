<script setup>
import moment from 'moment'
import { ref, reactive } from 'vue'
import { useStudentStore } from '../../stores/students/studentStore.js'
import Search from '/src/UI/Search.vue'
import { toast } from 'vue3-toastify'

const store = useStudentStore()
const modalTogg = ref(false)
const deleteModalTogg = ref(false)
const deletedID = ref(null)
const editUser = ref(0)
const pagination = reactive({
  currentPage: store.currentPage,
  itemsPerPage: store.itemsPerPage
})
console.log(store.currentPage);

const toggleModal = () => {
  for (let i in studentInfo) studentInfo[i] = ''
  modalTogg.value = !modalTogg.value
}
const toggleDelete = () => {
  headStore.CHANGE_TITLE(deleteModalTogg.value ? 'Students' : "Yangi o'quvchi qo'shish")
  deleteModalTogg.value = !deleteModalTogg.value
}
const closeEdit = () => {
  editUser.value = null
}
let studentInfo = reactive({
  name: '',
  surname: '',
  birthday: '',
  group_number: '',
  login: '',
  password: ''
})

let editStudentInfo = reactive({
  name: '',
  surname: '',
  birthday: '',
  group_number: '',
  login: '',
  password: ''
})

const addStudent = () => {
  const student = {
    id: Date.now(),
    name: studentInfo.name,
    surname: studentInfo.surname,
    img: 'https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png',
    group_number: studentInfo.group_number,
    grade: 'Freelance',
    birthday: studentInfo.birthday,
    id_number: store.GENERATE_ID(),
    login: studentInfo.login,
    password: studentInfo.password,
    createdAt: Date.now()
  }
  try {
    store.ADD_USER(student)
    toast.success(`Added successfully`, {
      autoClose: 1000,
      theme: 'light'
    })
    toggleModal()
    for (let i in studentInfo) studentInfo[i] = ''
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

const deleteStudent = () => {
  try {
    store.DELETE_USER(deletedID)
    toast.success(`Deleted successfully`, {
      autoClose: 1000,
      theme: 'light'
    })
    toggleDelete()
    for (let i in studentInfo) studentInfo[i] = ''
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

const openEdit = (student) => {
  editUser.value = student.id
  const currentUser = store.GET_USER(editUser)
  editStudentInfo = {
    id: currentUser.id,
    name: currentUser.name,
    surname: currentUser.surname,
    birthday: currentUser.birthday,
    group_number: currentUser.group_number,
    login: currentUser.login,
    password: currentUser.password,
    img: '../../assets/img/muslim_prof.jpg',
    grade: 'Freelance',
    id_number: currentUser.id_number,
    createdAt: currentUser.createdAt
  }
}

const editStudent = () => {
  try {
    store.EDIT_USER(editUser, editStudentInfo)
    toast.success(`Deleted successfully`, {
      autoClose: 1000,
      theme: 'light'
    })
    closeEdit()
    editUser.value = null
  } catch (err) {
    console.log(err)
    toast.error(`Error`, {
      autoClose: 1000,
      theme: 'light'
    })
  }
}

const INCREMENT_PAGE = () => {
  if (pagination.currentPage < Math.ceil(store.GET_USERS.length / store.itemsPerPage))
    pagination.currentPage++
}

const DECREMENT_PAGE = () => {
  if (pagination.currentPage > 1) {
    pagination.currentPage--
  }
}
</script>
<template>
  <div class="p-5 relative">
    <!-- <Navbar /> -->
    <div class="flex justify-between w-full items-center h-[50px] mb-5">
      <Search />
      <button
        class="bg-[#4D44B5] text-white w-[180px] h-[50px] rounded-full"
        @click="
          () => {
            editUser = null
            toggleModal()
          }
        "
      >
        <i class="bx bx-plus-medical"></i>
      </button>
    </div>
    <!-- DELETE USER MODAL -->
    <div
      id="deleteModal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-[#4d44b565]"
      :class="deleteModalTogg ? 'flex' : 'hidden'"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 text-center bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:p-5">
          <button
            @click="toggleDelete"
            type="button"
            class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <svg
            class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p class="mb-4 text-gray-500 dark:text-gray-300">
            Rostan ushbu o'quvchini o'chirmoqchimisiz ?
          </p>
          <div class="flex justify-center items-center space-x-4">
            <button
              @click="toggleDelete"
              type="button"
              class="py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-purple-900 focus:z-10 bg-main-bg text-white"
            >
              Yo'q, hazillashdim
            </button>
            <button
              @click="deleteStudent"
              type="submit"
              class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Ha, o'chirmoqchiman
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- CREATE USER MODAL -->
    <div
      id="defaultModalCreate"
      tabindex="-1"
      aria-hidden="true"
      class="absolute hs-overlay top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[80vh] bg-main-light-bg"
      :class="modalTogg ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-full h-[90vh]">
        <!-- Modal content -->
        <form @submit.prevent="addStudent" class="relative bg-white rounded-xl shadow-xl">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t-xl bg-main-bg">
            <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlari</h3>
            <button
              @click="toggleModal"
              type="button"
              class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="w-full flex items-start gap-10">
              <div class="block">
                <span class="text-main-color font-bold text-md">Rasm *</span>
                <div
                  class="h-[200px] w-[200px] mt-5 border-4 border-gray-500 border-dashed rounded-lg flex items-center text-center p-3"
                >
                  Drag and drop or click here to select file
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Ism *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Sherlock"
                    required
                    v-model="studentInfo.name"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Tug'ilgan sana *</label
                  >
                  <div class="relative max-w-sm">
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/2 pl-4 p-2.5"
                      placeholder="24 February 1997"
                      v-model="studentInfo.birthday"
                    />
                  </div>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Login *</label
                  >
                  <input
                    type="text"
                    id="login"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Username"
                    required
                    v-model="studentInfo.login"
                  />
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Sharif *</label
                  >
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Holmes"
                    required
                    v-model="studentInfo.surname"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Guruhini tanlang *</label
                  >
                  <input
                    type="text"
                    id="group"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Guruhini tanlang"
                    required
                    v-model="studentInfo.group_number"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Parol *</label
                  >
                  <input
                    type="text"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="●●●●●●●●●●●●●"
                    required
                    v-model="studentInfo.password"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-end p-6 space-x-10 rounded-b">
            <button
              type="submit"
              class="text-white bg-main-bg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-2.5 text-center"
            >
              Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- UPDATE USER MODAL -->
    <div
      id="defaultModalUpdate"
      tabindex="-1"
      aria-hidden="true"
      class="absolute top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[100vh] bg-main-light-bg"
      :class="editUser ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-full h-[90vh]">
        <!-- Modal content -->
        <form @submit.prevent="editStudent" class="relative bg-white rounded-xl shadow-xl">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t-xl bg-main-bg">
            <h3 class="text-xl text-white font-bold">O'quvchi ma'lumotlarini o'zgartirish</h3>
            <button
              @click="closeEdit"
              type="button"
              class="text-purple-400 bg-transparent hover:bg-purple-200 hover:text-purple-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="w-full flex items-start gap-10">
              <div class="block">
                <span class="text-main-color font-bold text-md">Rasm *</span>
                <div
                  class="h-[200px] w-[200px] mt-5 border-4 border-gray-500 border-dashed rounded-lg flex items-center text-center p-3"
                >
                  Drag and drop or click here to select file
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Ism *</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Jahon"
                    required
                    v-model="editStudentInfo.name"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Tug'ilgan sana *</label
                  >
                  <div class="relative max-w-sm">
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/2 pl-4 p-2.5"
                      placeholder="24 February 1997"
                      v-model="editStudentInfo.birthday"
                    />
                  </div>
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Login *</label
                  >
                  <input
                    type="text"
                    id="login"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Username"
                    required
                    v-model="editStudentInfo.login"
                  />
                </div>
              </div>
              <div class="block w-[50%]">
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Sharif *</label
                  >
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Jalilov"
                    required
                    v-model="editStudentInfo.surname"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Guruhini tanlang *</label
                  >
                  <input
                    type="text"
                    id="group"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="Guruhini tanlang"
                    required
                    v-model="editStudentInfo.group_number"
                  />
                </div>
                <div class="mb-10">
                  <label for="first_name" class="block mb-2 text-md text-main-color font-bold"
                    >Parol *</label
                  >
                  <input
                    type="text"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="●●●●●●●●●●●●●"
                    required
                    v-model="editStudentInfo.password"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-end p-6 space-x-10 rounded-b">
            <button
              type="submit"
              class="text-main-bg bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-full border-[3px] border-main-bg text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- TABLE SECTION START -->
    <div class="max-w-full mt-5">
      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">F.I.SH</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">Guruh raqami</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">Bosqich</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">Qo'shilgan sana</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">ID raqami</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th scope="col" class="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                >
                  <tr
                    v-for="student in store.GET_USERS.slice(
                      (pagination.currentPage - 1) * pagination.itemsPerPage,
                      (pagination.currentPage - 1) * pagination.itemsPerPage +
                        pagination.itemsPerPage
                    )"
                    class="hover:bg-gray-100"
                  >
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-1"
                          type="checkbox"
                          class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 flex items-center gap-3">
                      <img :src="student.img" alt="avatar" class="rounded-full h-[50px]" />
                      {{ student.name }} {{ student.surname }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ student.group_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ student.grade }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ moment(student.createdAt).format('MMM Do YY') }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ student.id_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-center">
                      <i
                        @click="
                          () => {
                            toggleDelete()
                            deletedID = student.id
                          }
                        "
                        class="bx bx-trash text-2xl cursor-pointer hover:scale-110 duration-200 mr-5"
                      ></i>
                      <i
                        @click="() => openEdit(student)"
                        class="bx bx-pencil text-2xl cursor-pointer hover:scale-110 duration-200"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex justify-between items-center text-md p-4 px-10 bg-white">
                <button
                  @click="DECREMENT_PAGE"
                  class="hover:bg-slate-300 rounded-lg border border-gray-400 text-button-cl p-2 px-4"
                >
                  Avvalgisi
                </button>
                <span
                  >Sahifa {{ pagination.currentPage }} dan
                  {{ Math.ceil(store.GET_USERS.length / pagination.itemsPerPage) }}</span
                >
                <button
                  @click="INCREMENT_PAGE"
                  class="hover:bg-slate-300 rounded-lg border border-gray-400 text-button-cl p-2 px-4"
                >
                  Keyingisi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="max-w-full mt-10 font-['Abhaya'] text-[#8A92A6]">
      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-[#000AFF] bg-[#F5F7FF] rounded border-[#D0D5DD] focus:ring-0 dark:focus:ring-blue-700 dark:bg-gray-500 dark:border-[#D0D5DD]"
                        />
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-gray-400"
                    >
                      I.O.F
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
                    >
                      Guruh raqami
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
                    >
                      Bosqich
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
                    >
                      Qo'shilgan sana
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
                    >
                      ID raqami
                    </th>
                    <th scope="col" class="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                >
                  <tr v-for="student in students" class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-1"
                          type="checkbox"
                          class="w-4 h-4 text-[#000AFF] bg-[#F5F7FF] rounded border-[#D0D5DD] focus:ring-0 dark:focus:ring-blue-700 dark:bg-gray-500 dark:border-[#D0D5DD]"
                        />
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td
                      class="py-4 px-6 text-sm font-semibold text-[#232D42] flex items-center gap-3"
                    >
                      <img :src="student.img" alt="avatar" class="rounded-full h-[50px]" />
                      <div class="flex flex-col">
                        <strong>{{ student.name }} {{ student.surname }}</strong>
                        <span class="text-[#667085]">{{ student.email }}</span>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-semibold text-[#232D42]">
                      {{ student.group_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-semibold text-[#232D42]">
                      {{ student.grade }}
                    </td>
                    <td class="py-4 px-6 text-sm font-semibold text-[#232D42]">
                      {{ moment(student.createdAt).format('MMM Do YY') }}
                    </td>
                    <td class="py-4 px-6 text-sm font-semibold text-[#232D42]">
                      {{ student.id_number }}
                    </td>
                    <td class="py-4 px-6 text-sm font-semibold text-center">
                      <i
                        class="bx bx-trash text-2xl cursor-pointer hover:scale-110 hover:text-red-600 hover:shadow-inner rounded-full px-1 hover:shadow-red-500 duration-200 mr-5"
                      ></i>
                      <i
                        class="bx bx-pencil text-2xl cursor-pointer hover:scale-110 rounded-md hover:text-blue-600 hover:shadow-inner hover:shadow-blue-500 duration-200"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex justify-between items-center text-md p-4 px-10 bg-white">
                <button
                  @click="DECREMENT_PAGE"
                  class="hover:bg-slate-300 rounded-lg border border-gray-400 text-button-cl p-2 px-4"
                >
                  Avvalgisi
                </button>
                <span
                  >Sahifa {{ pagination.currentPage }} dan
                  {{ Math.ceil(store.GET_USERS.length / pagination.itemsPerPage) }}</span
                >
                <button
                  @click="INCREMENT_PAGE"
                  class="hover:bg-slate-300 rounded-lg border border-gray-400 text-button-cl p-2 px-4"
                >
                  Keyingisi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style scoped></style>
