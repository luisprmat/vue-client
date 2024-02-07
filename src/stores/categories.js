import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCategories = defineStore('categories', () => {
    const categories = ref({})

    const getCategories = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL + '/api/categories')
            categories.value = await response.json()
        } catch (e) {
            console.log(e)
        }
    }

    const deleteCategory = async(id) => {
        if(!window.confirm(`¿Está seguro de eliminar la categoría #${id}?`)) return

        try {
            const response = await fetch(import.meta.env.VITE_BASE_URL + '/api/categories/' + id, {
                method: 'DELETE'
            })
            if(!response.ok) {
                const error = await response.json()
                alert(error.message)
                return
            }
            getCategories()
        } catch (e) {
            console.log(e)
        }
    }

    return {
        categories,
        getCategories,
        deleteCategory,
    }
})