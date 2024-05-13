<template>
  <fieldset>
    <h1>{{ post.title }}</h1>
    <p>{{ snippet }}</p>
    <div>
      <h3>Tags:</h3>
      <div class="tagslist">
        <div v-for="tag in post.tags" :key="tag">{{ tag }}</div>
      </div>
    </div>

    <br>
    <button @click="this.$emit('viewdetails', post.id)">View Details</button>
    <button @click="editpage()">Edit</button>
    <button class="red" @click="deletepage()">Delete</button>
  </fieldset>
</template>

<script>
import { projectFirestore } from '@/firebase/Config.js';
export default {
  name: 'SinglePost',
  props: ['post'],
  data() {
    return {
      snippet: ''
    };
  },
  mounted() {
    this.snippet = this.post.content.substring(0, 50)+"...";
  },
  methods: {
    editpage() {
      this.$router.push({ name: 'editPost', params: { id: this.post.id } });
    },
    deletepage() {
      projectFirestore.collection('posts').doc(this.post.id).delete();
      location.reload();
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #33E1ED;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.tagslist{
  display: flex;
  gap: 15px;
}

button:hover {
  color: white;
}
button{
  background-color: #33E1ED;
  color: #2D2D44;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
}

.red{
  background-color: #be1a1a;
  color: white; 
}
.red:hover{
  color: #2D2D44;
}

</style>

