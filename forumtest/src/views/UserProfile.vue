<template>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="6">
          <b-card>
            <b-card-title>Profil Utilisateur</b-card-title>
            <b-form @submit.prevent="updateProfile">
              <b-form-group label="Nom:" label-for="name">
                <b-form-input id="name" v-model="name" required></b-form-input>
              </b-form-group>
              <b-form-group label="Email:" label-for="email">
                <b-form-input id="email" v-model="email" type="email" required></b-form-input>
              </b-form-group>
              <b-form-group label="Photo de profil:" label-for="profilePicture">
                <b-form-file id="profilePicture" @change="onFileChange"></b-form-file>
              </b-form-group>
              <b-button type="submit" variant="primary">Mettre à jour</b-button>
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
        name: '',
        email: '',
        profilePicture: null
      };
    },
    methods: {
      onFileChange(event) {
        this.profilePicture = event.target.files[0];
      },
      updateProfile() {
        // Handle profile update logic here
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  