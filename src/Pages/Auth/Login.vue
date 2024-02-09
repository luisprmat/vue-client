<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import CheckBox from '@/Components/CheckBox.vue';
import imageLogo from '@/assets/login-logo.svg';
import { onBeforeUnmount } from 'vue'
import { useLogin } from '@/stores/login'

const store = useLogin()

onBeforeUnmount(store.resetForm)
</script>

<template>
  <GuestLayout>
    <section class="container flex-fill d-flex flex-column justify-content-center">
      <div class="container-fluid">
        <div class="row gy-3">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img :src="imageLogo" class="img-fluid" alt="Sample image">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form @submit.prevent="store.handleSubmit" novalidate>
              <!-- Email input -->
              <div class="form-floating mb-4">
                <input v-model="store.form.email" type="email" id="email" class="form-control"
                  :class="{ 'is-invalid': store.errors.email }" placeholder="user@example.com" autocomplete="username"
                  required />
                <div class="invalid-feedback">{{ store.errors.email ? store.errors.email[0] : '' }}</div>
                <label class="form-label" for="email">Correo electrónico</label>
              </div>

              <!-- Password input -->
              <div class="form-floating mb-3">
                <input v-model="store.form.password" type="password" id="password" class="form-control"
                  :class="{ 'is-invalid': store.errors.password }" placeholder="Escriba su contraseña"
                  autocomplete="current-password" required />
                <label class="form-label" for="password">Contraseña</label>
                <div class="invalid-feedback">{{ store.errors.password ? store.errors.password[0] : '' }}</div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                  <CheckBox v-model:checked="store.form.remember" id="remember" />
                  <label class="form-check-label" for="remember">
                    Recordar mi sesión
                  </label>
                </div>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button class="btn btn-primary btn-lg px-5">Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="container-fluid mt-4 bg-success-subtle">
      <div class="container py-4">
        © Luis Parrado - 2024 - Todos los derechos reservados
      </div>
    </footer>
  </GuestLayout>
</template>