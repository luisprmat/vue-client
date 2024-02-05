<script setup>
import { onMounted, ref } from 'vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

const products = ref({})

const getProducts = async (page = 1) => {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL + '/products?page=' + page)
    products.value = await response.json()
  } catch (e) {
    console.log(e)
  }
}
onMounted(getProducts)
</script>

<template>
  <div class="container">
    <h2 class="display-6 my-4">Productos</h2>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="product in products.data" :key="product.id" class="col">
        <div class="card h-100">
          <img src="http://placehold.it/300x300" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title mb-2">{{ product.name }}</h5>
            <h6 class="card-subtitle my-2 text-body-secondary">$ {{ product.price }}</h6>
            <h6 class="card-subtitle my-2 text-primary fst-italic">{{ product.category.name }}</h6>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-4 d-flex flex-column flex-md-row justify-content-md-between align-items-md-baseline">
      <div class="order-last order-md-first">
        <p class="text-sm text-gray-700 leading-5 dark:text-gray-200">
          <span>Mostrando </span>
          <span class="fw-medium">{{ products.meta?.from }}</span>
          <span> al </span>
          <span class="fw-medium">{{ products.meta?.to }}</span>
          <span> de </span>
          <span class="fw-medium">{{ products.meta?.total }}</span>
          <span> resultados</span>
        </p>
      </div>
      <Bootstrap5Pagination :data="products" @pagination-change-page="getProducts" />
    </div>
  </div>
</template>
