<template>
  <div class="max-w-md mx-auto mt-16 bg-white p-10 rounded-2xl shadow-md border border-stone-200">
    <h1 class="text-3xl font-bold text-center text-stone-900 mb-8">
      {{ isLogin ? 'Sign In' : 'Create Account' }}
    </h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div v-if="!isLogin">
        <label class="block text-lg font-medium text-stone-700 mb-2">Name</label>
        <input v-model="form.name" type="text" class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="Jane Doe" />
      </div>

      <div v-if="!isLogin">
        <label class="block text-lg font-medium text-stone-700 mb-2">Age</label>
        <input v-model="form.age" type="number" class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="50" />
      </div>

      <div>
        <label class="block text-lg font-medium text-stone-700 mb-2">Email Address</label>
        <input v-model="form.email" type="email" required class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="your@email.com" />
      </div>

      <div>
        <label class="block text-lg font-medium text-stone-700 mb-2">Password</label>
        <input v-model="form.password" type="password" required class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="••••••••" />
      </div>
      
      <div v-if="errorMsg" class="text-red-600 text-center font-medium">
        {{ errorMsg }}
      </div>

      <button type="submit" class="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 rounded-xl text-xl shadow-md transition-colors" :disabled="loading">
        {{ loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Register') }}
      </button>
    </form>

    <div class="mt-8 text-center text-lg">
      <button @click="toggleMode" class="text-rose-600 hover:text-rose-800 font-medium">
        {{ isLogin ? 'Need an account? Register here' : 'Already have an account? Sign In' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'

const { setToken } = useAuth()
const router = useRouter()
const config = useRuntimeConfig()

const isLogin = ref(true)
const loading = ref(false)
const errorMsg = ref('')

const form = ref({
  email: '',
  password: '',
  name: '',
  age: ''
})

const toggleMode = () => {
  isLogin.value = !isLogin.value
  errorMsg.value = ''
}

const handleSubmit = async () => {
  loading.value = true
  errorMsg.value = ''
  
  try {
    const url = isLogin.value ? '/auth/login' : '/auth/register'
    let body = {}
    let headers = {}
    
    if (isLogin.value) {
      body = new URLSearchParams()
      body.append('username', form.value.email)
      body.append('password', form.value.password)
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else {
      body = JSON.stringify({
        email: form.value.email,
        password: form.value.password,
        name: form.value.name,
        age: form.value.age ? parseInt(form.value.age) : null
      })
      headers['Content-Type'] = 'application/json'
    }
    
    const res = await $fetch(`${config.public.apiBaseUrl}${url}`, {
      method: 'POST',
      headers,
      body
    })
    
    if (isLogin.value) {
      setToken(res.access_token)
      router.push('/chat')
    } else {
      // Auto login after register
      isLogin.value = true
      form.value.password = ''
      alert('Registration successful! Please log in.')
    }
    
  } catch (err) {
    errorMsg.value = err.data?.detail || 'An error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
