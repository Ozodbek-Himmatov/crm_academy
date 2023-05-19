import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { sciences } from '../../constants/sciencesInfo.js'

export const useSciencesStore = defineStore('sciences', () => {
  const state = reactive({
    sciences: [...sciences],
    currentPage: 1,
    itemsPerPage: 5
  })

  const SET_SCIENCES = (data) => {
    state.sciences = data
  }

  const ADD_SCIENCES = (data) => {
    state.sciences.push(data)
  }

  const GET_SUBJECT = (id) => {
    for (let i in state.sciences) {
      if (state.sciences[i].id == id.value) {
        return state.sciences[i]
      }
    }
  }

  const DELETE_SCIENCES = (id) => {
    for (let i in state.sciences) {
      if (state.sciences[i].id == id.value) state.sciences.splice(i, 1)
    }
  }

  const EDIT_SCIENCES = (id, data) => {
    for (let i in state.sciences) {
      if (state.sciences[i].id == id.value) {
        state.sciences[i] = data
      }
    }
  }

  const GENERATE_ID = () => {
    return state.sciences.length ? state.sciences[state.sciences.length - 1].id_number + 1 : 1000
  }

  const GET_SCIENCES = computed(() => state.sciences)

  return {
    state,
    EDIT_SCIENCES,
    SET_SCIENCES,
    GET_SUBJECT,
    ADD_SCIENCES,
    GENERATE_ID,
    DELETE_SCIENCES,
    GET_SCIENCES
  }
})
