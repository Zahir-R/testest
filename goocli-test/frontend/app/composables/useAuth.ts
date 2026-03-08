import { computed } from 'vue'
import { useRouter } from 'vue-router' 

export const useAuth = () => {
  const token = useState<string | null>('auth_token', () => {
    if (process.client) {
      return localStorage.getItem('token')
    }
    return null
  })

  const setToken = (newToken: string) => {
    token.value = newToken
    if (process.client) {
      localStorage.setItem('token', newToken)
    }
  }

  const logout = () => {
    token.value = null
    if (process.client) {
      localStorage.removeItem('token')
    }
    useRouter().push('/login')
  }

  const isLoggedIn = computed(() => !!token.value)

  return {
    token,
    setToken,
    logout,
    isLoggedIn
  }
}
