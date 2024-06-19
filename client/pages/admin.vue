<template>
  <div>
    <header>
      <div class="logo">Vatan</div>
      <nav>
        <button @click="logout">Logout</button>
      </nav>
    </header>
    <main>
      <h1>Add New Attraction</h1>
      <div class="admin-form">
        <input type="text" v-model="title" placeholder="Title" />
        <input type="text" v-model="subtitle" placeholder="Subtitle" />
        <input type="text" v-model="location" placeholder="Location" />
        <button @click="addImage">Add Image</button>
        <textarea v-model="description" placeholder="Description"></textarea>
        <button @click="addSection">Add Section</button>
        <div v-for="(section, index) in sections" :key="index">
          <input
            type="text"
            v-model="section.title"
            placeholder="Section Title"
          />
          <textarea
            v-model="section.content"
            placeholder="Section Content"
          ></textarea>
          <button @click="addSectionImage(index)">Add Image to Section</button>
        </div>
        <button @click="submitAttraction">Add Attraction</button>
      </div>
    </main>
    <footer>
      <p>&copy; 2024 Vatan. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      title: '',
      subtitle: '',
      location: '',
      description: '',
      sections: [],
    }
  },
  methods: {
    addImage() {
      // Logic to add image
    },
    addSection() {
      this.sections.push({
        title: '',
        content: '',
      })
    },
    addSectionImage(index) {
      // Logic to add image to section
    },
    submitAttraction() {
      // Logic to submit new attraction
    },
    logout() {
      // Logic to logout
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

nav button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

main {
  padding: 20px;
}

.admin-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.admin-form input,
.admin-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.admin-form button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
}

footer {
  padding: 10px;
  text-align: center;
  background-color: #f8f9fa;
}
</style>
