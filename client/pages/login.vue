<template>
  <div>
    <header>
      <div class="logo">Vatan</div>
      <nav>
        <NuxtLink to="/register">Register</NuxtLink>
      </nav>
    </header>
    <main>
      <div class="auth-form">
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button @click="login">Login</button>
      </div>
    </main>
    <footer>
      <p>&copy; 2024 Vatan. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const { data } = await this.$axios.post('/auth/login', {
          email: this.email,
          password: this.password,
        })
        localStorage.setItem('token', data.accessToken)
        this.$axios.setToken(data.accessToken, 'Bearer')
        this.$router.push('/profile')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
/* Add your styles here */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.logo {
  font-size: 1.5em;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
}

main {
  padding: 20px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

footer {
  padding: 10px;
  text-align: center;
  background-color: #f8f9fa;
}
</style>
