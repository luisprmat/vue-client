<script setup>
import { onMounted, ref } from 'vue';

const products = ref([])

const getProducts = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL + '/products')
    const data = await response.json()
    products.value = data.data
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
      <div v-for="product in products" :key="product.id" class="col">
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
  </div>
</template>
