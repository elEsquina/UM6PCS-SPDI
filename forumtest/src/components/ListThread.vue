<template>
    <div class="threads-container">
      <div v-for="item in threadsWithUsernames" :key="item.id" class="thread-item">
        <h1 class="thread-title">{{ item.title }}</h1>
        <p class="thread-author">By {{ item.authorName }}</p>
        <router-link :to="'/discussion/' + item.id" class="view-link">
          <button class="view-button">View</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { getUserById } from '@/firebase/Authentification/getUser';
  
  export default {
    props: ["threads"],
    data() {
      return {
        threadsWithUsernames: []
      };
    },
    async created() {
      console.log("Threads in ListThread:", this.threads);
      this.threadsWithUsernames = await this.getThreadsWithUsernames(this.threads);
    },
    methods: {
      async getuser(id) {
        const user = await getUserById(id);
        return user.displayName;
      },
      
      async getThreadsWithUsernames(threads) {
        const threadsWithUsernames = await Promise.all(
          threads.map(async (thread) => {
            const authorName = await this.getuser(thread.author);
            return { ...thread, authorName };
          })
        );
        return threadsWithUsernames;
      }
    }
  }
  </script>
  
  <style scoped>
  .threads-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #fafafa; 
  }
  
  .thread-item {
    background-color: #ffffff; 
    border: 1px solid #dbdbdb; 
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out; }
  
  .thread-item:hover {
    transform: scale(1.02); }
  
  .thread-title {
    font-size: 24px;
    font-weight: bold;
    color: #333; 
    margin-bottom: 10px;
  }
  
  .thread-author {
    font-size: 16px;
    color: #888; 
    margin-bottom: 20px;
  }
  
  .view-link {
    text-decoration: none; 
  }
  
  .view-button {
    background-color: #0095f6; 
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .view-button:hover {
    background-color: #0077c2; 
  }
  </style>
  