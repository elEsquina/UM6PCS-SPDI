<template>
  <form @submit="login">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { projectFirestore, projectAuth } from '@/firebase/Config.js';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      projectAuth.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // Login successful, redirect to another page
          this.$router.push('/dashboard');
        })
        .catch(error => {
          // Handle login error
          console.error(error);
        });
    }
  }
};
</script>