<template>
  <div class="home">
    <h1>Welcome to the Chat Room</h1>
    <form @submit.prevent="enterChatRoom">
      <input v-model="username" placeholder="Enter your username" required />
      <button type="submit">Join Chat</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    enterChatRoom() {
      if (this.username.trim()) {
        window.location.href = `/chat.html?username=${encodeURIComponent(this.username)}`
      }
    }
  }
}
</script>

<style scoped>
/* Add some basic styles */
</style>
