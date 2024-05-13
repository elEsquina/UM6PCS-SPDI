<template>
  <div>
    <h3 style="text-align: center;">Tag cloud</h3>
    <div class="tag-cloud">
      <div :class="{'tagdiv': true, 'red': selectedTag === tag }" v-for="tag in topTags" :key="tag" @click="filterPosts(tag)">
        {{ tag }}
      </div>

      <div class="tagdiv red" @click="clearselection">Clear</div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['topTags'],
  data() {
    return {
      selectedTag: null
    };
  },
  methods: {
    filterPosts(tag) {
      this.selectedTag = tag;
      this.$emit('filterposts', tag);
    },
    clearselection() {
      this.selectedTag = null;
      this.$emit('filterposts', null);
    }
  }
};
</script>

<style scoped>

.tag-cloud {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.tagdiv {
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background-color: #007bff;
}

.tagdiv:hover {
  background-color: #19c58c;
}

.red{
  background-color: #c20f0f;
}

</style>