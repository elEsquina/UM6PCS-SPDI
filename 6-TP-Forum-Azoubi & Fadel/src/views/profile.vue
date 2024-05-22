<template>
  <div class="paddd">
    <div v-if="user" class="profile-container">
      <div class="profile-header">
        <h1>Profile</h1>
        <p>Name: <span class="profile-detail">{{ user.displayName }}</span></p>
        <p>Email: <span class="profile-detail">{{ user.email }}</span></p>
        <p>Creation Time: <span class="profile-detail">{{ user.createdAt }}</span></p>
      </div>
      
      <div class="threads-section">
        <h1>Threads:</h1>
        <ListThread v-if="threads.length > 0" :threads="threads" />
        <div v-else>Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
import ListThread from '@/components/ListThread.vue';
import { getUserById } from '@/firebase/Authentification/getUser';
import { getThreadsByIds } from '@/firebase/Firestore/getthread.js';

export default {
  name: 'Profile',
  components: { ListThread },
  data() {
    return {
      user: null,
      threads: [],
    };
  },
  methods: {},
  async created() {
    try {
      const userId = this.$route.params.id;
      this.user = await getUserById(userId);
      if (this.user) {
        this.user.createdAt = this.user.createdAt.toDate();

        const { posts, error, load } = await getThreadsByIds(this.user.threads);
        await load();
        this.threads = posts.value;
      } else {
        console.error('User not found.');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }
};
</script>

<style scoped>
.paddd {
  padding: 20px;
}

.profile-container {
  margin-top:100px;
  background-color: #f0f8ff; 
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
  background: linear-gradient(to right, rgb(10, 181, 130), rgb(4, 141, 113)); 
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: left;
  color: #fff;
}

.profile-header h1 {
  color: #fff;
  margin-bottom: 10px;
}

.profile-detail {
  font-weight: bold;
  color: #fff;
}

.threads-section {
  background-color: #ffffff; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.threads-section h1 {
  color: #007bff; 
  margin-bottom: 10px;
}

p {
  margin: 10px 0;
  font-size: 16px;
  color: #333; 
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

</style>
