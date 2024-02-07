<script setup>
import { onMounted } from 'vue';
import { useCategories } from '@/stores/categories';
import noImage from '@/assets/no-image-available.png';

const store = useCategories()

onMounted(store.getCategories)
</script>

<template>
  <div class="container">
    <h2 class="display-6 my-4">Categorías</h2>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
      <div v-for="category in store.categories.data" :key="category.id" class="col">
        <div class="card h-100">
          <img :src="category.photo_url ? category.photo_url : noImage" class="card-img-top" :alt="category.name">
          <div class="card-body">
            <h5 class="card-title mb-2">{{ category.name }}</h5>
            <h6 class="card-subtitle my-2 text-primary fst-italic">Productos: {{ category.products }}</h6>
            <p class="card-text">ID: {{ category.id }}</p>
          </div>
          <div class="card-footer text-body-secondary d-flex justify-content-between">
            <button class="btn btn-outline-primary btn-sm"><i class="bi bi-pencil-square"></i>
            </button>
            <button @click.prevent="store.deleteCategory(category.id)" class="btn btn-outline-danger btn-sm"><i
                class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>