<script setup>
  import JobDetail from '../components/JobDetail.vue'
</script>

<template>
  
  <fieldset class="container">
    <div class="rightborder">
      <div v-for="(job, index) in joblist" class="jobdisplay ">
        <h2 class="green" @click="openinfo(index)">{{ job.title }}</h2>
      </div>
    </div>

    <JobDetail :id="selectedId" :specialID="specialid" class="jobdetail">
      <template v-if="joblist[selectedId]">
        <h1> {{joblist[selectedId].title}} </h1>
        <p> <span class="green"> Description: </span> {{joblist[selectedId].description}} </p>
        <p>  <span class="green"> salary: </span> {{joblist[selectedId].salary}} $</p>
        <p> <span class="green"> Creation date: </span> {{joblist[selectedId].date_of_creation}} </p>
        <p> <span class="green"> Experience: </span> {{joblist[selectedId].years_of_experience}} </p>
      </template>
    </JobDetail>

  </fieldset>
</template>

<script>
export default {
  data() {
    return {
        joblist : [],
        selectedId: 0,
        specialid: 0,
    };
  },
  methods: {
    openinfo(id){
      this.selectedId = id;
      this.specialid = this.joblist[this.selectedId].id;
    }
  },
  mounted(){
    fetch("http://localhost:3000/jobs")
    .then(res => res.json())
    .then(data => {
      this.joblist = data;
      this.selectedId = 0;
      this.specialid = this.joblist[0].id; 
    })
    .catch(err => console.log(err.message))
}
};
</script>

<style scoped>

  h1{
    color: hsla(160, 100%, 37%, 1);
    margin: 0 auto;
    margin-bottom: 30px;
  }

  p{
    font-size: 1.2rem;
  }

  .container{
    margin-top: 50px;
    border-color: var(--color-border);
    border-style: solid;

    display: grid;
    grid-template-columns: 250px calc(100% - 280px);
    gap: 30px;
  }

  .rightborder{
    border-right: 1px solid var(--color-border);
  } 

  .green{
    cursor: pointer;
  }

  .jobdisplay {
    display: flex; flex-direction: column; justify-content: center;
    width: 250px;
    height: 50px;
  }

  h2:hover {
    color: var(--color-text);
  }
  .jobdisplay:hover{
    background-color: hsla(160, 100%, 37%, 0.2);
  }


  span {
    cursor: default;
  }

</style>