<template>
  <div>
    <h1>{{ postinfo.title }}</h1>
    <p>{{ postinfo.content }}</p>

    <h3>Tags:</h3>
    <div class="tagslist">
      <div v-for="tag in postinfo.tags" :key="tag">{{ tag }}</div>
    </div>

  </div>
</template>

<script>
import getpost from '@/firebase/getpost.js'; 

export default {
  data() {
    return {
      postinfo: {}
    };
  },
  methods: {
    async fetchPost(){
      const id = this.$route.params.id;
      const { post, error, load }  = getpost(id);
      await load();
      this.postinfo = post.value;
    }
  },
  created() {
    this.fetchPost();
  }
}

</script>

<style>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #33E1ED;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.tagslist{
  display: flex;
  gap: 15px;
}
</style>