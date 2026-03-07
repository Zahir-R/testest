<template>
  <div class="max-w-4xl mx-auto mt-8 bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col h-[75vh]">
    <div class="bg-rose-50 p-6 border-b border-rose-100 flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold text-stone-900">MenoSupport Chat</h2>
        <p class="text-stone-600">Ask any questions or share how you are feeling.</p>
      </div>
      <button @click="logout" class="text-rose-600 hover:text-rose-800 font-semibold underline">
        Sign Out
      </button>
    </div>
    
    <div class="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50" ref="chatBox">
      <div v-if="messages.length === 0" class="text-center text-stone-500 mt-10 text-lg">
        Start the conversation by sending a message below.
      </div>
      
      <div v-for="(msg, index) in messages" :key="index" class="space-y-4">
        <!-- User Message -->
        <div class="flex justify-end">
          <div class="bg-rose-600 text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%] text-lg shadow-sm">
            {{ msg.message }}
          </div>
        </div>
        
        <!-- Bot Response -->
        <div class="flex justify-start">
          <div class="bg-white border border-stone-200 text-stone-800 p-4 rounded-2xl rounded-tl-sm max-w-[80%] text-lg shadow-sm">
            {{ msg.response }}
          </div>
        </div>
      </div>
    </div>
    
    <div class="p-4 bg-white border-t border-stone-200">
      <form @submit.prevent="sendMessage" class="flex gap-4">
        <input 
          v-model="newMessage" 
          type="text" 
          placeholder="Type your message here..." 
          class="flex-1 px-6 py-4 text-lg border border-stone-300 rounded-full bg-stone-50 focus:bg-white"
          :disabled="loading"
        />
        <button 
          type="submit" 
          class="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-md transition-colors"
          :disabled="loading || !newMessage.trim()"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'

const { token, isLoggedIn, logout } = useAuth()
const router = useRouter()
const config = useRuntimeConfig()

const messages = ref([])
const newMessage = ref('')
const loading = ref(false)
const chatBox = ref(null)

onMounted(async () => {
  if (!isLoggedIn.value) {
    router.push('/login')
    return
  }
  await fetchHistory()
})

const scrollToBottom = async () => {
  await nextTick()
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight
  }
}

const fetchHistory = async () => {
  try {
    const res = await $fetch(`${config.public.apiBaseUrl}/chat/history`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
    messages.value = res.reverse()
    scrollToBottom()
  } catch (err) {
    if (err.response?.status === 401) {
      logout()
    }
  }
}

const sendMessage = async () => {
  if (!newMessage.value.trim() || loading.value) return
  
  const userText = newMessage.value
  newMessage.value = ''
  loading.value = true
  
  // Optimistically add user message (response will fill in later, or we just rely on fetch)
  // For simplicity, we just wait for the response to update both
  
  try {
    const res = await $fetch(`${config.public.apiBaseUrl}/chat/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.value}`
      },
      body: JSON.stringify({ message: userText })
    })
    
    messages.value.push(res)
    scrollToBottom()
  } catch (err) {
    console.error(err)
    alert("Failed to send message")
  } finally {
    loading.value = false
  }
}
</script>
