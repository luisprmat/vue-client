<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuth } from '@/stores/auth'

const auth = useAuth()

onMounted(auth.getUser)
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
            <ul class="navbar-nav me-auto">
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

            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">{{ auth.user.name
                }}</a>
                <ul class="dropdown-menu dropdown-menu-end" data-bs-theme="light">
                  <li><a @click.prevent="auth.logout" href="#" class="dropdown-item" role="button">Cerrar sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <main class="flex-fill container">
    <slot />
  </main>

  <footer class="container-fluid mt-4 bg-success-subtle">
    <div class="container py-4">
      © Luis Parrado - 2024 - Todos los derechos reservados
    </div>
  </footer>
</template>