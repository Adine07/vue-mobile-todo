import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useNoteStore = defineStore("note", () => {
    const note = ref(useLocalStorage("useNote", []))

    // const isLoggedIn = computed(() => {
    //     return note.value.token.length > 0
    // })

    const setNote = (noteData) => {
        note.value = noteData
    }

    const clearNote = () => {
        note.value = []
    }

    return {
        note,
        isLoggedIn,
        setNote,
        clearNote,
    }
})