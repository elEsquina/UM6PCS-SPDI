<template lang="">
  <div class="griddisplay">
    <PostList :posts="posts" :selectedTag="selectedtag" @filterposts="ontagselected" class="left"/>
    <TagCloud :topTags="tags" class="right"/>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";
import getposts from "@/firebase/getposts.js";

export default {
  components: {
      PostList,
      TagCloud
  },
  data(){
    return {
      posts: [],
      tags: [],
      selectedtag: null,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const { load, posts } = getposts();
        await load();
        if (posts) {
          this.posts = posts.value;
          this.gatheralltags();
        } 
        else {
          console.error('Posts is null');
        }
      } catch (error) {
        console.error(error);
      }
    },
    gatheralltags() {
      const tagmap = {};
      this.posts.forEach(post => {
        post.tags.forEach(tag => {
          if (tagmap[tag]) {
            tagmap[tag]++;
          } else {
            tagmap[tag] = 1;
          }
        });
      });
      const sortedTags = Object.entries(tagmap).sort((a, b) => b[1] - a[1]).map(entry => entry[0]);
      this.tags = sortedTags.slice(0, 5);
    },
    ontagselected(tag) {
      this.selectedtag = tag;
    },
  },
  created() {
    this.fetchPosts();
  },
}
</script>
<style scoped>
  .griddisplay{
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 30px;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>