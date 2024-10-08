<template>
  <div class="chat-room">
    <h2>Chat Room - {{ username }}</h2>
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index">
        {{ msg }}
      </div>
    </div>
    <input v-model="message" @keydown.enter="sendMessage" placeholder="Type a message..." />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  data() {
    return {
      username: new URLSearchParams(window.location.search).get('username'),
      message: '',
      messages: [],
      socket: null
    }
  },
  methods: {
    setupWebSocket() {
      this.socket = new WebSocket('wss://thenewcoda.workers.dev')

      this.socket.onopen = () => {
        console.log('Connected to WebSocket server')
      }

      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        this.messages.push(data.message)
      }

      this.socket.onclose = () => {
        console.log('Disconnected from WebSocket server')
      }
    },
    sendMessage() {
      if (this.message.trim() !== '') {
        const payload = {
          type: 'chat',
          username: this.username,
          text: this.message
        }
        this.socket.send(JSON.stringify(payload))
        this.message = ''
      }
    }
  },
  mounted() {
    this.setupWebSocket()
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.close()
    }
  }
}
</script>

<style scoped>
/* Add some basic styles */
.messages {
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 10px;
}
</style>
