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
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for attractions..."
      />
      <div class="attraction-list">
        <div
          class="attraction-card"
          v-for="attraction in filteredAttractions"
          :key="attraction.id"
        >
          <img :src="attraction.image" :alt="attraction.name" />
          <h3>{{ attraction.name }}</h3>
          <NuxtLink :to="'/attractions/' + attraction.id" class="btn"
            >Visit</NuxtLink
          >
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
  name: 'AttractionsPage',
  data() {
    return {
      searchQuery: '',
      attractions: [],
    }
  },
  computed: {
    filteredAttractions() {
      return this.attractions.filter((attraction) =>
        attraction.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
  },
  async fetch() {
    const { data } = await this.$axios.get('/attractions')
    this.attractions = data
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

.attraction-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.attraction-card {
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
}

.attraction-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

footer {
  padding: 10px;
  text-align: center;
  background-color: #f8f9fa;
}
</style>
