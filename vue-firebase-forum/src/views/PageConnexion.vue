<template>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="4">
          <b-card>
            <b-card-title>Connexion</b-card-title>
            <b-form @submit.prevent="login">
              <b-form-group label="Email:" label-for="email">
                <b-form-input id="email" v-model="email" type="email" required></b-form-input>
              </b-form-group>
              <b-form-group label="Mot de passe:" label-for="password">
                <b-form-input id="password" v-model="password" type="password" required></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Se connecter</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Handle login logic here
        const credentials = {
          email: this.email,
          password: this.password
        };
        console.log(credentials);
        // You can then send credentials to your backend for authentication
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  