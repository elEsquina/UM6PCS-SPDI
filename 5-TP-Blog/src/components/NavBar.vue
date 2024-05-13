<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/addPost">Add Post</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
    nav {
      padding: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    nav a {
      margin-right: 10px;
      color: #33E1ED;
      text-decoration: none;
      font-weight: bold;
      text-align: center;
    }
    nav a:hover {
      color: #555;
    }
</style>