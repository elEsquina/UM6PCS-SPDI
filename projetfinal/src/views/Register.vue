<template>
  <form @submit="register">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Register</button>
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
    register(event) {
      event.preventDefault();
      projectAuth.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/dashboard');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>