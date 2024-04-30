<template>
    <div>
      <slot>

      </slot>

      <nav>
        <RouterLink :to="'Jobs/' + specialID">Edit</RouterLink>
        <a @click="Delete()" href="#">Delete</a>
      </nav>

    </div>
</template>

<script>
export default {
  props: ['id', 'specialID'],
  methods: {
      Delete() {
        fetch("http://localhost:3000/jobs/"+this.specialID, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
        })
        .catch(error => console.log(error));
        
        location.reload();
      }

    }
}
</script>

<style scoped>

div{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

nav{
  display: flex;
  justify-content: center;
  text-align: left;
  font-size: 1rem;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (hover: hover) {
  nav a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    color: var(--color-text);
  }
}

</style>