<template>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <b-card-title>{{ discussion.title }}</b-card-title>
            <b-card-text>
              {{ discussion.content }}
            </b-card-text>
          </b-card>
          <b-card>
            <b-card-title>Réponses</b-card-title>
            <b-card-text v-for="(response, index) in responses" :key="index">
              {{ response.content }} - <i>{{ response.author }}</i>
            </b-card-text>
          </b-card>
          <b-form @submit.prevent="addResponse">
            <b-form-group label="Répondre:" label-for="response">
              <b-form-textarea id="response" v-model="newResponse" rows="3" required></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">Envoyer</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  export default {
    data() {
      return {
        discussion: {},
        responses: [],
        newResponse: '',
        discussionId: this.$route.params.id, // Assuming you pass the discussion ID as a route parameter
      };
    },
    created() {
      this.fetchDiscussion();
      this.fetchResponses();
    },
    methods: {
      fetchDiscussion() {
        const db = firebase.firestore();
        db.collection('discussions').doc(this.discussionId).get().then(doc => {
          if (doc.exists) {
            this.discussion = doc.data();
          } else {
            console.error("No such discussion!");
          }
        }).catch(error => {
          console.error("Error fetching discussion: ", error);
        });
      },
      fetchResponses() {
        const db = firebase.firestore();
        db.collection('responses').where('discussionId', '==', this.discussionId).get().then(querySnapshot => {
          this.responses = querySnapshot.docs.map(doc => doc.data());
        }).catch(error => {
          console.error("Error fetching responses: ", error);
        });
      },
      addResponse() {
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;
  
        if (user) {
          const newResponse = {
            content: this.newResponse,
            author: user.email,
            discussionId: this.discussionId,
            date: new Date(),
          };
  
          db.collection('responses').add(newResponse).then(() => {
            this.responses.push(newResponse);
            this.newResponse = '';
          }).catch(error => {
            console.error("Error adding response: ", error);
          });
        } else {
          console.error("User not authenticated");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  