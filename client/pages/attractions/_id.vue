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
      <h1>{{ attraction.name }}</h1>
      <h2>{{ attraction.subtitle }}</h2>
      <div class="actions">
        <button @click="addToWishlist">Add to Wishlist</button>
        <button @click="markAsVisited">Mark as Visited</button>
        <div class="rating">{{ attraction.rating }}</div>
      </div>
      <div class="carousel">
        <!-- Add carousel component here -->
      </div>
      <div class="info-blocks">
        <div v-for="block in attraction.infoBlocks" :key="block.title">
          <h3>{{ block.title }}</h3>
          <p>{{ block.text }}</p>
          <img :src="block.image" alt="" />
        </div>
      </div>
      <div class="comments">
        <h3>Comments</h3>
        <div v-for="comment in comments" :key="comment.id">
          <p>{{ comment.text }}</p>
        </div>
        <div class="add-comment">
          <textarea v-model="newComment"></textarea>
          <button @click="submitComment">Add Comment</button>
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
  data() {
    return {
      attraction: {
        name: 'Attraction Name',
        subtitle: 'Subtitle',
        rating: 4.5,
        infoBlocks: [
          {
            title: 'General Facts',
            text: 'Some general facts about the attraction.',
            image: '/path/to/image.jpg',
          },
          // Add more info blocks as needed
        ],
      },
      comments: [
        { id: 1, text: 'Great place!' },
        { id: 2, text: 'Must visit.' },
      ],
      newComment: '',
    }
  },
  methods: {
    addToWishlist() {
      // Logic to add to wishlist
    },
    markAsVisited() {
      // Logic to mark as visited
    },
    submitComment() {
      // Logic to submit a new comment
      this.comments.push({
        id: this.comments.length + 1,
        text: this.newComment,
      })
      this.newComment = ''
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

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.carousel {
  margin: 20px 0;
}

.info-blocks {
  margin: 20px 0;
}

.comments {
  margin: 20px 0;
}

footer {
  padding: 10px;
  text-align: center;
  background-color: #f8f9fa;
}
</style>
