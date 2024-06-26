<template>
  <div>
    <header>
      <div class="logo">Vatan</div>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/visited">Visited</NuxtLink>
        <NuxtLink to="/wishlist">Wishlist</NuxtLink>
        <NuxtLink to="/profile">Profile</NuxtLink>
      </nav>
    </header>
    <main>
      <div class="profile-info">
        <div class="profile-avatar">
          <img :src="user.avatar" alt="User Avatar" />
        </div>
        <div class="profile-details">
          <p>Name: {{ user.name }}</p>
          <p>Email: {{ user.email }}</p>
          <NuxtLink to="/wishlist" class="btn">Wishlist</NuxtLink>
          <NuxtLink to="/visited" class="btn">Visited</NuxtLink>
        </div>
      </div>
    </main>
    <footer>
      <p>&copy; 2024 Vatan. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      user: {},
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('/profile')
    this.user = data
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

.profile-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.profile-details {
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
