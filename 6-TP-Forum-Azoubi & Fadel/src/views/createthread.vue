<template>
  <div class="create-thread">
    <h1 class="create-thread-title">Create Thread</h1>
    <form @submit.prevent="add" class="thread-form">
      <div class="form-group">
        <label for="title" class="form-label">Title:</label>
        <input type="text" id="title" v-model="title" class="form-input">
      </div>
      <div class="form-group">
        <label for="content" class="form-label">Content:</label>
        <textarea id="content" v-model="content" class="form-textarea"></textarea>
      </div>
      <div class="form-group">
        <label for="tags" class="form-label">Tags (separated by space):</label>
        <input type="text" id="tags" v-model="tags" class="form-input">
      </div>
      <button type="submit" class="submit-button">Create Thread</button>
    </form>
  </div>
</template>

<script>
import { addNewThread, appendAnswerToThread } from '@/firebase/Firestore/addThread';
import { getUser } from '@/firebase/Authentification/getUser';

export default {
  name: 'CreateThread',
  data() {
    return {
      title: '',
      content: '',
      tags: ''
    };
  },
  methods: {
    add() {
      const uid = getUser().uid;
      const tagsArray = this.tags.trim().split(' ');
      const data = {
        title: this.title,
        content: this.content,
        tags: tagsArray
      };
      addNewThread(uid, data); 
      this.$router.push({ path: '/dashboard' });
    }
  }
};
</script>

<style scoped>
.create-thread {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.create-thread-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.thread-form {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.submit-button {
  background-color: #3897f0;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #3578e5;
}
</style>
