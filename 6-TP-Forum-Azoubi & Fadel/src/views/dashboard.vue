<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <ListThread v-if="threads.length > 0" :threads="threads" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ListThread from '@/components/ListThread.vue';
import getposts from '@/firebase/getposts.js'; 

export default {
  components: {
    ListThread,
  },
  data() {
    return {
      threads: []
    };
  },
  async created() {
    try {
      const {load, posts} = getposts();
      await load();
      this.threads = posts.value;
      console.log('Threads:', this.threads)
    } catch (error) {
      console.error('Error fetching threads:', error);
    }
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fafafa; 
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 100%;
}

.dashboard-container > * {
  width: 600px;
}

h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

</style>
