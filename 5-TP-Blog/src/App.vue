<template lang="">
  <div>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
  body {
    font-family: Sans-serif;
    background-color: #1e1e2c;
    color: white;
  }
</style>
