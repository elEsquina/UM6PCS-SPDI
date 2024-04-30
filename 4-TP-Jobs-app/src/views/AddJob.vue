<template>

  <fieldset class="container">
    <form @submit.prevent="handleSubmit">

      <div>  
        <label for="Jobtitle">Job title: </label>
        <input class="inputstyle" type="text" v-model="title" name="Jobtitle" required>
      </div>

      <div>  
        <label for="Description">Description: </label>
        <input class="inputstyle" type="text" v-model="description" name="Description" required>
      </div>
      <div>  
        <label for="Salary">Salary: </label>
        <input class="inputstyle" type="text" v-model="salary" name="Salary" required>
      </div>

      <div>  
        <label for="Creation date">Creation date: </label>
        <input class="inputstyle" type="date" v-model="date_creation" name="Creation date" required>
      </div>

      <div>  
        <label for="Years of experience">Years of experience: </label>
        <input class="inputstyle" type="number" v-model="years_experience" name="Years of experience" required>
      </div>

      <div class="btn">
        <input type="submit" value="Add">
        <input type="reset" value="Clear">
      </div>

    </form>
  </fieldset>



</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        salary: '',
        date_creation: '',
        years_experience: 0
      };
    },

    methods: {
      handleSubmit() {
        const newDATA = {
          title: this.title,
          description: this.description,
          salary: this.salary,
          date_of_creation: this.date_creation,
          years_of_experience: this.years_experience
        };

        fetch("http://localhost:3000/jobs", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newDATA)
        })
        .catch(error => console.log(error));

        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>

label{
  display: inline-block;
  width: 200px;
  padding: 10px;
}

.inputstyle{
  background-color: transparent;

  border: 1px solid hsla(160, 100%, 37%, 1);
  color: var(--color-text);

  text-align: center;

  width: 200px;
  padding: 10px;

}

.container{
  margin-top: 50px;
  border-color: var(--color-border);
  border-style: solid;

  padding: 20px;
}

form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.btn{

  display: flex;
  justify-content: center;
  text-align: left;
}

.btn input {
  border: hidden;
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);

  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.4s;
}

.btn input:first-of-type {
  border: 0;
}

@media (hover: hover) {
  .btn input:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    color: var(--color-text);
  }
}

</style>