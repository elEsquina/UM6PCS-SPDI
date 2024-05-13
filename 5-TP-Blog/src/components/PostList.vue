<template>
    <div>
        <div v-for="post in posts">
            <SinglePost v-show="selectedTag === null || (selectedTag && post.tags.includes(selectedTag))" @viewdetails="viewdetails" :post="post"/>
            <br>
        </div>
    </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";

export default {
    name: "PostList",
    props: ['posts', 'selectedTag'],
    components: {
        SinglePost
    },
    methods: {
        viewdetails(id) {
            this.$router.push({ name: 'details', params: { id: id } });
        }
    }
};
</script>