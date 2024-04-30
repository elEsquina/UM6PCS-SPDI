<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add">Add job</RouterLink>
    </nav>

  <RouterView />

</template>

<style scoped>

nav{
  display: flex;
  justify-content: center;

  margin-top: 1rem;
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (hover: hover) {
  nav a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

</style>
