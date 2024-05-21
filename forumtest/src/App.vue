<template>
    <router-view/>
</template>

<script>
import UserInfo from './components/UserInfo.vue';
export default {
  name: 'App',
  components: { UserInfo },
  created() {

  }
}
</script>

<style>
body{
  font-family: Arial, sans-serif;
}
</style>
