<template>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="6">
          <b-card>
            <b-card-title>Créer une nouvelle discussion</b-card-title>
            <b-form @submit.prevent="createDiscussion">
              <b-form-group label="Titre:" label-for="title">
                <b-form-input id="title" v-model="title" required></b-form-input>
              </b-form-group>
              <b-form-group label="Contenu:" label-for="content">
                <b-form-textarea id="content" v-model="content" rows="6" required></b-form-textarea>
              </b-form-group>
              <b-form-group label="Catégorie:" label-for="category">
                <b-form-select id="category" v-model="category" :options="categories" required></b-form-select>
              </b-form-group>
              <b-button type="submit" variant="primary">Créer</b-button>
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
        title: '',
        content: '',
        category: null,
        categories: [
          { value: null, text: 'Sélectionnez une catégorie' },
          { value: 'cat1', text: 'Catégorie 1' },
          { value: 'cat2', text: 'Catégorie 2' },
          { value: 'cat3', text: 'Catégorie 3' }
        ]
      };
    },
    methods: {
      createDiscussion() {
        // Handle discussion creation logic here
        const newDiscussion = {
          title: this.title,
          content: this.content,
          category: this.category,
          author: 'currentUser', // Replace with actual current user
          date: new Date()
        };
        console.log(newDiscussion);
        // You can then send newDiscussion to your backend
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  