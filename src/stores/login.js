import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuth } from '@/stores/auth'

export const useLogin = defineStore('login', () => {
  const auth = useAuth()
  const errors = ref({})
  const loading = ref(false)
  const form = reactive({
    email: '',
    password: '',
    remember: false
  })

  function resetForm() {
    form.email = ''
    form.password = ''
    form.remember = false

    errors.value = {}
  }

  const handleSubmit = async () => {
    if (loading.value) return

    loading.value = true
    errors.value = {}

    try {
      const response = await axios.post('/api/login', form)
      auth.login(response.data.access_token)
    } catch (e) {
      if (e.response.status === 422) {
        errors.value = e.response.data.errors
      }
    }
    form.password = ''
    loading.value = false
  }

  return { form, errors, loading, resetForm, handleSubmit }
})
