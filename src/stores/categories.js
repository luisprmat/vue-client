import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCategories = defineStore('categories', () => {
  const categories = ref({});

  const getCategories = async () => {
    try {
      const response = await axios('/api/categories');
      categories.value = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm(`¿Está seguro de eliminar la categoría #${id}?`))
      return;
    try {
      await axios.delete(`/api/categories/${id}`);
      getCategories();
    } catch (e) {
      alert(e.response.errors.message);
    }
  };

  return {
    categories,
    getCategories,
    deleteCategory,
  };
});
