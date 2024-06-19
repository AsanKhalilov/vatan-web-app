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
      <section class="hero">
        <div class="hero-image">
          <img src="/path/to/your/image.jpg" alt="Crimea Attraction" />
        </div>
        <div class="hero-content">
          <h1>Discover the Beauty and History of Crimea</h1>
          <p>
            Your guide to the most amazing attractions for true adventure
            enthusiasts.
          </p>
          <NuxtLink to="/attractions" class="btn">Explore Attractions</NuxtLink>
        </div>
      </section>
      <section class="popular-attractions">
        <h2>Popular Attractions</h2>
        <div class="attraction-cards">
          <div
            class="card"
            v-for="attraction in popularAttractions"
            :key="attraction.id"
          >
            <img :src="attraction.image" :alt="attraction.name" />
            <h3>{{ attraction.name }}</h3>
            <NuxtLink :to="'/attractions/' + attraction.id" class="btn"
              >Visit</NuxtLink
            >
          </div>
        </div>
      </section>
      <section class="about-crimea">
        <h2>Crimea - A World in Miniature</h2>
        <p>Brief information about Crimea.</p>
        <div class="carousel">
          <!-- Add carousel component here -->
        </div>
        <NuxtLink to="/attractions" class="btn">Explore Attractions</NuxtLink>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Vatan. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      popularAttractions: [
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

.hero {
  display: flex;
}

.hero-image {
  flex: 1;
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content h1 {
  font-size: 2.5em;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.popular-attractions,
.about-crimea {
  padding: 20px;
}

.attraction-cards {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
}

footer {
  padding: 10px;
  text-align: center;
  background-color: #f8f9fa;
}
</style>
