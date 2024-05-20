<template>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <b-card-title>Catégorie: {{ categoryName }}</b-card-title>
            <b-card-text v-for="(discussion, index) in discussions" :key="index">
              <b>{{ discussion.title }}</b> - {{ discussion.summary }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categoryName: 'Nom de la catégorie',
        discussions: [
          { title: 'Titre de la discussion 1', summary: 'Résumé de la discussion 1...' },
          { title: 'Titre de la discussion 2', summary: 'Résumé de la discussion 2...' },
          { title: 'Titre de la discussion 3', summary: 'Résumé de la discussion 3...' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  