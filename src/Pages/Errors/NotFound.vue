<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="page-not-found bg-success-subtle pt-5">
    <div class="bg-light shadow">
      <h2>4<i class="bi bi-bug"></i>4</h2>
      <h3 class="mt-4">Ups! Página no encontrada</h3>
      <p>No pudimos encontrar lo que buscabas.<br>¡lo sentimos!</p>
      <div class="mt-5">
        <RouterLink :to="{ name: 'home' }" class="btn m-2 m-md-0 btn-primary">
          <i class="bi bi-house-door-fill"></i> Ir a inicio
        </RouterLink>
        <button type="button" class="btn m-2 btn-info"><i class="bi bi-person-lines-fill"></i> Contáctenos
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-not-found {
  height: 100vh;
}

.page-not-found h2 {
  font-size: 130px;
  color: #e91e63;
}

.page-not-found h3 {
  font-size: 42px;
}

.page-not-found .bg-light {
  width: 50%;
  padding: 50px;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 767px) {
  .page-not-found h2 {
    font-size: 100px;
  }

  .page-not-found h3 {
    font-size: 28px;
  }

  .page-not-found .bg-light {
    width: 100%;
  }
}
</style>