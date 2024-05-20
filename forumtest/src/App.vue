<template>
    <UserMenu/>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view/>
</template>

<script>
import UserMenu from '@/components/UserMenu.vue';

export default {
  name: 'App',
  components: {
   UserMenu
  },
  created() {

  }
}
</script>

<style>
body{
  font-family: Arial, sans-serif;
}
</style>
