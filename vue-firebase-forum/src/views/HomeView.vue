<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-form-input v-model="searchQuery" placeholder="Rechercher..."></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card>
            <b-card-title>Discussions Récentes</b-card-title>
            <b-card-text v-for="(discussion, index) in filteredRecentDiscussions" :key="index">
              <b>{{ discussion.title }}</b> - {{ discussion.summary }}
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card>
            <b-card-title>Discussions Populaires</b-card-title>
            <b-card-text v-for="(discussion, index) in filteredPopularDiscussions" :key="index">
              <b>{{ discussion.title }}</b> - {{ discussion.summary }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      recentDiscussions: [
        { title: 'Titre de la discussion 1', summary: 'Résumé de la discussion 1...' },
        { title: 'Titre de la discussion 2', summary: 'Résumé de la discussion 2...' },
        { title: 'Titre de la discussion 3', summary: 'Résumé de la discussion 3...' }
      ],
      popularDiscussions: [
        { title: 'Titre de la discussion 1', summary: 'Résumé de la discussion 1...' },
        { title: 'Titre de la discussion 2', summary: 'Résumé de la discussion 2...' },
        { title: 'Titre de la discussion 3', summary: 'Résumé de la discussion 3...' }
      ]
    };
  },
  computed: {
    filteredRecentDiscussions() {
      return this.recentDiscussions.filter(discussion =>
        discussion.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        discussion.summary.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredPopularDiscussions() {
      return this.popularDiscussions.filter(discussion =>
        discussion.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        discussion.summary.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
