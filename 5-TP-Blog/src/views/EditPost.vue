<template>
  <div class="create-post">
    <h1>Edit existing Post</h1>
    <form @submit="submitForm">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="post.title" required>
      
      <label for="body">Content:</label>
      <textarea id="body" v-model="post.content" required></textarea>
      
      <label for="tags">Tags:</label>
      <input type="text" id="tags" v-model="post.tags" required>
      
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
import getpost from '@/firebase/getpost.js'; 
import { projectFirestore } from '@/firebase/Config.js'

export default {
  data() {
    return {
      post: {}
    };
  },
  methods: {
    submitForm(){
      console.log('submitForm called with this.post');
      
      this.post.tags = this.post.tags.split(' ');
      const { id, ...post } = this.post;
      
      try {
        const postRef = projectFirestore.collection('posts').doc(id);
        async function updatePost() {
          await postRef.update(post);
        }
        updatePost();
      } catch (err) {
        console.error('Error updating document:', err);
      }
      this.$router.push({ name: 'home' });
    },
    async fetchPost(){
      const id = this.$route.params.id;
      const { post, error, load }  = getpost(id);
      await load();
      this.post = post.value;
      this.post.tags = this.post.tags.join(' ');
    }
  },
  created() {
    this.fetchPost();
  }
}
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
