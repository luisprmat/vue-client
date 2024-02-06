import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCategories = defineStore('categories', () => {
    const categories = ref({})

    const getCategories = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL + '/categories')
            categories.value = await response.json()
        } catch (e) {
            console.log(e)
        }
    }

    return {
        categories,
        getCategories,
    }
})