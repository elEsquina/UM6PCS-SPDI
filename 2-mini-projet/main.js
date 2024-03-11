fetch('taskList.json')
.then(response => response.json())
.then(data => {
  const app = Vue.createApp({

    data() {
      return {
        tasks: data,
        filter: 'all'
      };
    },
    computed: {
      totalTasks() {
        return this.tasks.length;
      }
    },

    methods: {
      filterto(filter) {
        this.filter = filter;
      },
      markAsCompleted(task) {
        task.completed = true;
      }
    },
  })

  app.mount('#app')
})


