<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-sm bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" :to="{ name: 'home' }">
            <img src="@/assets/logo.png" alt="Logo" width="30" height="24">
          </RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink :to="{ name: 'products.index' }" class="nav-link" active-class="active">
                  Productos
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink :to="{ name: 'categories.index' }" class="nav-link" active-class="active">
                  Categorías
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
