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
      <h1>Wishlist Attractions</h1>
      <div class="attraction-list">
        <div
          class="attraction-card"
          v-for="attraction in wishlistAttractions"
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
  name: 'WishlistPage',
  data() {
    return {
      wishlistAttractions: [
        // Example data, replace with actual data
        { id: 1, name: 'Attraction 1', image: '/path/to/image1.jpg' },
        { id: 2, name: 'Attraction 2', image: '/path/to/image2.jpg' },
        { id: 3, name: 'Attraction 3', image: '/path/to/image3.jpg' },
      ],
    }
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
