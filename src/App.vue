<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink :to="{ name: 'products.index' }">Productos</RouterLink>
        <RouterLink :to="{ name: 'categories.index' }">Categorías</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
