import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useAuth = defineStore('auth', () => {
  const router = useRouter()
  const accessToken = useStorage('access_token', '')
  const check = computed(() => !!accessToken.value)

  const user = reactive({
    id: null,
    name: '',
    email: ''
  })

  const setAccessToken = (value) => {
    accessToken.value = value
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
  }

  const login = (accessToken) => {
    setAccessToken(accessToken)
    getUser()

    return router.push({ name: 'products.index' })
  }

  const getUser = async () => {
    try {
      const response = await axios.get('/api/user')
      user.id = response.data.data.id
      user.name = response.data.data.name
      user.email = response.data.data.email
    } catch (error) {
      console.log(error)
    }
  }

  const destroyTokenAndRedirectTo = (routeName = 'login') => {
    setAccessToken(null)
    router.push({ name: routeName })
  }

  const logout = async () => {
    try {
      await axios.post('/api/logout')
      destroyTokenAndRedirectTo()
    } catch (e) {
      console.log(e.response?.errors)
    }
  }

  return { login, logout, check, destroyTokenAndRedirectTo, user, getUser }
})