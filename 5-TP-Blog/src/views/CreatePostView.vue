<template>
  <div class="create-post">
    <h1>Create a New Post</h1>
    <form @submit="submitForm">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="post.title" required>
      
      <label for="body">Content:</label>
      <textarea id="body" v-model="post.content" required></textarea>
      
      <label for="tags">Tags:</label>
      <input type="text" id="tags" v-model="post.tags" required>
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { projectFirestore } from '@/firebase/Config.js';

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        tags: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.post.tags = this.post.tags.split(' ');
      projectFirestore.collection('posts').add(this.post);
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style scoped>
.create-post {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
